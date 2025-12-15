// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#metadata DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#metadata}
  */
  readonly metadata: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata;
  /**
  * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#spec DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#spec}
  */
  readonly spec?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec;
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#annotations DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#labels DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#namespace DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadataToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadataToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies {
  /**
  * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#period_seconds DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * type is used to specify the scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
  /**
  * value contains the amount of change which is permitted by the policy. It must be greater than zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesOutputReference {
    return new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown {
  /**
  * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#policies DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#policies}
  */
  readonly policies?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies[] | cdktf.IResolvable;
  /**
  * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#select_policy DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#stabilization_window_seconds DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesToTerraform, false)(struct!.policies),
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesList",
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown | cdktf.IResolvable | undefined) {
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
  private _policies = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownPolicies[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies {
  /**
  * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#period_seconds DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * type is used to specify the scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
  /**
  * value contains the amount of change which is permitted by the policy. It must be greater than zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesOutputReference {
    return new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp {
  /**
  * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#policies DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#policies}
  */
  readonly policies?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies[] | cdktf.IResolvable;
  /**
  * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#select_policy DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#stabilization_window_seconds DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesToTerraform, false)(struct!.policies),
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesList",
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp | cdktf.IResolvable | undefined) {
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
  private _policies = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpPolicies[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior {
  /**
  * HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#scale_down DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#scale_down}
  */
  readonly scaleDown?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown;
  /**
  * HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#scale_up DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#scale_up}
  */
  readonly scaleUp?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_down: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownToTerraform(struct!.scaleDown),
    scale_up: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpToTerraform(struct!.scaleUp),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_down: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownToHclTerraform(struct!.scaleDown),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown",
    },
    scale_up: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpToHclTerraform(struct!.scaleUp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior | cdktf.IResolvable | undefined) {
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
  private _scaleDown = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDownOutputReference(this, "scale_down");
  public get scaleDown() {
    return this._scaleDown;
  }
  public putScaleDown(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleDown) {
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
  private _scaleUp = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUpOutputReference(this, "scale_up");
  public get scaleUp() {
    return this._scaleUp;
  }
  public putScaleUp(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorScaleUp) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_utilization DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTargetToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTargetToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
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
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource {
  /**
  * container is the name of the container in the pods of the scaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#container DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#container}
  */
  readonly container: string;
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
  /**
  * MetricTarget defines the target value, average value, or average utilization of a specific metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#target DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#target}
  */
  readonly target: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    target: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#key DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#operator DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#values DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#match_expressions DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#match_labels DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsList",
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#selector DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#selector}
  */
  readonly selector?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricSelector) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_utilization DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTargetToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTargetToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
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
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal {
  /**
  * MetricIdentifier defines the name and optionally selector for a metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#metric DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#metric}
  */
  readonly metric: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric;
  /**
  * MetricTarget defines the target value, average value, or average utilization of a specific metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#target DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#target}
  */
  readonly target: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricToTerraform(struct!.metric),
    target: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric",
    },
    target: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject {
  /**
  * apiVersion is the API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#api_version DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#kind DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObjectToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObjectToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#key DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#operator DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#values DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#match_expressions DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#match_labels DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsList",
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#selector DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#selector}
  */
  readonly selector?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricSelector) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_utilization DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTargetToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTargetToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
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
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject {
  /**
  * CrossVersionObjectReference contains enough information to let you identify the referred resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#described_object DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#described_object}
  */
  readonly describedObject: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject;
  /**
  * MetricIdentifier defines the name and optionally selector for a metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#metric DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#metric}
  */
  readonly metric: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric;
  /**
  * MetricTarget defines the target value, average value, or average utilization of a specific metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#target DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#target}
  */
  readonly target: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricToTerraform(struct!.metric),
    target: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject",
    },
    metric: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric",
    },
    target: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#key DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#operator DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#values DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#match_expressions DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#match_labels DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsList",
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#selector DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#selector}
  */
  readonly selector?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricSelector) {
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_utilization DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTargetToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTargetToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
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
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods {
  /**
  * MetricIdentifier defines the name and optionally selector for a metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#metric DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#metric}
  */
  readonly metric: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric;
  /**
  * MetricTarget defines the target value, average value, or average utilization of a specific metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#target DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#target}
  */
  readonly target: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricToTerraform(struct!.metric),
    target: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric",
    },
    target: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_utilization DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#average_value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#value DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTargetToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTargetToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
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

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
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
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource {
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
  /**
  * MetricTarget defines the target value, average value, or average utilization of a specific metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#target DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#target}
  */
  readonly target: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource | cdktf.IResolvable): any {
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
    target: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._target.internalValue = value.target;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics {
  /**
  * ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory). The values will be averaged together before being compared to the target. Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source. Only one 'target' type should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#container_resource DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#container_resource}
  */
  readonly containerResource?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource;
  /**
  * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#external DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#external}
  */
  readonly external?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal;
  /**
  * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#object DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#object}
  */
  readonly object?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject;
  /**
  * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#pods DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#pods}
  */
  readonly pods?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods;
  /**
  * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory). The values will be averaged together before being compared to the target. Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source. Only one 'target' type should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#resource DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#resource}
  */
  readonly resource?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource;
  /**
  * type is the type of metric source. It should be one of 'ContainerResource', 'External', 'Object', 'Pods' or 'Resource', each mapping to a matching field in the object. Note: 'ContainerResource' type is available on when the feature-gate HPAContainerMetrics is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#type DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resource: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceToTerraform(struct!.containerResource),
    external: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalToTerraform(struct!.external),
    object: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectToTerraform(struct!.object),
    pods: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsToTerraform(struct!.pods),
    resource: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resource: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource",
    },
    external: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal",
    },
    object: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject",
    },
    pods: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods",
    },
    resource: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource",
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResource = this._containerResource?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = undefined;
      this._external.internalValue = undefined;
      this._object.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._resource.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = value.containerResource;
      this._external.internalValue = value.external;
      this._object.internalValue = value.object;
      this._pods.internalValue = value.pods;
      this._resource.internalValue = value.resource;
      this._type = value.type;
    }
  }

  // container_resource - computed: false, optional: true, required: false
  private _containerResource = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsContainerResource) {
    this._containerResource.internalValue = value;
  }
  public resetContainerResource() {
    this._containerResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceInput() {
    return this._containerResource.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
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

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsOutputReference {
    return new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef {
  /**
  * apiVersion is the API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#api_version DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#kind DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#name DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRefToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRefToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
}
export interface DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec {
  /**
  * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#behavior DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#behavior}
  */
  readonly behavior?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior;
  /**
  * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#max_replicas DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used). The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods. Ergo, metrics used must decrease as the pod count is increased, and vice-versa. See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#metrics DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#metrics}
  */
  readonly metrics?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics[] | cdktf.IResolvable;
  /**
  * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured. Scaling is active as long as at least one metric value is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#min_replicas DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * CrossVersionObjectReference contains enough information to let you identify the referred resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#scale_target_ref DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest#scale_target_ref}
  */
  readonly scaleTargetRef: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef;
}

export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecToTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorToTerraform(struct!.behavior),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    scale_target_ref: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
  }
}


