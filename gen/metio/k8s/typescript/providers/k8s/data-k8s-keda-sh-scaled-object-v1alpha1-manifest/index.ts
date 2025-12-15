// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKedaShScaledObjectV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#metadata DataK8SKedaShScaledObjectV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata;
  /**
  * ScaledObjectSpec is the spec for a ScaledObject resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#spec DataK8SKedaShScaledObjectV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKedaShScaledObjectV1Alpha1ManifestSpec;
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#annotations DataK8SKedaShScaledObjectV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#labels DataK8SKedaShScaledObjectV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#name DataK8SKedaShScaledObjectV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#namespace DataK8SKedaShScaledObjectV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKedaShScaledObjectV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKedaShScaledObjectV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies {
  /**
  * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#period_seconds DataK8SKedaShScaledObjectV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * type is used to specify the scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#type DataK8SKedaShScaledObjectV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value contains the amount of change which is permitted by the policy. It must be greater than zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#value DataK8SKedaShScaledObjectV1Alpha1Manifest#value}
  */
  readonly value: number;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
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

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodSeconds = undefined;
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
      this._periodSeconds = value.periodSeconds;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // period_seconds - computed: false, optional: false, required: true
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesOutputReference {
    return new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown {
  /**
  * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#policies DataK8SKedaShScaledObjectV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies[] | cdktf.IResolvable;
  /**
  * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#select_policy DataK8SKedaShScaledObjectV1Alpha1Manifest#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#stabilization_window_seconds DataK8SKedaShScaledObjectV1Alpha1Manifest#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesToTerraform, false)(struct!.policies),
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesList",
    },
    select_policy: {
      value: cdktf.stringToHclTerraform(struct!.selectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._selectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPolicy = this._selectPolicy;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policies.internalValue = undefined;
      this._selectPolicy = undefined;
      this._stabilizationWindowSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policies.internalValue = value.policies;
      this._selectPolicy = value.selectPolicy;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
    }
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // select_policy - computed: false, optional: true, required: false
  private _selectPolicy?: string; 
  public get selectPolicy() {
    return this.getStringAttribute('select_policy');
  }
  public set selectPolicy(value: string) {
    this._selectPolicy = value;
  }
  public resetSelectPolicy() {
    this._selectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPolicyInput() {
    return this._selectPolicy;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies {
  /**
  * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#period_seconds DataK8SKedaShScaledObjectV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * type is used to specify the scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#type DataK8SKedaShScaledObjectV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value contains the amount of change which is permitted by the policy. It must be greater than zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#value DataK8SKedaShScaledObjectV1Alpha1Manifest#value}
  */
  readonly value: number;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
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

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodSeconds = undefined;
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
      this._periodSeconds = value.periodSeconds;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // period_seconds - computed: false, optional: false, required: true
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesOutputReference {
    return new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp {
  /**
  * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#policies DataK8SKedaShScaledObjectV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies[] | cdktf.IResolvable;
  /**
  * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#select_policy DataK8SKedaShScaledObjectV1Alpha1Manifest#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#stabilization_window_seconds DataK8SKedaShScaledObjectV1Alpha1Manifest#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesToTerraform, false)(struct!.policies),
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesList",
    },
    select_policy: {
      value: cdktf.stringToHclTerraform(struct!.selectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._selectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPolicy = this._selectPolicy;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policies.internalValue = undefined;
      this._selectPolicy = undefined;
      this._stabilizationWindowSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policies.internalValue = value.policies;
      this._selectPolicy = value.selectPolicy;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
    }
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // select_policy - computed: false, optional: true, required: false
  private _selectPolicy?: string; 
  public get selectPolicy() {
    return this.getStringAttribute('select_policy');
  }
  public set selectPolicy(value: string) {
    this._selectPolicy = value;
  }
  public resetSelectPolicy() {
    this._selectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPolicyInput() {
    return this._selectPolicy;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior {
  /**
  * scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#scale_down DataK8SKedaShScaledObjectV1Alpha1Manifest#scale_down}
  */
  readonly scaleDown?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown;
  /**
  * scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of: * increase no more than 4 pods per 60 seconds * double the number of pods per 60 seconds No stabilization is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#scale_up DataK8SKedaShScaledObjectV1Alpha1Manifest#scale_up}
  */
  readonly scaleUp?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_down: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownToTerraform(struct!.scaleDown),
    scale_up: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpToTerraform(struct!.scaleUp),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_down: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownToHclTerraform(struct!.scaleDown),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown",
    },
    scale_up: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpToHclTerraform(struct!.scaleUp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDown = this._scaleDown?.internalValue;
    }
    if (this._scaleUp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUp = this._scaleUp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scaleDown.internalValue = undefined;
      this._scaleUp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scaleDown.internalValue = value.scaleDown;
      this._scaleUp.internalValue = value.scaleUp;
    }
  }

  // scale_down - computed: false, optional: true, required: false
  private _scaleDown = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDownOutputReference(this, "scale_down");
  public get scaleDown() {
    return this._scaleDown;
  }
  public putScaleDown(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleDown) {
    this._scaleDown.internalValue = value;
  }
  public resetScaleDown() {
    this._scaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownInput() {
    return this._scaleDown.internalValue;
  }

  // scale_up - computed: false, optional: true, required: false
  private _scaleUp = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUpOutputReference(this, "scale_up");
  public get scaleUp() {
    return this._scaleUp;
  }
  public putScaleUp(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorScaleUp) {
    this._scaleUp.internalValue = value;
  }
  public resetScaleUp() {
    this._scaleUp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpInput() {
    return this._scaleUp.internalValue;
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig {
  /**
  * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#behavior DataK8SKedaShScaledObjectV1Alpha1Manifest#behavior}
  */
  readonly behavior?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#name DataK8SKedaShScaledObjectV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorToTerraform(struct!.behavior),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorToHclTerraform(struct!.behavior),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior",
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

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior.internalValue = value.behavior;
      this._name = value.name;
    }
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehaviorOutputReference(this, "behavior");
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigBehavior) {
    this._behavior.internalValue = value;
  }
  public resetBehavior() {
    this._behavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior.internalValue;
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
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#activation_target DataK8SKedaShScaledObjectV1Alpha1Manifest#activation_target}
  */
  readonly activationTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#formula DataK8SKedaShScaledObjectV1Alpha1Manifest#formula}
  */
  readonly formula?: string;
  /**
  * MetricTargetType specifies the type of metric being targeted, and should be either 'Value', 'AverageValue', or 'Utilization'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#metric_type DataK8SKedaShScaledObjectV1Alpha1Manifest#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#target DataK8SKedaShScaledObjectV1Alpha1Manifest#target}
  */
  readonly target?: string;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiersToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_target: cdktf.stringToTerraform(struct!.activationTarget),
    formula: cdktf.stringToTerraform(struct!.formula),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiersToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_target: {
      value: cdktf.stringToHclTerraform(struct!.activationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationTarget = this._activationTarget;
    }
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationTarget = undefined;
      this._formula = undefined;
      this._metricType = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationTarget = value.activationTarget;
      this._formula = value.formula;
      this._metricType = value.metricType;
      this._target = value.target;
    }
  }

  // activation_target - computed: false, optional: true, required: false
  private _activationTarget?: string; 
  public get activationTarget() {
    return this.getStringAttribute('activation_target');
  }
  public set activationTarget(value: string) {
    this._activationTarget = value;
  }
  public resetActivationTarget() {
    this._activationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationTargetInput() {
    return this._activationTarget;
  }

  // formula - computed: false, optional: true, required: false
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  public resetFormula() {
    this._formula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced {
  /**
  * HorizontalPodAutoscalerConfig specifies horizontal scale config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#horizontal_pod_autoscaler_config DataK8SKedaShScaledObjectV1Alpha1Manifest#horizontal_pod_autoscaler_config}
  */
  readonly horizontalPodAutoscalerConfig?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#restore_to_original_replica_count DataK8SKedaShScaledObjectV1Alpha1Manifest#restore_to_original_replica_count}
  */
  readonly restoreToOriginalReplicaCount?: boolean | cdktf.IResolvable;
  /**
  * ScalingModifiers describes advanced scaling logic options like formula
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#scaling_modifiers DataK8SKedaShScaledObjectV1Alpha1Manifest#scaling_modifiers}
  */
  readonly scalingModifiers?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    horizontal_pod_autoscaler_config: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigToTerraform(struct!.horizontalPodAutoscalerConfig),
    restore_to_original_replica_count: cdktf.booleanToTerraform(struct!.restoreToOriginalReplicaCount),
    scaling_modifiers: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiersToTerraform(struct!.scalingModifiers),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    horizontal_pod_autoscaler_config: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigToHclTerraform(struct!.horizontalPodAutoscalerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig",
    },
    restore_to_original_replica_count: {
      value: cdktf.booleanToHclTerraform(struct!.restoreToOriginalReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scaling_modifiers: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiersToHclTerraform(struct!.scalingModifiers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._horizontalPodAutoscalerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPodAutoscalerConfig = this._horizontalPodAutoscalerConfig?.internalValue;
    }
    if (this._restoreToOriginalReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreToOriginalReplicaCount = this._restoreToOriginalReplicaCount;
    }
    if (this._scalingModifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingModifiers = this._scalingModifiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._horizontalPodAutoscalerConfig.internalValue = undefined;
      this._restoreToOriginalReplicaCount = undefined;
      this._scalingModifiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._horizontalPodAutoscalerConfig.internalValue = value.horizontalPodAutoscalerConfig;
      this._restoreToOriginalReplicaCount = value.restoreToOriginalReplicaCount;
      this._scalingModifiers.internalValue = value.scalingModifiers;
    }
  }

  // horizontal_pod_autoscaler_config - computed: false, optional: true, required: false
  private _horizontalPodAutoscalerConfig = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfigOutputReference(this, "horizontal_pod_autoscaler_config");
  public get horizontalPodAutoscalerConfig() {
    return this._horizontalPodAutoscalerConfig;
  }
  public putHorizontalPodAutoscalerConfig(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedHorizontalPodAutoscalerConfig) {
    this._horizontalPodAutoscalerConfig.internalValue = value;
  }
  public resetHorizontalPodAutoscalerConfig() {
    this._horizontalPodAutoscalerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalPodAutoscalerConfigInput() {
    return this._horizontalPodAutoscalerConfig.internalValue;
  }

  // restore_to_original_replica_count - computed: false, optional: true, required: false
  private _restoreToOriginalReplicaCount?: boolean | cdktf.IResolvable; 
  public get restoreToOriginalReplicaCount() {
    return this.getBooleanAttribute('restore_to_original_replica_count');
  }
  public set restoreToOriginalReplicaCount(value: boolean | cdktf.IResolvable) {
    this._restoreToOriginalReplicaCount = value;
  }
  public resetRestoreToOriginalReplicaCount() {
    this._restoreToOriginalReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToOriginalReplicaCountInput() {
    return this._restoreToOriginalReplicaCount;
  }

  // scaling_modifiers - computed: false, optional: true, required: false
  private _scalingModifiers = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiersOutputReference(this, "scaling_modifiers");
  public get scalingModifiers() {
    return this._scalingModifiers;
  }
  public putScalingModifiers(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedScalingModifiers) {
    this._scalingModifiers.internalValue = value;
  }
  public resetScalingModifiers() {
    this._scalingModifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModifiersInput() {
    return this._scalingModifiers.internalValue;
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#failure_threshold DataK8SKedaShScaledObjectV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#replicas DataK8SKedaShScaledObjectV1Alpha1Manifest#replicas}
  */
  readonly replicas: number;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallbackToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallbackToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureThreshold = value.failureThreshold;
      this._replicas = value.replicas;
    }
  }

  // failure_threshold - computed: false, optional: false, required: true
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#api_version DataK8SKedaShScaledObjectV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#env_source_container_name DataK8SKedaShScaledObjectV1Alpha1Manifest#env_source_container_name}
  */
  readonly envSourceContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#kind DataK8SKedaShScaledObjectV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#name DataK8SKedaShScaledObjectV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    env_source_container_name: cdktf.stringToTerraform(struct!.envSourceContainerName),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
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
    env_source_container_name: {
      value: cdktf.stringToHclTerraform(struct!.envSourceContainerName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._envSourceContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.envSourceContainerName = this._envSourceContainerName;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._envSourceContainerName = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._envSourceContainerName = value.envSourceContainerName;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // env_source_container_name - computed: false, optional: true, required: false
  private _envSourceContainerName?: string; 
  public get envSourceContainerName() {
    return this.getStringAttribute('env_source_container_name');
  }
  public set envSourceContainerName(value: string) {
    this._envSourceContainerName = value;
  }
  public resetEnvSourceContainerName() {
    this._envSourceContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envSourceContainerNameInput() {
    return this._envSourceContainerName;
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
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef {
  /**
  * Kind of the resource being referred to. Defaults to TriggerAuthentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#kind DataK8SKedaShScaledObjectV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#name DataK8SKedaShScaledObjectV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRefToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRefToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef | cdktf.IResolvable): any {
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

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
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
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers {
  /**
  * AuthenticationRef points to the TriggerAuthentication or ClusterTriggerAuthentication object that is used to authenticate the scaler with the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#authentication_ref DataK8SKedaShScaledObjectV1Alpha1Manifest#authentication_ref}
  */
  readonly authenticationRef?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#metadata DataK8SKedaShScaledObjectV1Alpha1Manifest#metadata}
  */
  readonly metadata: { [key: string]: string };
  /**
  * MetricTargetType specifies the type of metric being targeted, and should be either 'Value', 'AverageValue', or 'Utilization'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#metric_type DataK8SKedaShScaledObjectV1Alpha1Manifest#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#name DataK8SKedaShScaledObjectV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#type DataK8SKedaShScaledObjectV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#use_cached_metrics DataK8SKedaShScaledObjectV1Alpha1Manifest#use_cached_metrics}
  */
  readonly useCachedMetrics?: boolean | cdktf.IResolvable;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_ref: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRefToTerraform(struct!.authenticationRef),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    use_cached_metrics: cdktf.booleanToTerraform(struct!.useCachedMetrics),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_ref: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRefToHclTerraform(struct!.authenticationRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cached_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.useCachedMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRef = this._authenticationRef?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useCachedMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCachedMetrics = this._useCachedMetrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationRef.internalValue = undefined;
      this._metadata = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._type = undefined;
      this._useCachedMetrics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationRef.internalValue = value.authenticationRef;
      this._metadata = value.metadata;
      this._metricType = value.metricType;
      this._name = value.name;
      this._type = value.type;
      this._useCachedMetrics = value.useCachedMetrics;
    }
  }

  // authentication_ref - computed: false, optional: true, required: false
  private _authenticationRef = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRefOutputReference(this, "authentication_ref");
  public get authenticationRef() {
    return this._authenticationRef;
  }
  public putAuthenticationRef(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersAuthenticationRef) {
    this._authenticationRef.internalValue = value;
  }
  public resetAuthenticationRef() {
    this._authenticationRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRefInput() {
    return this._authenticationRef.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // use_cached_metrics - computed: false, optional: true, required: false
  private _useCachedMetrics?: boolean | cdktf.IResolvable; 
  public get useCachedMetrics() {
    return this.getBooleanAttribute('use_cached_metrics');
  }
  public set useCachedMetrics(value: boolean | cdktf.IResolvable) {
    this._useCachedMetrics = value;
  }
  public resetUseCachedMetrics() {
    this._useCachedMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCachedMetricsInput() {
    return this._useCachedMetrics;
  }
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersOutputReference {
    return new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKedaShScaledObjectV1Alpha1ManifestSpec {
  /**
  * AdvancedConfig specifies advance scaling options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#advanced DataK8SKedaShScaledObjectV1Alpha1Manifest#advanced}
  */
  readonly advanced?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#cooldown_period DataK8SKedaShScaledObjectV1Alpha1Manifest#cooldown_period}
  */
  readonly cooldownPeriod?: number;
  /**
  * Fallback is the spec for fallback options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#fallback DataK8SKedaShScaledObjectV1Alpha1Manifest#fallback}
  */
  readonly fallback?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#idle_replica_count DataK8SKedaShScaledObjectV1Alpha1Manifest#idle_replica_count}
  */
  readonly idleReplicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#initial_cooldown_period DataK8SKedaShScaledObjectV1Alpha1Manifest#initial_cooldown_period}
  */
  readonly initialCooldownPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#max_replica_count DataK8SKedaShScaledObjectV1Alpha1Manifest#max_replica_count}
  */
  readonly maxReplicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#min_replica_count DataK8SKedaShScaledObjectV1Alpha1Manifest#min_replica_count}
  */
  readonly minReplicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#polling_interval DataK8SKedaShScaledObjectV1Alpha1Manifest#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * ScaleTarget holds the reference to the scale target Object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#scale_target_ref DataK8SKedaShScaledObjectV1Alpha1Manifest#scale_target_ref}
  */
  readonly scaleTargetRef: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#triggers DataK8SKedaShScaledObjectV1Alpha1Manifest#triggers}
  */
  readonly triggers: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers[] | cdktf.IResolvable;
}

export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedToTerraform(struct!.advanced),
    cooldown_period: cdktf.numberToTerraform(struct!.cooldownPeriod),
    fallback: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallbackToTerraform(struct!.fallback),
    idle_replica_count: cdktf.numberToTerraform(struct!.idleReplicaCount),
    initial_cooldown_period: cdktf.numberToTerraform(struct!.initialCooldownPeriod),
    max_replica_count: cdktf.numberToTerraform(struct!.maxReplicaCount),
    min_replica_count: cdktf.numberToTerraform(struct!.minReplicaCount),
    polling_interval: cdktf.numberToTerraform(struct!.pollingInterval),
    scale_target_ref: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
    triggers: cdktf.listMapper(dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersToTerraform, false)(struct!.triggers),
  }
}


export function dataK8SKedaShScaledObjectV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKedaShScaledObjectV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedToHclTerraform(struct!.advanced),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced",
    },
    cooldown_period: {
      value: cdktf.numberToHclTerraform(struct!.cooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fallback: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback",
    },
    idle_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.idleReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_cooldown_period: {
      value: cdktf.numberToHclTerraform(struct!.initialCooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.minReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_target_ref: {
      value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct!.scaleTargetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef",
    },
    triggers: {
      value: cdktf.listMapperHcl(dataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersToHclTerraform, false)(struct!.triggers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKedaShScaledObjectV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKedaShScaledObjectV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanced = this._advanced?.internalValue;
    }
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._idleReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleReplicaCount = this._idleReplicaCount;
    }
    if (this._initialCooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCooldownPeriod = this._initialCooldownPeriod;
    }
    if (this._maxReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicaCount = this._maxReplicaCount;
    }
    if (this._minReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicaCount = this._minReplicaCount;
    }
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._scaleTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetRef = this._scaleTargetRef?.internalValue;
    }
    if (this._triggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advanced.internalValue = undefined;
      this._cooldownPeriod = undefined;
      this._fallback.internalValue = undefined;
      this._idleReplicaCount = undefined;
      this._initialCooldownPeriod = undefined;
      this._maxReplicaCount = undefined;
      this._minReplicaCount = undefined;
      this._pollingInterval = undefined;
      this._scaleTargetRef.internalValue = undefined;
      this._triggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advanced.internalValue = value.advanced;
      this._cooldownPeriod = value.cooldownPeriod;
      this._fallback.internalValue = value.fallback;
      this._idleReplicaCount = value.idleReplicaCount;
      this._initialCooldownPeriod = value.initialCooldownPeriod;
      this._maxReplicaCount = value.maxReplicaCount;
      this._minReplicaCount = value.minReplicaCount;
      this._pollingInterval = value.pollingInterval;
      this._scaleTargetRef.internalValue = value.scaleTargetRef;
      this._triggers.internalValue = value.triggers;
    }
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvancedOutputReference(this, "advanced");
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecAdvanced) {
    this._advanced.internalValue = value;
  }
  public resetAdvanced() {
    this._advanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced.internalValue;
  }

  // cooldown_period - computed: false, optional: true, required: false
  private _cooldownPeriod?: number; 
  public get cooldownPeriod() {
    return this.getNumberAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: number) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // idle_replica_count - computed: false, optional: true, required: false
  private _idleReplicaCount?: number; 
  public get idleReplicaCount() {
    return this.getNumberAttribute('idle_replica_count');
  }
  public set idleReplicaCount(value: number) {
    this._idleReplicaCount = value;
  }
  public resetIdleReplicaCount() {
    this._idleReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleReplicaCountInput() {
    return this._idleReplicaCount;
  }

  // initial_cooldown_period - computed: false, optional: true, required: false
  private _initialCooldownPeriod?: number; 
  public get initialCooldownPeriod() {
    return this.getNumberAttribute('initial_cooldown_period');
  }
  public set initialCooldownPeriod(value: number) {
    this._initialCooldownPeriod = value;
  }
  public resetInitialCooldownPeriod() {
    this._initialCooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCooldownPeriodInput() {
    return this._initialCooldownPeriod;
  }

  // max_replica_count - computed: false, optional: true, required: false
  private _maxReplicaCount?: number; 
  public get maxReplicaCount() {
    return this.getNumberAttribute('max_replica_count');
  }
  public set maxReplicaCount(value: number) {
    this._maxReplicaCount = value;
  }
  public resetMaxReplicaCount() {
    this._maxReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaCountInput() {
    return this._maxReplicaCount;
  }

  // min_replica_count - computed: false, optional: true, required: false
  private _minReplicaCount?: number; 
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
  public set minReplicaCount(value: number) {
    this._minReplicaCount = value;
  }
  public resetMinReplicaCount() {
    this._minReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaCountInput() {
    return this._minReplicaCount;
  }

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // scale_target_ref - computed: false, optional: false, required: true
  private _scaleTargetRef = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRefOutputReference(this, "scale_target_ref");
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpecTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest k8s_keda_sh_scaled_object_v1alpha1_manifest}
*/
export class DataK8SKedaShScaledObjectV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keda_sh_scaled_object_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKedaShScaledObjectV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKedaShScaledObjectV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKedaShScaledObjectV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKedaShScaledObjectV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keda_sh_scaled_object_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keda_sh_scaled_object_v1alpha1_manifest k8s_keda_sh_scaled_object_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKedaShScaledObjectV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKedaShScaledObjectV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keda_sh_scaled_object_v1alpha1_manifest',
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
  private _metadata = new DataK8SKedaShScaledObjectV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKedaShScaledObjectV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKedaShScaledObjectV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKedaShScaledObjectV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKedaShScaledObjectV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKedaShScaledObjectV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKedaShScaledObjectV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
