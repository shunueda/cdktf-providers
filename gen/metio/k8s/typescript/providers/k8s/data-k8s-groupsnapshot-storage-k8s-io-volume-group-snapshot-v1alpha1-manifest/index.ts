// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#metadata DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired characteristics of a group snapshot requested by a user. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#spec DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec;
}
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#annotations DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#labels DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#name DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#namespace DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#key DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#operator DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#values DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsOutputReference {
    return new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#match_expressions DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#match_labels DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource {
  /**
  * Selector is a label query over persistent volume claims that are to be grouped together for snapshotting. This labelSelector will be used to match the label added to a PVC. If the label is added or removed to a volume after a group snapshot is created, the existing group snapshots won't be modified. Once a VolumeGroupSnapshotContent is created and the sidecar starts to process it, the volume list will not change with retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#selector DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector;
  /**
  * VolumeGroupSnapshotContentName specifies the name of a pre-existing VolumeGroupSnapshotContent object representing an existing volume group snapshot. This field should be set if the volume group snapshot already exists and only needs a representation in Kubernetes. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#volume_group_snapshot_content_name DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#volume_group_snapshot_content_name}
  */
  readonly volumeGroupSnapshotContentName?: string;
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorToTerraform(struct!.selector),
    volume_group_snapshot_content_name: cdktf.stringToTerraform(struct!.volumeGroupSnapshotContentName),
  }
}


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector",
    },
    volume_group_snapshot_content_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupSnapshotContentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._volumeGroupSnapshotContentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupSnapshotContentName = this._volumeGroupSnapshotContentName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector.internalValue = undefined;
      this._volumeGroupSnapshotContentName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector.internalValue = value.selector;
      this._volumeGroupSnapshotContentName = value.volumeGroupSnapshotContentName;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // volume_group_snapshot_content_name - computed: false, optional: true, required: false
  private _volumeGroupSnapshotContentName?: string; 
  public get volumeGroupSnapshotContentName() {
    return this.getStringAttribute('volume_group_snapshot_content_name');
  }
  public set volumeGroupSnapshotContentName(value: string) {
    this._volumeGroupSnapshotContentName = value;
  }
  public resetVolumeGroupSnapshotContentName() {
    this._volumeGroupSnapshotContentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupSnapshotContentNameInput() {
    return this._volumeGroupSnapshotContentName;
  }
}
export interface DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec {
  /**
  * Source specifies where a group snapshot will be created from. This field is immutable after creation. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#source DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#source}
  */
  readonly source: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource;
  /**
  * VolumeGroupSnapshotClassName is the name of the VolumeGroupSnapshotClass requested by the VolumeGroupSnapshot. VolumeGroupSnapshotClassName may be left nil to indicate that the default class will be used. Empty string is not allowed for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#volume_group_snapshot_class_name DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest#volume_group_snapshot_class_name}
  */
  readonly volumeGroupSnapshotClassName?: string;
}

export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecToTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceToTerraform(struct!.source),
    volume_group_snapshot_class_name: cdktf.stringToTerraform(struct!.volumeGroupSnapshotClassName),
  }
}


export function dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource",
    },
    volume_group_snapshot_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupSnapshotClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._volumeGroupSnapshotClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupSnapshotClassName = this._volumeGroupSnapshotClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._volumeGroupSnapshotClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._volumeGroupSnapshotClassName = value.volumeGroupSnapshotClassName;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // volume_group_snapshot_class_name - computed: false, optional: true, required: false
  private _volumeGroupSnapshotClassName?: string; 
  public get volumeGroupSnapshotClassName() {
    return this.getStringAttribute('volume_group_snapshot_class_name');
  }
  public set volumeGroupSnapshotClassName(value: string) {
    this._volumeGroupSnapshotClassName = value;
  }
  public resetVolumeGroupSnapshotClassName() {
    this._volumeGroupSnapshotClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupSnapshotClassNameInput() {
    return this._volumeGroupSnapshotClassName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest}
*/
export class DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_groupsnapshot_storage_k8s_io_volume_group_snapshot_v1alpha1_manifest',
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
  private _metadata = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec) {
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
      metadata: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGroupsnapshotStorageK8SIoVolumeGroupSnapshotV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
