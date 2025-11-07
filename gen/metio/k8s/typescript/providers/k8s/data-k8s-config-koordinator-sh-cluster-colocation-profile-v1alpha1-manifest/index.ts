// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#metadata DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata;
  /**
  * ClusterColocationProfileSpec is a description of a ClusterColocationProfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#spec DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec;
}
export interface DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#annotations DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#labels DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#name DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#key DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#operator DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#values DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#match_expressions DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#match_labels DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorToTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorToHclTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsList",
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

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#key DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#operator DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#values DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#match_expressions DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#match_labels DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsList",
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

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec {
  /**
  * AnnotationKeysMapping describes the annotations that needs to inject into Pod.Annotations with the same values. It sets the Pod.Annotations[AnnotationsToAnnotations[k]] = Pod.Annotations[k] for each key k.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#annotation_keys_mapping DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#annotation_keys_mapping}
  */
  readonly annotationKeysMapping?: { [key: string]: string };
  /**
  * Annotations describes the k/v pair that needs to inject into Pod.Annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#annotations DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * KoordinatorPriority defines the Pod sub-priority in Koordinator. The priority value will be injected into Pod as label koordinator.sh/priority. Various Koordinator components determine the priority of the Pod in the Koordinator through KoordinatorPriority and the priority value in PriorityClassName. The higher the value, the higher the priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#koordinator_priority DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#koordinator_priority}
  */
  readonly koordinatorPriority?: number;
  /**
  * LabelKeysMapping describes the labels that needs to inject into Pod.Labels with the same values. It sets the Pod.Labels[LabelsToLabels[k]] = Pod.Labels[k] for each key k.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#label_keys_mapping DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#label_keys_mapping}
  */
  readonly labelKeysMapping?: { [key: string]: string };
  /**
  * Labels describes the k/v pair that needs to inject into Pod.Labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#labels DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * NamespaceSelector decides whether to mutate/validate Pods if the namespace matches the selector. Default to the empty LabelSelector, which matches everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#namespace_selector DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector;
  /**
  * Patch indicates patching podTemplate that will be injected to the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#patch DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#patch}
  */
  readonly patch?: { [key: string]: string };
  /**
  * If specified, the priorityClassName and the priority value defined in PriorityClass will be injected into the Pod. The PriorityClassName, priority value in PriorityClassName and KoordinatorPriority will affect the scheduling, preemption and other behaviors of Koordinator system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#priority_class_name DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Probability indicates profile will make effect with a probability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#probability DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#probability}
  */
  readonly probability?: string;
  /**
  * QoSClass describes the type of Koordinator QoS that the Pod is running. The value will be injected into Pod as label koordinator.sh/qosClass. Options are LSE/LSR/LS/BE/SYSTEM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#qos_class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#qos_class}
  */
  readonly qosClass?: string;
  /**
  * If specified, the pod will be dispatched by specified scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#scheduler_name DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Selector decides whether to mutate/validate Pods if the Pod matches the selector. Default to the empty LabelSelector, which matches everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#selector DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector;
}

export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecToTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_keys_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotationKeysMapping),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    koordinator_priority: cdktf.numberToTerraform(struct!.koordinatorPriority),
    label_keys_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelKeysMapping),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace_selector: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
    patch: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.patch),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    probability: cdktf.stringToTerraform(struct!.probability),
    qos_class: cdktf.stringToTerraform(struct!.qosClass),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    selector: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_keys_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotationKeysMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    koordinator_priority: {
      value: cdktf.numberToHclTerraform(struct!.koordinatorPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_keys_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelKeysMapping),
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
    namespace_selector: {
      value: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector",
    },
    patch: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.patch),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probability: {
      value: cdktf.stringToHclTerraform(struct!.probability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_class: {
      value: cdktf.stringToHclTerraform(struct!.qosClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationKeysMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationKeysMapping = this._annotationKeysMapping;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._koordinatorPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.koordinatorPriority = this._koordinatorPriority;
    }
    if (this._labelKeysMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelKeysMapping = this._labelKeysMapping;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._probability !== undefined) {
      hasAnyValues = true;
      internalValueResult.probability = this._probability;
    }
    if (this._qosClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosClass = this._qosClass;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationKeysMapping = undefined;
      this._annotations = undefined;
      this._koordinatorPriority = undefined;
      this._labelKeysMapping = undefined;
      this._labels = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._patch = undefined;
      this._priorityClassName = undefined;
      this._probability = undefined;
      this._qosClass = undefined;
      this._schedulerName = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationKeysMapping = value.annotationKeysMapping;
      this._annotations = value.annotations;
      this._koordinatorPriority = value.koordinatorPriority;
      this._labelKeysMapping = value.labelKeysMapping;
      this._labels = value.labels;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._patch = value.patch;
      this._priorityClassName = value.priorityClassName;
      this._probability = value.probability;
      this._qosClass = value.qosClass;
      this._schedulerName = value.schedulerName;
      this._selector.internalValue = value.selector;
    }
  }

  // annotation_keys_mapping - computed: false, optional: true, required: false
  private _annotationKeysMapping?: { [key: string]: string }; 
  public get annotationKeysMapping() {
    return this.getStringMapAttribute('annotation_keys_mapping');
  }
  public set annotationKeysMapping(value: { [key: string]: string }) {
    this._annotationKeysMapping = value;
  }
  public resetAnnotationKeysMapping() {
    this._annotationKeysMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationKeysMappingInput() {
    return this._annotationKeysMapping;
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

  // koordinator_priority - computed: false, optional: true, required: false
  private _koordinatorPriority?: number; 
  public get koordinatorPriority() {
    return this.getNumberAttribute('koordinator_priority');
  }
  public set koordinatorPriority(value: number) {
    this._koordinatorPriority = value;
  }
  public resetKoordinatorPriority() {
    this._koordinatorPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get koordinatorPriorityInput() {
    return this._koordinatorPriority;
  }

  // label_keys_mapping - computed: false, optional: true, required: false
  private _labelKeysMapping?: { [key: string]: string }; 
  public get labelKeysMapping() {
    return this.getStringMapAttribute('label_keys_mapping');
  }
  public set labelKeysMapping(value: { [key: string]: string }) {
    this._labelKeysMapping = value;
  }
  public resetLabelKeysMapping() {
    this._labelKeysMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelKeysMappingInput() {
    return this._labelKeysMapping;
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

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: { [key: string]: string }; 
  public get patch() {
    return this.getStringMapAttribute('patch');
  }
  public set patch(value: { [key: string]: string }) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // probability - computed: false, optional: true, required: false
  private _probability?: string; 
  public get probability() {
    return this.getStringAttribute('probability');
  }
  public set probability(value: string) {
    this._probability = value;
  }
  public resetProbability() {
    this._probability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilityInput() {
    return this._probability;
  }

  // qos_class - computed: false, optional: true, required: false
  private _qosClass?: string; 
  public get qosClass() {
    return this.getStringAttribute('qos_class');
  }
  public set qosClass(value: string) {
    this._qosClass = value;
  }
  public resetQosClass() {
    this._qosClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosClassInput() {
    return this._qosClass;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest k8s_config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest}
*/
export class DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest k8s_config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_config_koordinator_sh_cluster_colocation_profile_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec) {
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
      metadata: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigKoordinatorShClusterColocationProfileV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
