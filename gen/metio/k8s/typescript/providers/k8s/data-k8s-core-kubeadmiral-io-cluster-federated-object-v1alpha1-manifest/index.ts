// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#metadata DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired behavior of the FederatedObject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#spec DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec;
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#group DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#kind DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#namespace DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#op DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#path DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#value DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters {
  /**
  * Cluster is the name of the member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#cluster DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#cluster}
  */
  readonly cluster: string;
  /**
  * Patches is the list of override patches for the member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#patches DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    patches: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesToTerraform, false)(struct!.patches),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._patches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._patches.internalValue = value.patches;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides {
  /**
  * Override is the list of member clusters and their respective override patches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#clusters DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#clusters}
  */
  readonly clusters: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters[] | cdktf.IResolvable;
  /**
  * Controller identifies the controller responsible for this override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#controller DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#controller}
  */
  readonly controller: string;
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersToTerraform, false)(struct!.clusters),
    controller: cdktf.stringToTerraform(struct!.controller),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersList",
    },
    controller: {
      value: cdktf.stringToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
      this._controller = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters.internalValue = value.clusters;
      this._controller = value.controller;
    }
  }

  // clusters - computed: false, optional: false, required: true
  private _clusters = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // controller - computed: false, optional: false, required: true
  private _controller?: string; 
  public get controller() {
    return this.getStringAttribute('controller');
  }
  public set controller(value: string) {
    this._controller = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement {
  /**
  * Cluster is the name of the member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#cluster DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#cluster}
  */
  readonly cluster: string;
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements {
  /**
  * Controller identifies the controller responsible for this placement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#controller DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#controller}
  */
  readonly controller: string;
  /**
  * Placement is the list of member clusters that the Kubernetes object should be propagated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#placement DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#placement}
  */
  readonly placement: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement[] | cdktf.IResolvable;
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller: cdktf.stringToTerraform(struct!.controller),
    placement: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementToTerraform, false)(struct!.placement),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller: {
      value: cdktf.stringToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementToHclTerraform, false)(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controller = undefined;
      this._placement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controller = value.controller;
      this._placement.internalValue = value.placement;
    }
  }

  // controller - computed: false, optional: false, required: true
  private _controller?: string; 
  public get controller() {
    return this.getStringAttribute('controller');
  }
  public set controller(value: string) {
    this._controller = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // placement - computed: false, optional: false, required: true
  private _placement = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacementList(this, "placement", false);
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsPlacement[] | cdktf.IResolvable) {
    this._placement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsOutputReference {
    return new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec {
  /**
  * Follows defines other objects, or 'leaders', that the Kubernetes object should follow during propagation, i.e. the Kubernetes object should be propagated to all member clusters that its 'leaders' are placed in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#follows DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#follows}
  */
  readonly follows?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows[] | cdktf.IResolvable;
  /**
  * Overrides describe the overrides that should be applied to the base template of the Kubernetes object before it is propagated to individual member clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#overrides DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#overrides}
  */
  readonly overrides?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides[] | cdktf.IResolvable;
  /**
  * Placements describe the member clusters that the Kubernetes object will be propagated to, which is a union of all the listed clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#placements DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#placements}
  */
  readonly placements?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements[] | cdktf.IResolvable;
  /**
  * Template is the base template of the Kubernetes object to be propagated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#template DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest#template}
  */
  readonly template: { [key: string]: string };
}

export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follows: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsToTerraform, false)(struct!.follows),
    overrides: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesToTerraform, false)(struct!.overrides),
    placements: cdktf.listMapper(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsToTerraform, false)(struct!.placements),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
  }
}


export function dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follows: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsToHclTerraform, false)(struct!.follows),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsList",
    },
    overrides: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesList",
    },
    placements: {
      value: cdktf.listMapperHcl(dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsToHclTerraform, false)(struct!.placements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsList",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._follows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.follows = this._follows?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._placements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placements = this._placements?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._follows.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._placements.internalValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._follows.internalValue = value.follows;
      this._overrides.internalValue = value.overrides;
      this._placements.internalValue = value.placements;
      this._template = value.template;
    }
  }

  // follows - computed: false, optional: true, required: false
  private _follows = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollowsList(this, "follows", false);
  public get follows() {
    return this._follows;
  }
  public putFollows(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecFollows[] | cdktf.IResolvable) {
    this._follows.internalValue = value;
  }
  public resetFollows() {
    this._follows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followsInput() {
    return this._follows.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // placements - computed: false, optional: true, required: false
  private _placements = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacementsList(this, "placements", false);
  public get placements() {
    return this._placements;
  }
  public putPlacements(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecPlacements[] | cdktf.IResolvable) {
    this._placements.internalValue = value;
  }
  public resetPlacements() {
    this._placements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementsInput() {
    return this._placements.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest k8s_core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest}
*/
export class DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest k8s_core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_kubeadmiral_io_cluster_federated_object_v1alpha1_manifest',
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
  private _metadata = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoClusterFederatedObjectV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
