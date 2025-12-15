// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#metadata DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata;
  /**
  * NodeUnitSpec defines the desired state of NodeUnit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#spec DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec;
}
export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#annotations DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#labels DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#name DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#key DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#operator DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#values DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector {
  /**
  * If specified, select node to join nodeUnit according to Annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#annotations DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#match_expressions DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#match_labels DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    match_expressions: cdktf.listMapper(dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
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
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsList",
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
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

  public set internalValue(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
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
      this._annotations = value.annotations;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
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

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#effect DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#key DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#time_added DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#value DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsToTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsToHclTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsOutputReference {
    return new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode {
  /**
  * If specified, set annotations to all nodes of nodeunit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#annotations DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * If specified, set labels to all nodes of nodeunit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#labels DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * If specified, set taints to all nodes of nodeunit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#taints DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#taints}
  */
  readonly taints?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints[] | cdktf.IResolvable;
}

export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeToTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    taints: cdktf.listMapper(dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsToTerraform, false)(struct!.taints),
  }
}


export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeToHclTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode | cdktf.IResolvable): any {
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
    taints: {
      value: cdktf.listMapperHcl(dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode | cdktf.IResolvable | undefined {
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
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._taints.internalValue = undefined;
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
      this._taints.internalValue = value.taints;
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

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#effect DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#key DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#time_added DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#value DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsToTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsToHclTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsOutputReference {
    return new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec {
  /**
  * If specified, If node exists, join nodeunit directly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#nodes DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#nodes}
  */
  readonly nodes?: string[];
  /**
  * If specified, Label selector for nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#selector DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector;
  /**
  * If specified, set the relevant properties to the node of nodeunit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#setnode DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#setnode}
  */
  readonly setnode?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode;
  /**
  * If specified, allow to set taints to nodeunit for the scheduler to choose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#taints DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#taints}
  */
  readonly taints?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable;
  /**
  * Type of nodeunit， vaule: Cloud、Edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#type DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Unschedulable controls nodeUnit schedulability of new workwolads. By default, nodeUnit is schedulable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#unschedulable DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest#unschedulable}
  */
  readonly unschedulable?: boolean | cdktf.IResolvable;
}

export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodes),
    selector: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    setnode: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeToTerraform(struct!.setnode),
    taints: cdktf.listMapper(dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsToTerraform, false)(struct!.taints),
    type: cdktf.stringToTerraform(struct!.type),
    unschedulable: cdktf.booleanToTerraform(struct!.unschedulable),
  }
}


export function dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector",
    },
    setnode: {
      value: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeToHclTerraform(struct!.setnode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unschedulable: {
      value: cdktf.booleanToHclTerraform(struct!.unschedulable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._setnode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setnode = this._setnode?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unschedulable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unschedulable = this._unschedulable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodes = undefined;
      this._selector.internalValue = undefined;
      this._setnode.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._type = undefined;
      this._unschedulable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodes = value.nodes;
      this._selector.internalValue = value.selector;
      this._setnode.internalValue = value.setnode;
      this._taints.internalValue = value.taints;
      this._type = value.type;
      this._unschedulable = value.unschedulable;
    }
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // setnode - computed: false, optional: true, required: false
  private _setnode = new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnodeOutputReference(this, "setnode");
  public get setnode() {
    return this._setnode;
  }
  public putSetnode(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecSetnode) {
    this._setnode.internalValue = value;
  }
  public resetSetnode() {
    this._setnode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setnodeInput() {
    return this._setnode.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
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

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: boolean | cdktf.IResolvable; 
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
  public set unschedulable(value: boolean | cdktf.IResolvable) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest k8s_site_superedge_io_node_unit_v1alpha1_manifest}
*/
export class DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_site_superedge_io_node_unit_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSiteSuperedgeIoNodeUnitV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_site_superedge_io_node_unit_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/site_superedge_io_node_unit_v1alpha1_manifest k8s_site_superedge_io_node_unit_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_site_superedge_io_node_unit_v1alpha1_manifest',
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
  private _metadata = new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSiteSuperedgeIoNodeUnitV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
