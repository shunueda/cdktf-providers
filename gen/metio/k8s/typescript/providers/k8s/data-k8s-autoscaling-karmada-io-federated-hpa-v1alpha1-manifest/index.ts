// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#metadata DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the FederatedHPA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#spec DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec;
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#annotations DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#labels DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#namespace DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies {
  /**
  * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#period_seconds DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * type is used to specify the scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value contains the amount of change which is permitted by the policy. It must be greater than zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesOutputReference {
    return new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown {
  /**
  * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#policies DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies[] | cdktf.IResolvable;
  /**
  * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#select_policy DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#stabilization_window_seconds DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesToTerraform, false)(struct!.policies),
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesList",
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown | cdktf.IResolvable | undefined) {
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
  private _policies = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownPolicies[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies {
  /**
  * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#period_seconds DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * type is used to specify the scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value contains the amount of change which is permitted by the policy. It must be greater than zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesOutputReference {
    return new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp {
  /**
  * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#policies DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies[] | cdktf.IResolvable;
  /**
  * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#select_policy DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#stabilization_window_seconds DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesToTerraform, false)(struct!.policies),
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesList",
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp | cdktf.IResolvable | undefined) {
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
  private _policies = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpPolicies[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior {
  /**
  * scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#scale_down DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#scale_down}
  */
  readonly scaleDown?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown;
  /**
  * scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of: * increase no more than 4 pods per 60 seconds * double the number of pods per 60 seconds No stabilization is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#scale_up DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#scale_up}
  */
  readonly scaleUp?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_down: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownToTerraform(struct!.scaleDown),
    scale_up: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpToTerraform(struct!.scaleUp),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_down: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownToHclTerraform(struct!.scaleDown),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown",
    },
    scale_up: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpToHclTerraform(struct!.scaleUp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior | cdktf.IResolvable | undefined) {
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
  private _scaleDown = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDownOutputReference(this, "scale_down");
  public get scaleDown() {
    return this._scaleDown;
  }
  public putScaleDown(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleDown) {
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
  private _scaleUp = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUpOutputReference(this, "scale_up");
  public get scaleUp() {
    return this._scaleUp;
  }
  public putScaleUp(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorScaleUp) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_utilization DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTargetToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTargetToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource {
  /**
  * container is the name of the container in the pods of the scaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#container DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#container}
  */
  readonly container: string;
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#target DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#target}
  */
  readonly target: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource | cdktf.IResolvable): any {
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
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource | cdktf.IResolvable | undefined) {
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
  private _target = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#key DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#operator DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#values DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#match_expressions DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#match_labels DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsList",
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#selector DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric | cdktf.IResolvable): any {
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
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric | cdktf.IResolvable | undefined) {
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
  private _selector = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricSelector) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_utilization DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTargetToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTargetToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal {
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#metric DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#target DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#target}
  */
  readonly target: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricToTerraform(struct!.metric),
    target: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric",
    },
    target: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal | cdktf.IResolvable | undefined) {
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
  private _metric = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject {
  /**
  * apiVersion is the API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#api_version DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#kind DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObjectToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObjectToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#key DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#operator DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#values DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#match_expressions DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#match_labels DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsList",
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#selector DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric | cdktf.IResolvable): any {
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
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric | cdktf.IResolvable | undefined) {
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
  private _selector = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricSelector) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_utilization DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTargetToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTargetToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject {
  /**
  * describedObject specifies the descriptions of a object,such as kind,name apiVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#described_object DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#described_object}
  */
  readonly describedObject: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject;
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#metric DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#target DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#target}
  */
  readonly target: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricToTerraform(struct!.metric),
    target: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject",
    },
    metric: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric",
    },
    target: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject | cdktf.IResolvable | undefined) {
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
  private _describedObject = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#key DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#operator DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#values DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#match_expressions DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#match_labels DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsList",
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#selector DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric | cdktf.IResolvable): any {
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
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric | cdktf.IResolvable | undefined) {
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
  private _selector = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricSelector) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_utilization DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTargetToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTargetToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods {
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#metric DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#target DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#target}
  */
  readonly target: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricToTerraform(struct!.metric),
    target: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric",
    },
    target: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods | cdktf.IResolvable | undefined) {
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
  private _metric = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_utilization DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#average_value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#value DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTargetToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTargetToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource {
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#target DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#target}
  */
  readonly target: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource | cdktf.IResolvable): any {
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
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource | cdktf.IResolvable | undefined) {
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
  private _target = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics {
  /**
  * containerResource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing a single container in each pod of the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source. This is an alpha feature and can be enabled by the HPAContainerMetrics feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#container_resource DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#container_resource}
  */
  readonly containerResource?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource;
  /**
  * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#external DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#external}
  */
  readonly external?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal;
  /**
  * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#object DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#object}
  */
  readonly object?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject;
  /**
  * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#pods DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods;
  /**
  * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#resource DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#resource}
  */
  readonly resource?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource;
  /**
  * type is the type of metric source. It should be one of 'ContainerResource', 'External', 'Object', 'Pods' or 'Resource', each mapping to a matching field in the object. Note: 'ContainerResource' type is available on when the feature-gate HPAContainerMetrics is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#type DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resource: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceToTerraform(struct!.containerResource),
    external: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalToTerraform(struct!.external),
    object: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectToTerraform(struct!.object),
    pods: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsToTerraform(struct!.pods),
    resource: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resource: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource",
    },
    external: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal",
    },
    object: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject",
    },
    pods: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods",
    },
    resource: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource",
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
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
  private _containerResource = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsContainerResource) {
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
  private _external = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsExternal) {
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
  private _object = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsObject) {
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
  private _pods = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsPods) {
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
  private _resource = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsResource) {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsOutputReference {
    return new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef {
  /**
  * apiVersion is the API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#api_version DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#kind DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#name DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec {
  /**
  * Behavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). If not set, the default HPAScalingRules for scale up and scale down are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#behavior DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#behavior}
  */
  readonly behavior?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior;
  /**
  * MaxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#max_replicas DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used). The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods. Ergo, metrics used must decrease as the pod count is increased, and vice-versa. See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#metrics DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable;
  /**
  * MinReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#min_replicas DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * ScaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#scale_target_ref DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest#scale_target_ref}
  */
  readonly scaleTargetRef: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef;
}

export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorToTerraform(struct!.behavior),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    scale_target_ref: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
  }
}


export function dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorToHclTerraform(struct!.behavior),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_target_ref: {
      value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRefToHclTerraform(struct!.scaleTargetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _behavior = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehaviorOutputReference(this, "behavior");
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecBehavior) {
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
  private _metrics = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable) {
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
  private _scaleTargetRef = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRefOutputReference(this, "scale_target_ref");
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest k8s_autoscaling_karmada_io_federated_hpa_v1alpha1_manifest}
*/
export class DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_autoscaling_karmada_io_federated_hpa_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_autoscaling_karmada_io_federated_hpa_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/autoscaling_karmada_io_federated_hpa_v1alpha1_manifest k8s_autoscaling_karmada_io_federated_hpa_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_autoscaling_karmada_io_federated_hpa_v1alpha1_manifest',
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
  private _metadata = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingKarmadaIoFederatedHpaV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
