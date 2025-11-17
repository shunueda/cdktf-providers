// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#metadata DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata;
  /**
  * SubscriptionSpec defines the desired state of Subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#spec DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec;
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#annotations DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#labels DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#name DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#namespace DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#effect DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#key DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#operator DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#toleration_seconds DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#value DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
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
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#key DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#operator DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#values DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#key DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#operator DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#values DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#match_expressions DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#match_fields DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#preference DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#weight DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference",
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#key DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#operator DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#values DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#match_expressions DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#match_labels DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#label_selector DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#match_label_keys DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#max_skew DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#min_domains DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#node_affinity_policy DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#node_taints_policy DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#topology_key DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#when_unsatisfiable DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing {
  /**
  * MaxClusters describes the upper bound number of target clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#max_clusters DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#max_clusters}
  */
  readonly maxClusters?: number;
  /**
  * MinClusters describes the lower bound number of target clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#min_clusters DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#min_clusters}
  */
  readonly minClusters?: number;
  /**
  * PreferredClusters describes the assigning preference. If we have a preference for cluster group A compared to cluster group B (i.e., group A has a larger Weight), desired replicas will be assigned to cluster group A as many as possible, while the rest ones will be assigned to cluster group B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#preferred_clusters DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#preferred_clusters}
  */
  readonly preferredClusters?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters[] | cdktf.IResolvable;
  /**
  * Type of dynamic dividing replica strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#strategy DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#strategy}
  */
  readonly strategy: string;
  /**
  * TopologySpreadConstraints describes how a group of replicas ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. Present only for spread divided scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#topology_spread_constraints DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_clusters: cdktf.numberToTerraform(struct!.maxClusters),
    min_clusters: cdktf.numberToTerraform(struct!.minClusters),
    preferred_clusters: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersToTerraform, false)(struct!.preferredClusters),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    topology_spread_constraints: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_clusters: {
      value: cdktf.numberToHclTerraform(struct!.maxClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_clusters: {
      value: cdktf.numberToHclTerraform(struct!.minClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_clusters: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersToHclTerraform, false)(struct!.preferredClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClusters = this._maxClusters;
    }
    if (this._minClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.minClusters = this._minClusters;
    }
    if (this._preferredClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredClusters = this._preferredClusters?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxClusters = undefined;
      this._minClusters = undefined;
      this._preferredClusters.internalValue = undefined;
      this._strategy = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxClusters = value.maxClusters;
      this._minClusters = value.minClusters;
      this._preferredClusters.internalValue = value.preferredClusters;
      this._strategy = value.strategy;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // max_clusters - computed: false, optional: true, required: false
  private _maxClusters?: number; 
  public get maxClusters() {
    return this.getNumberAttribute('max_clusters');
  }
  public set maxClusters(value: number) {
    this._maxClusters = value;
  }
  public resetMaxClusters() {
    this._maxClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClustersInput() {
    return this._maxClusters;
  }

  // min_clusters - computed: false, optional: true, required: false
  private _minClusters?: number; 
  public get minClusters() {
    return this.getNumberAttribute('min_clusters');
  }
  public set minClusters(value: number) {
    this._minClusters = value;
  }
  public resetMinClusters() {
    this._minClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClustersInput() {
    return this._minClusters;
  }

  // preferred_clusters - computed: false, optional: true, required: false
  private _preferredClusters = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClustersList(this, "preferred_clusters", false);
  public get preferredClusters() {
    return this._preferredClusters;
  }
  public putPreferredClusters(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingPreferredClusters[] | cdktf.IResolvable) {
    this._preferredClusters.internalValue = value;
  }
  public resetPreferredClusters() {
    this._preferredClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredClustersInput() {
    return this._preferredClusters.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling {
  /**
  * DynamicDividing describes how to divide replicas into target clusters dynamically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#dynamic_dividing DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#dynamic_dividing}
  */
  readonly dynamicDividing?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing;
  /**
  * Type of dividing replica scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#type DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_dividing: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingToTerraform(struct!.dynamicDividing),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_dividing: {
      value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingToHclTerraform(struct!.dynamicDividing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing",
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicDividing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicDividing = this._dynamicDividing?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicDividing.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicDividing.internalValue = value.dynamicDividing;
      this._type = value.type;
    }
  }

  // dynamic_dividing - computed: false, optional: true, required: false
  private _dynamicDividing = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividingOutputReference(this, "dynamic_dividing");
  public get dynamicDividing() {
    return this._dynamicDividing;
  }
  public putDynamicDividing(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingDynamicDividing) {
    this._dynamicDividing.internalValue = value;
  }
  public resetDynamicDividing() {
    this._dynamicDividing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDividingInput() {
    return this._dynamicDividing.internalValue;
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
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds {
  /**
  * APIVersion defines the versioned schema of this representation of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#api_version DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind is a string value representing the REST resource this object represents. In CamelCase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#kind DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#name DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#namespace DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#key DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#operator DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#values DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#match_expressions DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#match_labels DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsList",
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy {
  /**
  * MinClusters is the minimum number of clusters to be selected in this subgroup. If this value is more than the total number of clusters in this subgroup, then all clusters will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#min_clusters DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#min_clusters}
  */
  readonly minClusters?: number;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategyToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_clusters: cdktf.numberToTerraform(struct!.minClusters),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategyToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_clusters: {
      value: cdktf.numberToHclTerraform(struct!.minClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.minClusters = this._minClusters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minClusters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minClusters = value.minClusters;
    }
  }

  // min_clusters - computed: false, optional: true, required: false
  private _minClusters?: number; 
  public get minClusters() {
    return this.getNumberAttribute('min_clusters');
  }
  public set minClusters(value: number) {
    this._minClusters = value;
  }
  public resetMinClusters() {
    this._minClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClustersInput() {
    return this._minClusters;
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers {
  /**
  * ClusterAffinity is a label query over managed clusters by labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#cluster_affinity DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#cluster_affinity}
  */
  readonly clusterAffinity: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity;
  /**
  * SubGroupStrategy defines the subgroup strategy for the clusters matched by this subscriber. During the scheduling, all the matching clusters will be treated as a subgroup instead of individual clusters. With subgroup, we can describe clusters with different regions, zones, etc. Present only when SchedulingBySubGroup is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#sub_group_strategy DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#sub_group_strategy}
  */
  readonly subGroupStrategy?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy;
  /**
  * Static weight of subscriber when dividing replicas. Present only for static divided scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#weight DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_affinity: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityToTerraform(struct!.clusterAffinity),
    sub_group_strategy: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategyToTerraform(struct!.subGroupStrategy),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_affinity: {
      value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityToHclTerraform(struct!.clusterAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity",
    },
    sub_group_strategy: {
      value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategyToHclTerraform(struct!.subGroupStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy",
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAffinity = this._clusterAffinity?.internalValue;
    }
    if (this._subGroupStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subGroupStrategy = this._subGroupStrategy?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterAffinity.internalValue = undefined;
      this._subGroupStrategy.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterAffinity.internalValue = value.clusterAffinity;
      this._subGroupStrategy.internalValue = value.subGroupStrategy;
      this._weight = value.weight;
    }
  }

  // cluster_affinity - computed: false, optional: false, required: true
  private _clusterAffinity = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinityOutputReference(this, "cluster_affinity");
  public get clusterAffinity() {
    return this._clusterAffinity;
  }
  public putClusterAffinity(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersClusterAffinity) {
    this._clusterAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAffinityInput() {
    return this._clusterAffinity.internalValue;
  }

  // sub_group_strategy - computed: false, optional: true, required: false
  private _subGroupStrategy = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategyOutputReference(this, "sub_group_strategy");
  public get subGroupStrategy() {
    return this._subGroupStrategy;
  }
  public putSubGroupStrategy(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersSubGroupStrategy) {
    this._subGroupStrategy.internalValue = value;
  }
  public resetSubGroupStrategy() {
    this._subGroupStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subGroupStrategyInput() {
    return this._subGroupStrategy.internalValue;
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

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersOutputReference {
    return new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec {
  /**
  * ClusterTolerations tolerates any matched taints of ManagedCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#cluster_tolerations DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#cluster_tolerations}
  */
  readonly clusterTolerations?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations[] | cdktf.IResolvable;
  /**
  * Dividing scheduling config params. Present only if SchedulingStrategy = Dividing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#dividing_scheduling DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#dividing_scheduling}
  */
  readonly dividingScheduling?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling;
  /**
  * Feeds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#feeds DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#feeds}
  */
  readonly feeds: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds[] | cdktf.IResolvable;
  /**
  * PreemptionPolicy is the Policy for preempting subscriptions with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#preemption_policy DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#preemption_policy}
  */
  readonly preemptionPolicy?: string;
  /**
  * The priority value. clusternet-scheduler use this field to find the priority of the subscription. The higher the value, the higher the priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#priority DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * If specified, the Subscription will be handled by specified scheduler. If not specified, the Subscription will be handled by default scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#scheduler_name DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * If specified, the Subscription will be handled with SchedulingBySubGroup. Used together with SubGroupStrategy in every Subscriber. Can work with all supported SchedulingStrategy, such as Replication, Dividing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#scheduling_by_sub_group DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#scheduling_by_sub_group}
  */
  readonly schedulingBySubGroup?: boolean | cdktf.IResolvable;
  /**
  * If specified, the Subscription will be handled with specified SchedulingStrategy. Otherwise, with generic SchedulingStrategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#scheduling_strategy DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#scheduling_strategy}
  */
  readonly schedulingStrategy?: string;
  /**
  * Subscribers subscribes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#subscribers DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest#subscribers}
  */
  readonly subscribers: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers[] | cdktf.IResolvable;
}

export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_tolerations: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsToTerraform, false)(struct!.clusterTolerations),
    dividing_scheduling: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingToTerraform(struct!.dividingScheduling),
    feeds: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsToTerraform, false)(struct!.feeds),
    preemption_policy: cdktf.stringToTerraform(struct!.preemptionPolicy),
    priority: cdktf.numberToTerraform(struct!.priority),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    scheduling_by_sub_group: cdktf.booleanToTerraform(struct!.schedulingBySubGroup),
    scheduling_strategy: cdktf.stringToTerraform(struct!.schedulingStrategy),
    subscribers: cdktf.listMapper(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersToTerraform, false)(struct!.subscribers),
  }
}


