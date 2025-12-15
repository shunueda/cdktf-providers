// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#metadata DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata;
  /**
  * ScalingPolicySpec defines the desired state of ScalingPolicy. Represents a scaling policy to use with Application Auto Scaling. For more information about configuring scaling policies for a specific service, see Getting started with Application Auto Scaling (https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html) in the Application Auto Scaling User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#spec DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#annotations DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#labels DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#name DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#namespace DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#metric_interval_lower_bound DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#metric_interval_lower_bound}
  */
  readonly metricIntervalLowerBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#metric_interval_upper_bound DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#metric_interval_upper_bound}
  */
  readonly metricIntervalUpperBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#scaling_adjustment DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#scaling_adjustment}
  */
  readonly scalingAdjustment?: number;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_interval_lower_bound: cdktf.numberToTerraform(struct!.metricIntervalLowerBound),
    metric_interval_upper_bound: cdktf.numberToTerraform(struct!.metricIntervalUpperBound),
    scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_interval_lower_bound: {
      value: cdktf.numberToHclTerraform(struct!.metricIntervalLowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_interval_upper_bound: {
      value: cdktf.numberToHclTerraform(struct!.metricIntervalUpperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.scalingAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricIntervalLowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
    }
    if (this._metricIntervalUpperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
    }
    if (this._scalingAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingAdjustment = this._scalingAdjustment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = undefined;
      this._metricIntervalUpperBound = undefined;
      this._scalingAdjustment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = value.metricIntervalLowerBound;
      this._metricIntervalUpperBound = value.metricIntervalUpperBound;
      this._scalingAdjustment = value.scalingAdjustment;
    }
  }

  // metric_interval_lower_bound - computed: false, optional: true, required: false
  private _metricIntervalLowerBound?: number; 
  public get metricIntervalLowerBound() {
    return this.getNumberAttribute('metric_interval_lower_bound');
  }
  public set metricIntervalLowerBound(value: number) {
    this._metricIntervalLowerBound = value;
  }
  public resetMetricIntervalLowerBound() {
    this._metricIntervalLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalLowerBoundInput() {
    return this._metricIntervalLowerBound;
  }

  // metric_interval_upper_bound - computed: false, optional: true, required: false
  private _metricIntervalUpperBound?: number; 
  public get metricIntervalUpperBound() {
    return this.getNumberAttribute('metric_interval_upper_bound');
  }
  public set metricIntervalUpperBound(value: number) {
    this._metricIntervalUpperBound = value;
  }
  public resetMetricIntervalUpperBound() {
    this._metricIntervalUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalUpperBoundInput() {
    return this._metricIntervalUpperBound;
  }

  // scaling_adjustment - computed: false, optional: true, required: false
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  public resetScalingAdjustment() {
    this._scalingAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsOutputReference {
    return new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#adjustment_type DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#cooldown DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#metric_aggregation_type DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#metric_aggregation_type}
  */
  readonly metricAggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#min_adjustment_magnitude DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#min_adjustment_magnitude}
  */
  readonly minAdjustmentMagnitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#step_adjustments DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#step_adjustments}
  */
  readonly stepAdjustments?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments[] | cdktf.IResolvable;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment_type: cdktf.stringToTerraform(struct!.adjustmentType),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    metric_aggregation_type: cdktf.stringToTerraform(struct!.metricAggregationType),
    min_adjustment_magnitude: cdktf.numberToTerraform(struct!.minAdjustmentMagnitude),
    step_adjustments: cdktf.listMapper(dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsToTerraform, false)(struct!.stepAdjustments),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment_type: {
      value: cdktf.stringToHclTerraform(struct!.adjustmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.metricAggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_adjustment_magnitude: {
      value: cdktf.numberToHclTerraform(struct!.minAdjustmentMagnitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_adjustments: {
      value: cdktf.listMapperHcl(dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsToHclTerraform, false)(struct!.stepAdjustments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentType = this._adjustmentType;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._metricAggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAggregationType = this._metricAggregationType;
    }
    if (this._minAdjustmentMagnitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAdjustmentMagnitude = this._minAdjustmentMagnitude;
    }
    if (this._stepAdjustments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepAdjustments = this._stepAdjustments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adjustmentType = undefined;
      this._cooldown = undefined;
      this._metricAggregationType = undefined;
      this._minAdjustmentMagnitude = undefined;
      this._stepAdjustments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adjustmentType = value.adjustmentType;
      this._cooldown = value.cooldown;
      this._metricAggregationType = value.metricAggregationType;
      this._minAdjustmentMagnitude = value.minAdjustmentMagnitude;
      this._stepAdjustments.internalValue = value.stepAdjustments;
    }
  }

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // metric_aggregation_type - computed: false, optional: true, required: false
  private _metricAggregationType?: string; 
  public get metricAggregationType() {
    return this.getStringAttribute('metric_aggregation_type');
  }
  public set metricAggregationType(value: string) {
    this._metricAggregationType = value;
  }
  public resetMetricAggregationType() {
    this._metricAggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAggregationTypeInput() {
    return this._metricAggregationType;
  }

  // min_adjustment_magnitude - computed: false, optional: true, required: false
  private _minAdjustmentMagnitude?: number; 
  public get minAdjustmentMagnitude() {
    return this.getNumberAttribute('min_adjustment_magnitude');
  }
  public set minAdjustmentMagnitude(value: number) {
    this._minAdjustmentMagnitude = value;
  }
  public resetMinAdjustmentMagnitude() {
    this._minAdjustmentMagnitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentMagnitudeInput() {
    return this._minAdjustmentMagnitude;
  }

  // step_adjustments - computed: false, optional: true, required: false
  private _stepAdjustments = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustmentsList(this, "step_adjustments", false);
  public get stepAdjustments() {
    return this._stepAdjustments;
  }
  public putStepAdjustments(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationStepAdjustments[] | cdktf.IResolvable) {
    this._stepAdjustments.internalValue = value;
  }
  public resetStepAdjustments() {
    this._stepAdjustments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentsInput() {
    return this._stepAdjustments.internalValue;
  }
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#name DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#value DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable): any {
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

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference {
    return new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#dimensions DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#dimensions}
  */
  readonly dimensions?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#metric_name DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#namespace DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#statistic DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#unit DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
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
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._statistic = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._statistic = value.statistic;
      this._unit = value.unit;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#predefined_metric_type DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#resource_label DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#resource_label}
  */
  readonly resourceLabel?: string;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktf.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_metric_type - computed: false, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // resource_label - computed: false, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration {
  /**
  * Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling. For information about the available metrics for a service, see Amazon Web Services Services That Publish CloudWatch Metrics (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the Amazon CloudWatch User Guide. To create your customized metric specification: * Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see Publish Custom Metrics (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) in the Amazon CloudWatch User Guide. * Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. For more information about CloudWatch, see Amazon CloudWatch Concepts (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#customized_metric_specification DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#customized_metric_specification}
  */
  readonly customizedMetricSpecification?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#disable_scale_in DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling. Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in Building dashboards with CloudWatch (https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html) in the Application Auto Scaling User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#predefined_metric_specification DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#predefined_metric_specification}
  */
  readonly predefinedMetricSpecification?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#scale_in_cooldown DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#scale_out_cooldown DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#target_value DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#target_value}
  */
  readonly targetValue?: number;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customized_metric_specification: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct!.customizedMetricSpecification),
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    predefined_metric_specification: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct!.predefinedMetricSpecification),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customized_metric_specification: {
      value: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToHclTerraform(struct!.customizedMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification",
    },
    disable_scale_in: {
      value: cdktf.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    predefined_metric_specification: {
      value: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToHclTerraform(struct!.predefinedMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification",
    },
    scale_in_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktf.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
    }
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._predefinedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizedMetricSpecification.internalValue = undefined;
      this._disableScaleIn = undefined;
      this._predefinedMetricSpecification.internalValue = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
      this._disableScaleIn = value.disableScaleIn;
      this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
      this._targetValue = value.targetValue;
    }
  }

  // customized_metric_specification - computed: false, optional: true, required: false
  private _customizedMetricSpecification = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification");
  public get customizedMetricSpecification() {
    return this._customizedMetricSpecification;
  }
  public putCustomizedMetricSpecification(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification) {
    this._customizedMetricSpecification.internalValue = value;
  }
  public resetCustomizedMetricSpecification() {
    this._customizedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedMetricSpecificationInput() {
    return this._customizedMetricSpecification.internalValue;
  }

  // disable_scale_in - computed: false, optional: true, required: false
  private _disableScaleIn?: boolean | cdktf.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktf.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // predefined_metric_specification - computed: false, optional: true, required: false
  private _predefinedMetricSpecification = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification");
  public get predefinedMetricSpecification() {
    return this._predefinedMetricSpecification;
  }
  public putPredefinedMetricSpecification(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification) {
    this._predefinedMetricSpecification.internalValue = value;
  }
  public resetPredefinedMetricSpecification() {
    this._predefinedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricSpecificationInput() {
    return this._predefinedMetricSpecification.internalValue;
  }

  // scale_in_cooldown - computed: false, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: false, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
  }

  // target_value - computed: false, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec {
  /**
  * The name of the scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#policy_name DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#policy_name}
  */
  readonly policyName: string;
  /**
  * The policy type. This parameter is required if you are creating a scaling policy. The following policy types are supported: TargetTrackingScaling—Not supported for Amazon EMR StepScaling—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune. For more information, see Target tracking scaling policies (https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and Step scaling policies (https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the Application Auto Scaling User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#policy_type DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#policy_type}
  */
  readonly policyType?: string;
  /**
  * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier. * ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp. * Spot Fleet - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. * EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0. * AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet. * DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table. * DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index. * Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster. * SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. * Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository (https://github.com/aws/aws-auto-scaling-custom-resource). * Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE. * Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE. * Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1. * Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable. * Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5. * Amazon ElastiCache replication group - The resource type is replication-group and the unique identifier is the replication group name. Example: replication-group/mycluster. * Neptune cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:mycluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#resource_id DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#resource_id}
  */
  readonly resourceId: string;
  /**
  * The scalable dimension. This string consists of the service namespace, resource type, and scaling property. * ecs:service:DesiredCount - The desired task count of an ECS service. * elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group. * ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet. * appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet. * dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table. * dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table. * dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index. * dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index. * rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition. * sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an SageMaker model endpoint variant. * custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service. * comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint. * comprehend:entity-recognizer-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend entity recognizer endpoint. * lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function. * cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table. * cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table. * kafka:broker-storage:VolumeSize - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster. * elasticache:replication-group:NodeGroups - The number of node groups for an Amazon ElastiCache replication group. * elasticache:replication-group:Replicas - The number of replicas per node group for an Amazon ElastiCache replication group. * neptune:cluster:ReadReplicaCount - The count of read replicas in an Amazon Neptune DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#scalable_dimension DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#service_namespace DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#service_namespace}
  */
  readonly serviceNamespace: string;
  /**
  * A step scaling policy. This parameter is required if you are creating a policy and the policy type is StepScaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#step_scaling_policy_configuration DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#step_scaling_policy_configuration}
  */
  readonly stepScalingPolicyConfiguration?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration;
  /**
  * A target tracking scaling policy. Includes support for predefined or customized metrics. This parameter is required if you are creating a policy and the policy type is TargetTrackingScaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#target_tracking_scaling_policy_configuration DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    scalable_dimension: cdktf.stringToTerraform(struct!.scalableDimension),
    service_namespace: cdktf.stringToTerraform(struct!.serviceNamespace),
    step_scaling_policy_configuration: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationToTerraform(struct!.stepScalingPolicyConfiguration),
    target_tracking_scaling_policy_configuration: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalable_dimension: {
      value: cdktf.stringToHclTerraform(struct!.scalableDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_namespace: {
      value: cdktf.stringToHclTerraform(struct!.serviceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_scaling_policy_configuration: {
      value: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationToHclTerraform(struct!.stepScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration",
    },
    target_tracking_scaling_policy_configuration: {
      value: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._scalableDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableDimension = this._scalableDimension;
    }
    if (this._serviceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNamespace = this._serviceNamespace;
    }
    if (this._stepScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepScalingPolicyConfiguration = this._stepScalingPolicyConfiguration?.internalValue;
    }
    if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyName = undefined;
      this._policyType = undefined;
      this._resourceId = undefined;
      this._scalableDimension = undefined;
      this._serviceNamespace = undefined;
      this._stepScalingPolicyConfiguration.internalValue = undefined;
      this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyName = value.policyName;
      this._policyType = value.policyType;
      this._resourceId = value.resourceId;
      this._scalableDimension = value.scalableDimension;
      this._serviceNamespace = value.serviceNamespace;
      this._stepScalingPolicyConfiguration.internalValue = value.stepScalingPolicyConfiguration;
      this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
    }
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension?: string; 
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace?: string; 
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace;
  }

  // step_scaling_policy_configuration - computed: false, optional: true, required: false
  private _stepScalingPolicyConfiguration = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfigurationOutputReference(this, "step_scaling_policy_configuration");
  public get stepScalingPolicyConfiguration() {
    return this._stepScalingPolicyConfiguration;
  }
  public putStepScalingPolicyConfiguration(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecStepScalingPolicyConfiguration) {
    this._stepScalingPolicyConfiguration.internalValue = value;
  }
  public resetStepScalingPolicyConfiguration() {
    this._stepScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepScalingPolicyConfigurationInput() {
    return this._stepScalingPolicyConfiguration.internalValue;
  }

  // target_tracking_scaling_policy_configuration - computed: false, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest k8s_applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest}
*/
export class DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest k8s_applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_applicationautoscaling_services_k8s_aws_scaling_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalingPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
