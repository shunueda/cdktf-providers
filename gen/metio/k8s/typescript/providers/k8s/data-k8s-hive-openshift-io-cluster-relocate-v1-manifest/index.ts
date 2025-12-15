// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoClusterRelocateV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#metadata DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata;
  /**
  * ClusterRelocateSpec defines the relocation of clusters from one Hive instance to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#spec DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#annotations DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#labels DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#name DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#namespace DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#key DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#operator DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#values DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsOutputReference {
    return new DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#match_expressions DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#match_labels DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorToTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsList",
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

export class DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#name DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace where the secret lives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#namespace DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec {
  /**
  * ClusterDeploymentSelector is a LabelSelector indicating which clusters will be relocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#cluster_deployment_selector DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#cluster_deployment_selector}
  */
  readonly clusterDeploymentSelector: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector;
  /**
  * KubeconfigSecretRef is a reference to the secret containing the kubeconfig for the destination Hive instance. The kubeconfig must be in a data field where the key is 'kubeconfig'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#kubeconfig_secret_ref DataK8SHiveOpenshiftIoClusterRelocateV1Manifest#kubeconfig_secret_ref}
  */
  readonly kubeconfigSecretRef: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef;
}

export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_deployment_selector: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorToTerraform(struct!.clusterDeploymentSelector),
    kubeconfig_secret_ref: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRefToTerraform(struct!.kubeconfigSecretRef),
  }
}


export function dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_deployment_selector: {
      value: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorToHclTerraform(struct!.clusterDeploymentSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector",
    },
    kubeconfig_secret_ref: {
      value: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRefToHclTerraform(struct!.kubeconfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDeploymentSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDeploymentSelector = this._clusterDeploymentSelector?.internalValue;
    }
    if (this._kubeconfigSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfigSecretRef = this._kubeconfigSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDeploymentSelector.internalValue = undefined;
      this._kubeconfigSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDeploymentSelector.internalValue = value.clusterDeploymentSelector;
      this._kubeconfigSecretRef.internalValue = value.kubeconfigSecretRef;
    }
  }

  // cluster_deployment_selector - computed: false, optional: false, required: true
  private _clusterDeploymentSelector = new DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelectorOutputReference(this, "cluster_deployment_selector");
  public get clusterDeploymentSelector() {
    return this._clusterDeploymentSelector;
  }
  public putClusterDeploymentSelector(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecClusterDeploymentSelector) {
    this._clusterDeploymentSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeploymentSelectorInput() {
    return this._clusterDeploymentSelector.internalValue;
  }

  // kubeconfig_secret_ref - computed: false, optional: false, required: true
  private _kubeconfigSecretRef = new DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRefOutputReference(this, "kubeconfig_secret_ref");
  public get kubeconfigSecretRef() {
    return this._kubeconfigSecretRef;
  }
  public putKubeconfigSecretRef(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecKubeconfigSecretRef) {
    this._kubeconfigSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigSecretRefInput() {
    return this._kubeconfigSecretRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest k8s_hive_openshift_io_cluster_relocate_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoClusterRelocateV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_cluster_relocate_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoClusterRelocateV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoClusterRelocateV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoClusterRelocateV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoClusterRelocateV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_cluster_relocate_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_cluster_relocate_v1_manifest k8s_hive_openshift_io_cluster_relocate_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoClusterRelocateV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_cluster_relocate_v1_manifest',
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
  private _metadata = new DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterRelocateV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoClusterRelocateV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