export function dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_tolerations: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsToHclTerraform, false)(struct!.clusterTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsList",
    },
    dividing_scheduling: {
      value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingToHclTerraform(struct!.dividingScheduling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling",
    },
    feeds: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsToHclTerraform, false)(struct!.feeds),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsList",
    },
    preemption_policy: {
      value: cdktf.stringToHclTerraform(struct!.preemptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_by_sub_group: {
      value: cdktf.booleanToHclTerraform(struct!.schedulingBySubGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduling_strategy: {
      value: cdktf.stringToHclTerraform(struct!.schedulingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribers: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersToHclTerraform, false)(struct!.subscribers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTolerations = this._clusterTolerations?.internalValue;
    }
    if (this._dividingScheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dividingScheduling = this._dividingScheduling?.internalValue;
    }
    if (this._feeds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.feeds = this._feeds?.internalValue;
    }
    if (this._preemptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionPolicy = this._preemptionPolicy;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._schedulingBySubGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingBySubGroup = this._schedulingBySubGroup;
    }
    if (this._schedulingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingStrategy = this._schedulingStrategy;
    }
    if (this._subscribers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribers = this._subscribers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTolerations.internalValue = undefined;
      this._dividingScheduling.internalValue = undefined;
      this._feeds.internalValue = undefined;
      this._preemptionPolicy = undefined;
      this._priority = undefined;
      this._schedulerName = undefined;
      this._schedulingBySubGroup = undefined;
      this._schedulingStrategy = undefined;
      this._subscribers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTolerations.internalValue = value.clusterTolerations;
      this._dividingScheduling.internalValue = value.dividingScheduling;
      this._feeds.internalValue = value.feeds;
      this._preemptionPolicy = value.preemptionPolicy;
      this._priority = value.priority;
      this._schedulerName = value.schedulerName;
      this._schedulingBySubGroup = value.schedulingBySubGroup;
      this._schedulingStrategy = value.schedulingStrategy;
      this._subscribers.internalValue = value.subscribers;
    }
  }

  // cluster_tolerations - computed: false, optional: true, required: false
  private _clusterTolerations = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerationsList(this, "cluster_tolerations", false);
  public get clusterTolerations() {
    return this._clusterTolerations;
  }
  public putClusterTolerations(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecClusterTolerations[] | cdktf.IResolvable) {
    this._clusterTolerations.internalValue = value;
  }
  public resetClusterTolerations() {
    this._clusterTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTolerationsInput() {
    return this._clusterTolerations.internalValue;
  }

  // dividing_scheduling - computed: false, optional: true, required: false
  private _dividingScheduling = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingSchedulingOutputReference(this, "dividing_scheduling");
  public get dividingScheduling() {
    return this._dividingScheduling;
  }
  public putDividingScheduling(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecDividingScheduling) {
    this._dividingScheduling.internalValue = value;
  }
  public resetDividingScheduling() {
    this._dividingScheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dividingSchedulingInput() {
    return this._dividingScheduling.internalValue;
  }

  // feeds - computed: false, optional: false, required: true
  private _feeds = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeedsList(this, "feeds", false);
  public get feeds() {
    return this._feeds;
  }
  public putFeeds(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecFeeds[] | cdktf.IResolvable) {
    this._feeds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedsInput() {
    return this._feeds.internalValue;
  }

  // preemption_policy - computed: false, optional: true, required: false
  private _preemptionPolicy?: string; 
  public get preemptionPolicy() {
    return this.getStringAttribute('preemption_policy');
  }
  public set preemptionPolicy(value: string) {
    this._preemptionPolicy = value;
  }
  public resetPreemptionPolicy() {
    this._preemptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionPolicyInput() {
    return this._preemptionPolicy;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // scheduling_by_sub_group - computed: false, optional: true, required: false
  private _schedulingBySubGroup?: boolean | cdktf.IResolvable; 
  public get schedulingBySubGroup() {
    return this.getBooleanAttribute('scheduling_by_sub_group');
  }
  public set schedulingBySubGroup(value: boolean | cdktf.IResolvable) {
    this._schedulingBySubGroup = value;
  }
  public resetSchedulingBySubGroup() {
    this._schedulingBySubGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingBySubGroupInput() {
    return this._schedulingBySubGroup;
  }

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string; 
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy;
  }

  // subscribers - computed: false, optional: false, required: true
  private _subscribers = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribersList(this, "subscribers", false);
  public get subscribers() {
    return this._subscribers;
  }
  public putSubscribers(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecSubscribers[] | cdktf.IResolvable) {
    this._subscribers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribersInput() {
    return this._subscribers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest k8s_apps_clusternet_io_subscription_v1alpha1_manifest}
*/
export class DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_clusternet_io_subscription_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsClusternetIoSubscriptionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_clusternet_io_subscription_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_subscription_v1alpha1_manifest k8s_apps_clusternet_io_subscription_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_clusternet_io_subscription_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoSubscriptionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
