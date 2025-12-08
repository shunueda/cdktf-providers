// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#metadata DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata;
  /**
  * NodeFeatureRuleSpec describes a NodeFeatureRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#spec DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec;
}
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#annotations DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#labels DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#name DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions {
  /**
  * Op is the operator to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#op DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#op}
  */
  readonly op: string;
  /**
  * Value is the list of values that the operand evaluates the input against. Value should be empty if the operator is Exists, DoesNotExist, IsTrue or IsFalse. Value should contain exactly one element if the operator is Gt or Lt and exactly two elements if the operator is GtLt. In other cases Value should contain at least one element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#value DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressionsToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressionsToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
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
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#feature DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#feature}
  */
  readonly feature: string;
  /**
  * MatchExpressionSet contains a set of MatchExpressions, each of which is evaluated against a set of input values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#match_expressions DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions;
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    match_expressions: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressionsToTerraform(struct!.matchExpressions),
  }
}


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressionsToHclTerraform(struct!.matchExpressions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // match_expressions - computed: false, optional: false, required: true
  private _matchExpressions = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressionsOutputReference(this, "match_expressions");
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesMatchExpressions) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesOutputReference {
    return new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny {
  /**
  * MatchFeatures specifies a set of matcher terms all of which must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#match_features DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#match_features}
  */
  readonly matchFeatures: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures[] | cdktf.IResolvable;
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_features: cdktf.listMapper(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesToTerraform, false)(struct!.matchFeatures),
  }
}


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_features: {
      value: cdktf.listMapperHcl(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesToHclTerraform, false)(struct!.matchFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFeatures = this._matchFeatures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchFeatures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchFeatures.internalValue = value.matchFeatures;
    }
  }

  // match_features - computed: false, optional: false, required: true
  private _matchFeatures = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeaturesList(this, "match_features", false);
  public get matchFeatures() {
    return this._matchFeatures;
  }
  public putMatchFeatures(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyMatchFeatures[] | cdktf.IResolvable) {
    this._matchFeatures.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFeaturesInput() {
    return this._matchFeatures.internalValue;
  }
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyList extends cdktf.ComplexList {
  public internalValue? : DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyOutputReference {
    return new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions {
  /**
  * Op is the operator to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#op DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#op}
  */
  readonly op: string;
  /**
  * Value is the list of values that the operand evaluates the input against. Value should be empty if the operator is Exists, DoesNotExist, IsTrue or IsFalse. Value should contain exactly one element if the operator is Gt or Lt and exactly two elements if the operator is GtLt. In other cases Value should contain at least one element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#value DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#value}
  */
  readonly value?: string[];
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressionsToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressionsToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
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
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#feature DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#feature}
  */
  readonly feature: string;
  /**
  * MatchExpressionSet contains a set of MatchExpressions, each of which is evaluated against a set of input values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#match_expressions DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions;
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    match_expressions: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressionsToTerraform(struct!.matchExpressions),
  }
}


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressionsToHclTerraform(struct!.matchExpressions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // match_expressions - computed: false, optional: false, required: true
  private _matchExpressions = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressionsOutputReference(this, "match_expressions");
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesMatchExpressions) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesOutputReference {
    return new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules {
  /**
  * Labels to create if the rule matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#labels DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * LabelsTemplate specifies a template to expand for dynamically generating multiple labels. Data (after template expansion) must be keys with an optional value (<key>[=<value>]) separated by newlines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#labels_template DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#labels_template}
  */
  readonly labelsTemplate?: string;
  /**
  * MatchAny specifies a list of matchers one of which must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#match_any DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#match_any}
  */
  readonly matchAny?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny[] | cdktf.IResolvable;
  /**
  * MatchFeatures specifies a set of matcher terms all of which must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#match_features DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#match_features}
  */
  readonly matchFeatures?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures[] | cdktf.IResolvable;
  /**
  * Name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#name DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Vars is the variables to store if the rule matches. Variables do not directly inflict any changes in the node object. However, they can be referenced from other rules enabling more complex rule hierarchies, without exposing intermediary output values as labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#vars DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#vars}
  */
  readonly vars?: { [key: string]: string };
  /**
  * VarsTemplate specifies a template to expand for dynamically generating multiple variables. Data (after template expansion) must be keys with an optional value (<key>[=<value>]) separated by newlines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#vars_template DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#vars_template}
  */
  readonly varsTemplate?: string;
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    labels_template: cdktf.stringToTerraform(struct!.labelsTemplate),
    match_any: cdktf.listMapper(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyToTerraform, false)(struct!.matchAny),
    match_features: cdktf.listMapper(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesToTerraform, false)(struct!.matchFeatures),
    name: cdktf.stringToTerraform(struct!.name),
    vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vars),
    vars_template: cdktf.stringToTerraform(struct!.varsTemplate),
  }
}


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels_template: {
      value: cdktf.stringToHclTerraform(struct!.labelsTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_any: {
      value: cdktf.listMapperHcl(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyToHclTerraform, false)(struct!.matchAny),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyList",
    },
    match_features: {
      value: cdktf.listMapperHcl(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesToHclTerraform, false)(struct!.matchFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vars_template: {
      value: cdktf.stringToHclTerraform(struct!.varsTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._labelsTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelsTemplate = this._labelsTemplate;
    }
    if (this._matchAny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAny = this._matchAny?.internalValue;
    }
    if (this._matchFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFeatures = this._matchFeatures?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vars !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars;
    }
    if (this._varsTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.varsTemplate = this._varsTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._labelsTemplate = undefined;
      this._matchAny.internalValue = undefined;
      this._matchFeatures.internalValue = undefined;
      this._name = undefined;
      this._vars = undefined;
      this._varsTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._labelsTemplate = value.labelsTemplate;
      this._matchAny.internalValue = value.matchAny;
      this._matchFeatures.internalValue = value.matchFeatures;
      this._name = value.name;
      this._vars = value.vars;
      this._varsTemplate = value.varsTemplate;
    }
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

  // labels_template - computed: false, optional: true, required: false
  private _labelsTemplate?: string; 
  public get labelsTemplate() {
    return this.getStringAttribute('labels_template');
  }
  public set labelsTemplate(value: string) {
    this._labelsTemplate = value;
  }
  public resetLabelsTemplate() {
    this._labelsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsTemplateInput() {
    return this._labelsTemplate;
  }

  // match_any - computed: false, optional: true, required: false
  private _matchAny = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAnyList(this, "match_any", false);
  public get matchAny() {
    return this._matchAny;
  }
  public putMatchAny(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchAny[] | cdktf.IResolvable) {
    this._matchAny.internalValue = value;
  }
  public resetMatchAny() {
    this._matchAny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyInput() {
    return this._matchAny.internalValue;
  }

  // match_features - computed: false, optional: true, required: false
  private _matchFeatures = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeaturesList(this, "match_features", false);
  public get matchFeatures() {
    return this._matchFeatures;
  }
  public putMatchFeatures(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesMatchFeatures[] | cdktf.IResolvable) {
    this._matchFeatures.internalValue = value;
  }
  public resetMatchFeatures() {
    this._matchFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFeaturesInput() {
    return this._matchFeatures.internalValue;
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

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // vars_template - computed: false, optional: true, required: false
  private _varsTemplate?: string; 
  public get varsTemplate() {
    return this.getStringAttribute('vars_template');
  }
  public set varsTemplate(value: string) {
    this._varsTemplate = value;
  }
  public resetVarsTemplate() {
    this._varsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsTemplateInput() {
    return this._varsTemplate;
  }
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesOutputReference {
    return new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec {
  /**
  * Rules is a list of node customization rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#rules DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest#rules}
  */
  readonly rules: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules[] | cdktf.IResolvable;
}

export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest k8s_nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest}
*/
export class DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest k8s_nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_nfd_k8s_sigs_io_node_feature_rule_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec) {
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
      metadata: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNfdK8SSigsIoNodeFeatureRuleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