export function dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecToHclTerraform(struct?: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorToHclTerraform(struct!.behavior),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_target_ref: {
      value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRefToHclTerraform(struct!.scaleTargetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior?.internalValue;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._scaleTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetRef = this._scaleTargetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior.internalValue = undefined;
      this._maxReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._minReplicas = undefined;
      this._scaleTargetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior.internalValue = value.behavior;
      this._maxReplicas = value.maxReplicas;
      this._metrics.internalValue = value.metrics;
      this._minReplicas = value.minReplicas;
      this._scaleTargetRef.internalValue = value.scaleTargetRef;
    }
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehaviorOutputReference(this, "behavior");
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecBehavior) {
    this._behavior.internalValue = value;
  }
  public resetBehavior() {
    this._behavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior.internalValue;
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // scale_target_ref - computed: false, optional: false, required: true
  private _scaleTargetRef = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRefOutputReference(this, "scale_target_ref");
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest k8s_autoscaling_horizontal_pod_autoscaler_v2_manifest}
*/
export class DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_autoscaling_horizontal_pod_autoscaler_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest to import
  * @param importFromId The id of the existing DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAutoscalingHorizontalPodAutoscalerV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_autoscaling_horizontal_pod_autoscaler_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/autoscaling_horizontal_pod_autoscaler_v2_manifest k8s_autoscaling_horizontal_pod_autoscaler_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_autoscaling_horizontal_pod_autoscaler_v2_manifest',
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
  private _metadata = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec) {
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
      metadata: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestMetadata",
      },
      spec: {
        value: dataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingHorizontalPodAutoscalerV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
