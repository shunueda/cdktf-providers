// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata;
  /**
  * HyperParameterTuningJobSpec defines the desired state of HyperParameterTuningJob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#mode DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotuneToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotuneToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotuneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#metric_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjectiveToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjectiveToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjectiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
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

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#value_hint DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#value_hint}
  */
  readonly valueHint?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_hint: cdktf.stringToTerraform(struct!.valueHint),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktf.IResolvable): any {
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
    value_hint: {
      value: cdktf.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: true, required: false
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  public resetValueHint() {
    this._valueHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#values DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#min_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#min_value}
  */
  readonly minValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#scaling_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#scaling_type}
  */
  readonly scalingType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    name: cdktf.stringToTerraform(struct!.name),
    scaling_type: cdktf.stringToTerraform(struct!.scalingType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: false, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#min_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#min_value}
  */
  readonly minValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#scaling_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#scaling_type}
  */
  readonly scalingType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    name: cdktf.stringToTerraform(struct!.name),
    scaling_type: cdktf.stringToTerraform(struct!.scalingType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: false, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#auto_parameters DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#auto_parameters}
  */
  readonly autoParameters?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#categorical_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#continuous_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#integer_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_parameters: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersToTerraform, false)(struct!.autoParameters),
    categorical_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToTerraform, false)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToTerraform, false)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToTerraform, false)(struct!.integerParameterRanges),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_parameters: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersToHclTerraform, false)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersList",
    },
    categorical_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToHclTerraform, false)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesList",
    },
    continuous_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToHclTerraform, false)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesList",
    },
    integer_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToHclTerraform, false)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParametersList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesAutoParameters[] | cdktf.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges[] | cdktf.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges[] | cdktf.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_number_of_training_jobs DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_number_of_training_jobs}
  */
  readonly maxNumberOfTrainingJobs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_parallel_training_jobs DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_parallel_training_jobs}
  */
  readonly maxParallelTrainingJobs?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimitsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_number_of_training_jobs: cdktf.numberToTerraform(struct!.maxNumberOfTrainingJobs),
    max_parallel_training_jobs: cdktf.numberToTerraform(struct!.maxParallelTrainingJobs),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimitsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_number_of_training_jobs: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfTrainingJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_training_jobs: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelTrainingJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNumberOfTrainingJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfTrainingJobs = this._maxNumberOfTrainingJobs;
    }
    if (this._maxParallelTrainingJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelTrainingJobs = this._maxParallelTrainingJobs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobs = undefined;
      this._maxParallelTrainingJobs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobs = value.maxNumberOfTrainingJobs;
      this._maxParallelTrainingJobs = value.maxParallelTrainingJobs;
    }
  }

  // max_number_of_training_jobs - computed: false, optional: true, required: false
  private _maxNumberOfTrainingJobs?: number; 
  public get maxNumberOfTrainingJobs() {
    return this.getNumberAttribute('max_number_of_training_jobs');
  }
  public set maxNumberOfTrainingJobs(value: number) {
    this._maxNumberOfTrainingJobs = value;
  }
  public resetMaxNumberOfTrainingJobs() {
    this._maxNumberOfTrainingJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfTrainingJobsInput() {
    return this._maxNumberOfTrainingJobs;
  }

  // max_parallel_training_jobs - computed: false, optional: true, required: false
  private _maxParallelTrainingJobs?: number; 
  public get maxParallelTrainingJobs() {
    return this.getNumberAttribute('max_parallel_training_jobs');
  }
  public set maxParallelTrainingJobs(value: number) {
    this._maxParallelTrainingJobs = value;
  }
  public resetMaxParallelTrainingJobs() {
    this._maxParallelTrainingJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelTrainingJobsInput() {
    return this._maxParallelTrainingJobs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#target_objective_metric_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#target_objective_metric_value}
  */
  readonly targetObjectiveMetricValue?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteriaToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_objective_metric_value: cdktf.numberToTerraform(struct!.targetObjectiveMetricValue),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteriaToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_objective_metric_value: {
      value: cdktf.numberToHclTerraform(struct!.targetObjectiveMetricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetObjectiveMetricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetObjectiveMetricValue = this._targetObjectiveMetricValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetObjectiveMetricValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetObjectiveMetricValue = value.targetObjectiveMetricValue;
    }
  }

  // target_objective_metric_value - computed: false, optional: true, required: false
  private _targetObjectiveMetricValue?: number; 
  public get targetObjectiveMetricValue() {
    return this.getNumberAttribute('target_objective_metric_value');
  }
  public set targetObjectiveMetricValue(value: number) {
    this._targetObjectiveMetricValue = value;
  }
  public resetTargetObjectiveMetricValue() {
    this._targetObjectiveMetricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectiveMetricValueInput() {
    return this._targetObjectiveMetricValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig {
  /**
  * Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the Type parameter. If you want to define a custom objective metric, see Define metrics and environment variables (https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#hyper_parameter_tuning_job_objective DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#hyper_parameter_tuning_job_objective}
  */
  readonly hyperParameterTuningJobObjective?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective;
  /**
  * Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job. The maximum number of items specified for Array Members refers to the maximum number of hyperparameters for each range and also the maximum for the hyperparameter tuning job itself. That is, the sum of the number of hyperparameters for all the ranges can't exceed the maximum number specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#parameter_ranges}
  */
  readonly parameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges;
  /**
  * Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#resource_limits DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#resource_limits}
  */
  readonly resourceLimits?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits;
  /**
  * The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#strategy DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#training_job_early_stopping_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#training_job_early_stopping_type}
  */
  readonly trainingJobEarlyStoppingType?: string;
  /**
  * The job completion criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#tuning_job_completion_criteria DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#tuning_job_completion_criteria}
  */
  readonly tuningJobCompletionCriteria?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyper_parameter_tuning_job_objective: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjectiveToTerraform(struct!.hyperParameterTuningJobObjective),
    parameter_ranges: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesToTerraform(struct!.parameterRanges),
    resource_limits: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimitsToTerraform(struct!.resourceLimits),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    training_job_early_stopping_type: cdktf.stringToTerraform(struct!.trainingJobEarlyStoppingType),
    tuning_job_completion_criteria: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteriaToTerraform(struct!.tuningJobCompletionCriteria),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyper_parameter_tuning_job_objective: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjectiveToHclTerraform(struct!.hyperParameterTuningJobObjective),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective",
    },
    parameter_ranges: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesToHclTerraform(struct!.parameterRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges",
    },
    resource_limits: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimitsToHclTerraform(struct!.resourceLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_job_early_stopping_type: {
      value: cdktf.stringToHclTerraform(struct!.trainingJobEarlyStoppingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tuning_job_completion_criteria: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteriaToHclTerraform(struct!.tuningJobCompletionCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperParameterTuningJobObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningJobObjective = this._hyperParameterTuningJobObjective?.internalValue;
    }
    if (this._parameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterRanges = this._parameterRanges?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._trainingJobEarlyStoppingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingJobEarlyStoppingType = this._trainingJobEarlyStoppingType;
    }
    if (this._tuningJobCompletionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningJobCompletionCriteria = this._tuningJobCompletionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hyperParameterTuningJobObjective.internalValue = undefined;
      this._parameterRanges.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
      this._strategy = undefined;
      this._trainingJobEarlyStoppingType = undefined;
      this._tuningJobCompletionCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hyperParameterTuningJobObjective.internalValue = value.hyperParameterTuningJobObjective;
      this._parameterRanges.internalValue = value.parameterRanges;
      this._resourceLimits.internalValue = value.resourceLimits;
      this._strategy = value.strategy;
      this._trainingJobEarlyStoppingType = value.trainingJobEarlyStoppingType;
      this._tuningJobCompletionCriteria.internalValue = value.tuningJobCompletionCriteria;
    }
  }

  // hyper_parameter_tuning_job_objective - computed: false, optional: true, required: false
  private _hyperParameterTuningJobObjective = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjectiveOutputReference(this, "hyper_parameter_tuning_job_objective");
  public get hyperParameterTuningJobObjective() {
    return this._hyperParameterTuningJobObjective;
  }
  public putHyperParameterTuningJobObjective(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigHyperParameterTuningJobObjective) {
    this._hyperParameterTuningJobObjective.internalValue = value;
  }
  public resetHyperParameterTuningJobObjective() {
    this._hyperParameterTuningJobObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningJobObjectiveInput() {
    return this._hyperParameterTuningJobObjective.internalValue;
  }

  // parameter_ranges - computed: false, optional: true, required: false
  private _parameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRangesOutputReference(this, "parameter_ranges");
  public get parameterRanges() {
    return this._parameterRanges;
  }
  public putParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigParameterRanges) {
    this._parameterRanges.internalValue = value;
  }
  public resetParameterRanges() {
    this._parameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterRangesInput() {
    return this._parameterRanges.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigResourceLimits) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // training_job_early_stopping_type - computed: false, optional: true, required: false
  private _trainingJobEarlyStoppingType?: string; 
  public get trainingJobEarlyStoppingType() {
    return this.getStringAttribute('training_job_early_stopping_type');
  }
  public set trainingJobEarlyStoppingType(value: string) {
    this._trainingJobEarlyStoppingType = value;
  }
  public resetTrainingJobEarlyStoppingType() {
    this._trainingJobEarlyStoppingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobEarlyStoppingTypeInput() {
    return this._trainingJobEarlyStoppingType;
  }

  // tuning_job_completion_criteria - computed: false, optional: true, required: false
  private _tuningJobCompletionCriteria = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteriaOutputReference(this, "tuning_job_completion_criteria");
  public get tuningJobCompletionCriteria() {
    return this._tuningJobCompletionCriteria;
  }
  public putTuningJobCompletionCriteria(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigTuningJobCompletionCriteria) {
    this._tuningJobCompletionCriteria.internalValue = value;
  }
  public resetTuningJobCompletionCriteria() {
    this._tuningJobCompletionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningJobCompletionCriteriaInput() {
    return this._tuningJobCompletionCriteria.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#regex DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#algorithm_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#metric_definitions DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#metric_definitions}
  */
  readonly metricDefinitions?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#training_image DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#training_image}
  */
  readonly trainingImage?: string;
  /**
  * The training input mode that the algorithm supports. For more information about input modes, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). Pipe mode If an algorithm supports Pipe mode, Amazon SageMaker streams data directly from Amazon S3 to the container. File mode If an algorithm supports File mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container. You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any. For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training. FastFile mode If an algorithm supports FastFile mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk. FastFile mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#training_input_mode DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#training_input_mode}
  */
  readonly trainingInputMode?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_name: cdktf.stringToTerraform(struct!.algorithmName),
    metric_definitions: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToTerraform, false)(struct!.metricDefinitions),
    training_image: cdktf.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktf.stringToTerraform(struct!.trainingInputMode),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_name: {
      value: cdktf.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToHclTerraform, false)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsList",
    },
    training_image: {
      value: cdktf.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_input_mode: {
      value: cdktf.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._metricDefinitions.internalValue = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._metricDefinitions.internalValue = value.metricDefinitions;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
    }
  }

  // algorithm_name - computed: false, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }

  // training_image - computed: false, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: true, required: false
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  public resetTrainingInputMode() {
    this._trainingInputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#value_hint DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#value_hint}
  */
  readonly valueHint?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_hint: cdktf.stringToTerraform(struct!.valueHint),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktf.IResolvable): any {
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
    value_hint: {
      value: cdktf.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: true, required: false
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  public resetValueHint() {
    this._valueHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#values DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#min_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#min_value}
  */
  readonly minValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#scaling_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#scaling_type}
  */
  readonly scalingType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    name: cdktf.stringToTerraform(struct!.name),
    scaling_type: cdktf.stringToTerraform(struct!.scalingType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: false, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#min_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#min_value}
  */
  readonly minValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#scaling_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#scaling_type}
  */
  readonly scalingType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    name: cdktf.stringToTerraform(struct!.name),
    scaling_type: cdktf.stringToTerraform(struct!.scalingType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: false, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#auto_parameters DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#auto_parameters}
  */
  readonly autoParameters?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#categorical_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#continuous_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#integer_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_parameters: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersToTerraform, false)(struct!.autoParameters),
    categorical_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToTerraform, false)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToTerraform, false)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToTerraform, false)(struct!.integerParameterRanges),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_parameters: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersToHclTerraform, false)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersList",
    },
    categorical_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToHclTerraform, false)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesList",
    },
    continuous_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToHclTerraform, false)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesList",
    },
    integer_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToHclTerraform, false)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParametersList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesAutoParameters[] | cdktf.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges[] | cdktf.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges[] | cdktf.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#directory_path DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#directory_path}
  */
  readonly directoryPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_access_mode DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_access_mode}
  */
  readonly fileSystemAccessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_id DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_type}
  */
  readonly fileSystemType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory_path: cdktf.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktf.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktf.stringToTerraform(struct!.fileSystemType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory_path: {
      value: cdktf.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: true, required: false
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  public resetDirectoryPath() {
    this._directoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: true, required: false
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  public resetFileSystemAccessMode() {
    this._fileSystemAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#attribute_names DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_group_names DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_data_distribution_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return this.getListAttribute('instance_group_names');
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: true, required: false
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  public resetS3DataType() {
    this._s3DataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource {
  /**
  * Specifies a file system data source for a channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_data_source DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_data_source}
  */
  readonly fileSystemDataSource?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource;
  /**
  * Describes the S3 data source. Your input bucket must be in the same Amazon Web Services region as your training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_data_source DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_data_source}
  */
  readonly s3DataSource?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_data_source: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct!.fileSystemDataSource),
    s3_data_source: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_data_source: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct!.fileSystemDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource",
    },
    s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference(this, "file_system_data_source");
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceS3DataSource) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#seed DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#seed}
  */
  readonly seed?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed: cdktf.numberToTerraform(struct!.seed),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seed: {
      value: cdktf.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#channel_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Describes the location of the channel data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#data_source DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource;
  /**
  * The training input mode that the algorithm supports. For more information about input modes, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). Pipe mode If an algorithm supports Pipe mode, Amazon SageMaker streams data directly from Amazon S3 to the container. File mode If an algorithm supports File mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container. You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any. For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training. FastFile mode If an algorithm supports FastFile mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk. FastFile mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#input_mode DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#record_wrapper_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * A configuration for a shuffle option for input data in a channel. If you use S3Prefix for S3DataType, the results of the S3 key prefix matches are shuffled. If you use ManifestFile, the order of the S3 object references in the ManifestFile is shuffled. If you use AugmentedManifestFile, the order of the JSON lines in the AugmentedManifestFile is shuffled. The shuffling order is determined using the Seed value. For Pipe input mode, when ShuffleConfig is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when ShuffleConfig is combined with S3DataDistributionType of ShardedByS3Key, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#shuffle_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#shuffle_config}
  */
  readonly shuffleConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    data_source: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceToTerraform(struct!.dataSource),
    input_mode: cdktf.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktf.stringToTerraform(struct!.recordWrapperType),
    shuffle_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfigToTerraform(struct!.shuffleConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_name: {
      value: cdktf.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource",
    },
    input_mode: {
      value: cdktf.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktf.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shuffle_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfigToHclTerraform(struct!.shuffleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._dataSource.internalValue = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._dataSource.internalValue = value.dataSource;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // input_mode - computed: false, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: false, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference(this, "shuffle_config");
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigShuffleConfig) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_group_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_group_name}
  */
  readonly instanceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: true, required: false
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  public resetInstanceGroupName() {
    this._instanceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_groups DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_groups}
  */
  readonly instanceGroups?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Optional. Customer requested period in seconds for which the Training cluster is kept alive after the job is finished.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#keep_alive_period_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_groups: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsToTerraform, false)(struct!.instanceGroups),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktf.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsToHclTerraform, false)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsList",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktf.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: false, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#maximum_retry_attempts DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategyToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategyToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition {
  /**
  * Maximum job scheduler pending time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_pending_time_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_runtime_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_wait_time_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingConditionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pending_time_in_seconds: cdktf.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktf.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingConditionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: false, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: false, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#metric_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjectiveToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjectiveToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjectiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
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

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIDs = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIDs = value.securityGroupIDs;
      this._subnets = value.subnets;
    }
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition {
  /**
  * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#algorithm_specification DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#algorithm_specification}
  */
  readonly algorithmSpecification?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification;
  /**
  * Contains information about the output location for managed spot training checkpoint data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#checkpoint_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#checkpoint_config}
  */
  readonly checkpointConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#definition_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#definition_name}
  */
  readonly definitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#enable_inter_container_traffic_encryption DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#enable_managed_spot_training DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job. The maximum number of items specified for Array Members refers to the maximum number of hyperparameters for each range and also the maximum for the hyperparameter tuning job itself. That is, the sum of the number of hyperparameters for all the ranges can't exceed the maximum number specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#hyper_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#hyper_parameter_ranges}
  */
  readonly hyperParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#input_data_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#input_data_config}
  */
  readonly inputDataConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig[] | cdktf.IResolvable;
  /**
  * Provides information about how to store model training results (model artifacts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#output_data_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#output_data_config}
  */
  readonly outputDataConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig;
  /**
  * Describes the resources, including machine learning (ML) compute instances and ML storage volumes, to use for model training.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#resource_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#resource_config}
  */
  readonly resourceConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig;
  /**
  * The retry strategy to use when a training job fails due to an InternalServerError. RetryStrategy is specified as part of the CreateTrainingJob and CreateHyperParameterTuningJob requests. You can add the StoppingCondition parameter to the request to limit the training time for the complete job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#retry_strategy DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#retry_strategy}
  */
  readonly retryStrategy?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#role_arn DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#static_hyper_parameters DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#static_hyper_parameters}
  */
  readonly staticHyperParameters?: { [key: string]: string };
  /**
  * Specifies a limit to how long a model training job or model compilation job can run. It also specifies how long a managed spot training job has to complete. When the job reaches the time limit, SageMaker ends the training or compilation job. Use this API to cap model training costs. To stop a training job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with CreateModel. The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#stopping_condition DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#stopping_condition}
  */
  readonly stoppingCondition?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition;
  /**
  * Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the Type parameter. If you want to define a custom objective metric, see Define metrics and environment variables (https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#tuning_objective DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#tuning_objective}
  */
  readonly tuningObjective?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective;
  /**
  * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC (https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_specification: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationToTerraform(struct!.algorithmSpecification),
    checkpoint_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfigToTerraform(struct!.checkpointConfig),
    definition_name: cdktf.stringToTerraform(struct!.definitionName),
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_managed_spot_training: cdktf.booleanToTerraform(struct!.enableManagedSpotTraining),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    hyper_parameter_ranges: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesToTerraform(struct!.hyperParameterRanges),
    input_data_config: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigToTerraform, false)(struct!.inputDataConfig),
    output_data_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfigToTerraform(struct!.outputDataConfig),
    resource_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigToTerraform(struct!.resourceConfig),
    retry_strategy: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategyToTerraform(struct!.retryStrategy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    static_hyper_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticHyperParameters),
    stopping_condition: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingConditionToTerraform(struct!.stoppingCondition),
    tuning_objective: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjectiveToTerraform(struct!.tuningObjective),
    vpc_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_specification: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationToHclTerraform(struct!.algorithmSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification",
    },
    checkpoint_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfigToHclTerraform(struct!.checkpointConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig",
    },
    definition_name: {
      value: cdktf.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_inter_container_traffic_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_managed_spot_training: {
      value: cdktf.booleanToHclTerraform(struct!.enableManagedSpotTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hyper_parameter_ranges: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesToHclTerraform(struct!.hyperParameterRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges",
    },
    input_data_config: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigToHclTerraform, false)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigList",
    },
    output_data_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfigToHclTerraform(struct!.outputDataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig",
    },
    resource_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigToHclTerraform(struct!.resourceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig",
    },
    retry_strategy: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategyToHclTerraform(struct!.retryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_hyper_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticHyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    stopping_condition: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingConditionToHclTerraform(struct!.stoppingCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition",
    },
    tuning_objective: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjectiveToHclTerraform(struct!.tuningObjective),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective",
    },
    vpc_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmSpecification = this._algorithmSpecification?.internalValue;
    }
    if (this._checkpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfig = this._checkpointConfig?.internalValue;
    }
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableManagedSpotTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableManagedSpotTraining = this._enableManagedSpotTraining;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._hyperParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterRanges = this._hyperParameterRanges?.internalValue;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._staticHyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHyperParameters = this._staticHyperParameters;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tuningObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningObjective = this._tuningObjective?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmSpecification.internalValue = undefined;
      this._checkpointConfig.internalValue = undefined;
      this._definitionName = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableManagedSpotTraining = undefined;
      this._enableNetworkIsolation = undefined;
      this._hyperParameterRanges.internalValue = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._retryStrategy.internalValue = undefined;
      this._roleArn = undefined;
      this._staticHyperParameters = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tuningObjective.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmSpecification.internalValue = value.algorithmSpecification;
      this._checkpointConfig.internalValue = value.checkpointConfig;
      this._definitionName = value.definitionName;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableManagedSpotTraining = value.enableManagedSpotTraining;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._hyperParameterRanges.internalValue = value.hyperParameterRanges;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._retryStrategy.internalValue = value.retryStrategy;
      this._roleArn = value.roleArn;
      this._staticHyperParameters = value.staticHyperParameters;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tuningObjective.internalValue = value.tuningObjective;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecificationOutputReference(this, "algorithm_specification");
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionAlgorithmSpecification) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfigOutputReference(this, "checkpoint_config");
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionCheckpointConfig) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // definition_name - computed: false, optional: true, required: false
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  public resetDefinitionName() {
    this._definitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // enable_inter_container_traffic_encryption - computed: false, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktf.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: false, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktf.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktf.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktf.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktf.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // hyper_parameter_ranges - computed: false, optional: true, required: false
  private _hyperParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRangesOutputReference(this, "hyper_parameter_ranges");
  public get hyperParameterRanges() {
    return this._hyperParameterRanges;
  }
  public putHyperParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionHyperParameterRanges) {
    this._hyperParameterRanges.internalValue = value;
  }
  public resetHyperParameterRanges() {
    this._hyperParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterRangesInput() {
    return this._hyperParameterRanges.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionInputDataConfig[] | cdktf.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfigOutputReference(this, "output_data_config");
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputDataConfig) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfigOutputReference(this, "resource_config");
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionResourceConfig) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // static_hyper_parameters - computed: false, optional: true, required: false
  private _staticHyperParameters?: { [key: string]: string }; 
  public get staticHyperParameters() {
    return this.getStringMapAttribute('static_hyper_parameters');
  }
  public set staticHyperParameters(value: { [key: string]: string }) {
    this._staticHyperParameters = value;
  }
  public resetStaticHyperParameters() {
    this._staticHyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHyperParametersInput() {
    return this._staticHyperParameters;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionStoppingCondition) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tuning_objective - computed: false, optional: true, required: false
  private _tuningObjective = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjectiveOutputReference(this, "tuning_objective");
  public get tuningObjective() {
    return this._tuningObjective;
  }
  public putTuningObjective(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionTuningObjective) {
    this._tuningObjective.internalValue = value;
  }
  public resetTuningObjective() {
    this._tuningObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningObjectiveInput() {
    return this._tuningObjective.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#regex DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#algorithm_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#metric_definitions DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#metric_definitions}
  */
  readonly metricDefinitions?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#training_image DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#training_image}
  */
  readonly trainingImage?: string;
  /**
  * The training input mode that the algorithm supports. For more information about input modes, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). Pipe mode If an algorithm supports Pipe mode, Amazon SageMaker streams data directly from Amazon S3 to the container. File mode If an algorithm supports File mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container. You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any. For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training. FastFile mode If an algorithm supports FastFile mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk. FastFile mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#training_input_mode DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#training_input_mode}
  */
  readonly trainingInputMode?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_name: cdktf.stringToTerraform(struct!.algorithmName),
    metric_definitions: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToTerraform, false)(struct!.metricDefinitions),
    training_image: cdktf.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktf.stringToTerraform(struct!.trainingInputMode),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_name: {
      value: cdktf.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToHclTerraform, false)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsList",
    },
    training_image: {
      value: cdktf.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_input_mode: {
      value: cdktf.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._metricDefinitions.internalValue = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._metricDefinitions.internalValue = value.metricDefinitions;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
    }
  }

  // algorithm_name - computed: false, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }

  // training_image - computed: false, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: true, required: false
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  public resetTrainingInputMode() {
    this._trainingInputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#value_hint DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#value_hint}
  */
  readonly valueHint?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_hint: cdktf.stringToTerraform(struct!.valueHint),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktf.IResolvable): any {
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
    value_hint: {
      value: cdktf.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: true, required: false
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  public resetValueHint() {
    this._valueHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#values DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#min_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#min_value}
  */
  readonly minValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#scaling_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#scaling_type}
  */
  readonly scalingType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    name: cdktf.stringToTerraform(struct!.name),
    scaling_type: cdktf.stringToTerraform(struct!.scalingType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: false, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#min_value DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#min_value}
  */
  readonly minValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#scaling_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#scaling_type}
  */
  readonly scalingType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    name: cdktf.stringToTerraform(struct!.name),
    scaling_type: cdktf.stringToTerraform(struct!.scalingType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: false, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#auto_parameters DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#auto_parameters}
  */
  readonly autoParameters?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#categorical_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#continuous_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#integer_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_parameters: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersToTerraform, false)(struct!.autoParameters),
    categorical_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToTerraform, false)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToTerraform, false)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToTerraform, false)(struct!.integerParameterRanges),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_parameters: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersToHclTerraform, false)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersList",
    },
    categorical_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToHclTerraform, false)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesList",
    },
    continuous_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToHclTerraform, false)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesList",
    },
    integer_parameter_ranges: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToHclTerraform, false)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParametersList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesAutoParameters[] | cdktf.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges[] | cdktf.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges[] | cdktf.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges[] | cdktf.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#directory_path DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#directory_path}
  */
  readonly directoryPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_access_mode DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_access_mode}
  */
  readonly fileSystemAccessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_id DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_type}
  */
  readonly fileSystemType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory_path: cdktf.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktf.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktf.stringToTerraform(struct!.fileSystemType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory_path: {
      value: cdktf.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: true, required: false
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  public resetDirectoryPath() {
    this._directoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: true, required: false
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  public resetFileSystemAccessMode() {
    this._fileSystemAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#attribute_names DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_group_names DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_data_distribution_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return this.getListAttribute('instance_group_names');
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: true, required: false
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  public resetS3DataType() {
    this._s3DataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource {
  /**
  * Specifies a file system data source for a channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#file_system_data_source DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#file_system_data_source}
  */
  readonly fileSystemDataSource?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource;
  /**
  * Describes the S3 data source. Your input bucket must be in the same Amazon Web Services region as your training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_data_source DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_data_source}
  */
  readonly s3DataSource?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_data_source: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct!.fileSystemDataSource),
    s3_data_source: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_data_source: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct!.fileSystemDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource",
    },
    s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceOutputReference(this, "file_system_data_source");
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#seed DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#seed}
  */
  readonly seed?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed: cdktf.numberToTerraform(struct!.seed),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seed: {
      value: cdktf.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#channel_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Describes the location of the channel data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#data_source DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource;
  /**
  * The training input mode that the algorithm supports. For more information about input modes, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). Pipe mode If an algorithm supports Pipe mode, Amazon SageMaker streams data directly from Amazon S3 to the container. File mode If an algorithm supports File mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container. You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any. For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training. FastFile mode If an algorithm supports FastFile mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk. FastFile mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#input_mode DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#record_wrapper_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * A configuration for a shuffle option for input data in a channel. If you use S3Prefix for S3DataType, the results of the S3 key prefix matches are shuffled. If you use ManifestFile, the order of the S3 object references in the ManifestFile is shuffled. If you use AugmentedManifestFile, the order of the JSON lines in the AugmentedManifestFile is shuffled. The shuffling order is determined using the Seed value. For Pipe input mode, when ShuffleConfig is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when ShuffleConfig is combined with S3DataDistributionType of ShardedByS3Key, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#shuffle_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#shuffle_config}
  */
  readonly shuffleConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    data_source: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceToTerraform(struct!.dataSource),
    input_mode: cdktf.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktf.stringToTerraform(struct!.recordWrapperType),
    shuffle_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfigToTerraform(struct!.shuffleConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_name: {
      value: cdktf.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource",
    },
    input_mode: {
      value: cdktf.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktf.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shuffle_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfigToHclTerraform(struct!.shuffleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._dataSource.internalValue = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._dataSource.internalValue = value.dataSource;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // input_mode - computed: false, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: false, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfigOutputReference(this, "shuffle_config");
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigShuffleConfig) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_group_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_group_name}
  */
  readonly instanceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: true, required: false
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  public resetInstanceGroupName() {
    this._instanceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_groups DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_groups}
  */
  readonly instanceGroups?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Optional. Customer requested period in seconds for which the Training cluster is kept alive after the job is finished.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#keep_alive_period_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_groups: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsToTerraform, false)(struct!.instanceGroups),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktf.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsToHclTerraform, false)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsList",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigInstanceGroups[] | cdktf.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: false, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#maximum_retry_attempts DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategyToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategyToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition {
  /**
  * Maximum job scheduler pending time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_pending_time_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_runtime_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#max_wait_time_in_seconds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingConditionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pending_time_in_seconds: cdktf.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktf.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingConditionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: false, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: false, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#metric_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjectiveToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjectiveToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjectiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
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

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIDs = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIDs = value.securityGroupIDs;
      this._subnets = value.subnets;
    }
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions {
  /**
  * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#algorithm_specification DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#algorithm_specification}
  */
  readonly algorithmSpecification?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification;
  /**
  * Contains information about the output location for managed spot training checkpoint data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#checkpoint_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#checkpoint_config}
  */
  readonly checkpointConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#definition_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#definition_name}
  */
  readonly definitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#enable_inter_container_traffic_encryption DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#enable_managed_spot_training DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job. The maximum number of items specified for Array Members refers to the maximum number of hyperparameters for each range and also the maximum for the hyperparameter tuning job itself. That is, the sum of the number of hyperparameters for all the ranges can't exceed the maximum number specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#hyper_parameter_ranges DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#hyper_parameter_ranges}
  */
  readonly hyperParameterRanges?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#input_data_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#input_data_config}
  */
  readonly inputDataConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig[] | cdktf.IResolvable;
  /**
  * Provides information about how to store model training results (model artifacts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#output_data_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#output_data_config}
  */
  readonly outputDataConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig;
  /**
  * Describes the resources, including machine learning (ML) compute instances and ML storage volumes, to use for model training.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#resource_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#resource_config}
  */
  readonly resourceConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig;
  /**
  * The retry strategy to use when a training job fails due to an InternalServerError. RetryStrategy is specified as part of the CreateTrainingJob and CreateHyperParameterTuningJob requests. You can add the StoppingCondition parameter to the request to limit the training time for the complete job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#retry_strategy DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#retry_strategy}
  */
  readonly retryStrategy?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#role_arn DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#static_hyper_parameters DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#static_hyper_parameters}
  */
  readonly staticHyperParameters?: { [key: string]: string };
  /**
  * Specifies a limit to how long a model training job or model compilation job can run. It also specifies how long a managed spot training job has to complete. When the job reaches the time limit, SageMaker ends the training or compilation job. Use this API to cap model training costs. To stop a training job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with CreateModel. The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#stopping_condition DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#stopping_condition}
  */
  readonly stoppingCondition?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition;
  /**
  * Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the Type parameter. If you want to define a custom objective metric, see Define metrics and environment variables (https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#tuning_objective DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#tuning_objective}
  */
  readonly tuningObjective?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective;
  /**
  * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC (https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_specification: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationToTerraform(struct!.algorithmSpecification),
    checkpoint_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfigToTerraform(struct!.checkpointConfig),
    definition_name: cdktf.stringToTerraform(struct!.definitionName),
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_managed_spot_training: cdktf.booleanToTerraform(struct!.enableManagedSpotTraining),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    hyper_parameter_ranges: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesToTerraform(struct!.hyperParameterRanges),
    input_data_config: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigToTerraform, false)(struct!.inputDataConfig),
    output_data_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfigToTerraform(struct!.outputDataConfig),
    resource_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigToTerraform(struct!.resourceConfig),
    retry_strategy: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategyToTerraform(struct!.retryStrategy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    static_hyper_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticHyperParameters),
    stopping_condition: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingConditionToTerraform(struct!.stoppingCondition),
    tuning_objective: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjectiveToTerraform(struct!.tuningObjective),
    vpc_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_specification: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationToHclTerraform(struct!.algorithmSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification",
    },
    checkpoint_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfigToHclTerraform(struct!.checkpointConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig",
    },
    definition_name: {
      value: cdktf.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_inter_container_traffic_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_managed_spot_training: {
      value: cdktf.booleanToHclTerraform(struct!.enableManagedSpotTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hyper_parameter_ranges: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesToHclTerraform(struct!.hyperParameterRanges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges",
    },
    input_data_config: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigToHclTerraform, false)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigList",
    },
    output_data_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfigToHclTerraform(struct!.outputDataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig",
    },
    resource_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigToHclTerraform(struct!.resourceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig",
    },
    retry_strategy: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategyToHclTerraform(struct!.retryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_hyper_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticHyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    stopping_condition: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingConditionToHclTerraform(struct!.stoppingCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition",
    },
    tuning_objective: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjectiveToHclTerraform(struct!.tuningObjective),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective",
    },
    vpc_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmSpecification = this._algorithmSpecification?.internalValue;
    }
    if (this._checkpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfig = this._checkpointConfig?.internalValue;
    }
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableManagedSpotTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableManagedSpotTraining = this._enableManagedSpotTraining;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._hyperParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterRanges = this._hyperParameterRanges?.internalValue;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._staticHyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHyperParameters = this._staticHyperParameters;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tuningObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningObjective = this._tuningObjective?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmSpecification.internalValue = undefined;
      this._checkpointConfig.internalValue = undefined;
      this._definitionName = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableManagedSpotTraining = undefined;
      this._enableNetworkIsolation = undefined;
      this._hyperParameterRanges.internalValue = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._retryStrategy.internalValue = undefined;
      this._roleArn = undefined;
      this._staticHyperParameters = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tuningObjective.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmSpecification.internalValue = value.algorithmSpecification;
      this._checkpointConfig.internalValue = value.checkpointConfig;
      this._definitionName = value.definitionName;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableManagedSpotTraining = value.enableManagedSpotTraining;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._hyperParameterRanges.internalValue = value.hyperParameterRanges;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._retryStrategy.internalValue = value.retryStrategy;
      this._roleArn = value.roleArn;
      this._staticHyperParameters = value.staticHyperParameters;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tuningObjective.internalValue = value.tuningObjective;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecificationOutputReference(this, "algorithm_specification");
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsAlgorithmSpecification) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfigOutputReference(this, "checkpoint_config");
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsCheckpointConfig) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // definition_name - computed: false, optional: true, required: false
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  public resetDefinitionName() {
    this._definitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // enable_inter_container_traffic_encryption - computed: false, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktf.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: false, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktf.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktf.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktf.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktf.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // hyper_parameter_ranges - computed: false, optional: true, required: false
  private _hyperParameterRanges = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRangesOutputReference(this, "hyper_parameter_ranges");
  public get hyperParameterRanges() {
    return this._hyperParameterRanges;
  }
  public putHyperParameterRanges(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsHyperParameterRanges) {
    this._hyperParameterRanges.internalValue = value;
  }
  public resetHyperParameterRanges() {
    this._hyperParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterRangesInput() {
    return this._hyperParameterRanges.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsInputDataConfig[] | cdktf.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfigOutputReference(this, "output_data_config");
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputDataConfig) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfigOutputReference(this, "resource_config");
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsResourceConfig) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // static_hyper_parameters - computed: false, optional: true, required: false
  private _staticHyperParameters?: { [key: string]: string }; 
  public get staticHyperParameters() {
    return this.getStringMapAttribute('static_hyper_parameters');
  }
  public set staticHyperParameters(value: { [key: string]: string }) {
    this._staticHyperParameters = value;
  }
  public resetStaticHyperParameters() {
    this._staticHyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHyperParametersInput() {
    return this._staticHyperParameters;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsStoppingCondition) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tuning_objective - computed: false, optional: true, required: false
  private _tuningObjective = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjectiveOutputReference(this, "tuning_objective");
  public get tuningObjective() {
    return this._tuningObjective;
  }
  public putTuningObjective(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsTuningObjective) {
    this._tuningObjective.internalValue = value;
  }
  public resetTuningObjective() {
    this._tuningObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningObjectiveInput() {
    return this._tuningObjective.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#hyper_parameter_tuning_job_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#hyper_parameter_tuning_job_name}
  */
  readonly hyperParameterTuningJobName?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyper_parameter_tuning_job_name: cdktf.stringToTerraform(struct!.hyperParameterTuningJobName),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyper_parameter_tuning_job_name: {
      value: cdktf.stringToHclTerraform(struct!.hyperParameterTuningJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperParameterTuningJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningJobName = this._hyperParameterTuningJobName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hyperParameterTuningJobName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hyperParameterTuningJobName = value.hyperParameterTuningJobName;
    }
  }

  // hyper_parameter_tuning_job_name - computed: false, optional: true, required: false
  private _hyperParameterTuningJobName?: string; 
  public get hyperParameterTuningJobName() {
    return this.getStringAttribute('hyper_parameter_tuning_job_name');
  }
  public set hyperParameterTuningJobName(value: string) {
    this._hyperParameterTuningJobName = value;
  }
  public resetHyperParameterTuningJobName() {
    this._hyperParameterTuningJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningJobNameInput() {
    return this._hyperParameterTuningJobName;
  }
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#parent_hyper_parameter_tuning_jobs DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#parent_hyper_parameter_tuning_jobs}
  */
  readonly parentHyperParameterTuningJobs?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#warm_start_type DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#warm_start_type}
  */
  readonly warmStartType?: string;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent_hyper_parameter_tuning_jobs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsToTerraform, false)(struct!.parentHyperParameterTuningJobs),
    warm_start_type: cdktf.stringToTerraform(struct!.warmStartType),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent_hyper_parameter_tuning_jobs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsToHclTerraform, false)(struct!.parentHyperParameterTuningJobs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsList",
    },
    warm_start_type: {
      value: cdktf.stringToHclTerraform(struct!.warmStartType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parentHyperParameterTuningJobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentHyperParameterTuningJobs = this._parentHyperParameterTuningJobs?.internalValue;
    }
    if (this._warmStartType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmStartType = this._warmStartType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parentHyperParameterTuningJobs.internalValue = undefined;
      this._warmStartType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parentHyperParameterTuningJobs.internalValue = value.parentHyperParameterTuningJobs;
      this._warmStartType = value.warmStartType;
    }
  }

  // parent_hyper_parameter_tuning_jobs - computed: false, optional: true, required: false
  private _parentHyperParameterTuningJobs = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobsList(this, "parent_hyper_parameter_tuning_jobs", false);
  public get parentHyperParameterTuningJobs() {
    return this._parentHyperParameterTuningJobs;
  }
  public putParentHyperParameterTuningJobs(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigParentHyperParameterTuningJobs[] | cdktf.IResolvable) {
    this._parentHyperParameterTuningJobs.internalValue = value;
  }
  public resetParentHyperParameterTuningJobs() {
    this._parentHyperParameterTuningJobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentHyperParameterTuningJobsInput() {
    return this._parentHyperParameterTuningJobs.internalValue;
  }

  // warm_start_type - computed: false, optional: true, required: false
  private _warmStartType?: string; 
  public get warmStartType() {
    return this.getStringAttribute('warm_start_type');
  }
  public set warmStartType(value: string) {
    this._warmStartType = value;
  }
  public resetWarmStartType() {
    this._warmStartType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmStartTypeInput() {
    return this._warmStartType;
  }
}
export interface DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec {
  /**
  * Configures SageMaker Automatic model tuning (AMT) to automatically find optimal parameters for the following fields: * ParameterRanges (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-ParameterRanges): The names and ranges of parameters that a hyperparameter tuning job can optimize. * ResourceLimits (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html): The maximum resources that can be used for a training job. These resources include the maximum number of training jobs, the maximum runtime of a tuning job, and the maximum number of training jobs to run at the same time. * TrainingJobEarlyStoppingType (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-TrainingJobEarlyStoppingType): A flag that specifies whether or not to use early stopping for training jobs launched by a hyperparameter tuning job. * RetryStrategy (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-RetryStrategy): The number of times to retry a training job. * Strategy (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html): Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training jobs that it launches. * ConvergenceDetected (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ConvergenceDetected.html): A flag to indicate that Automatic model tuning (AMT) has detected model convergence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#autotune DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#autotune}
  */
  readonly autotune?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune;
  /**
  * The HyperParameterTuningJobConfig (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html) object that describes the tuning job, including the search strategy, the objective metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job. For more information, see How Hyperparameter Tuning Works (https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#hyper_parameter_tuning_job_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#hyper_parameter_tuning_job_config}
  */
  readonly hyperParameterTuningJobConfig: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig;
  /**
  * The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same Amazon Web Services account and Amazon Web Services Region. The name must have 1 to 32 characters. Valid characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#hyper_parameter_tuning_job_name DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#hyper_parameter_tuning_job_name}
  */
  readonly hyperParameterTuningJobName: string;
  /**
  * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). Tags that you specify for the tuning job are also added to all training jobs that the tuning job launches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The HyperParameterTrainingJobDefinition (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html) object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#training_job_definition DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#training_job_definition}
  */
  readonly trainingJobDefinition?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition;
  /**
  * A list of the HyperParameterTrainingJobDefinition (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html) objects launched for this tuning job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#training_job_definitions DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#training_job_definitions}
  */
  readonly trainingJobDefinitions?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions[] | cdktf.IResolvable;
  /**
  * Specifies the configuration for starting the hyperparameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job. All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric. If you specify IDENTICAL_DATA_AND_ALGORITHM as the WarmStartType value for the warm start configuration, the training job that performs the best in the new tuning job is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job. All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#warm_start_config DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest#warm_start_config}
  */
  readonly warmStartConfig?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig;
}

export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autotune: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotuneToTerraform(struct!.autotune),
    hyper_parameter_tuning_job_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigToTerraform(struct!.hyperParameterTuningJobConfig),
    hyper_parameter_tuning_job_name: cdktf.stringToTerraform(struct!.hyperParameterTuningJobName),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    training_job_definition: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionToTerraform(struct!.trainingJobDefinition),
    training_job_definitions: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsToTerraform, false)(struct!.trainingJobDefinitions),
    warm_start_config: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigToTerraform(struct!.warmStartConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autotune: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotuneToHclTerraform(struct!.autotune),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune",
    },
    hyper_parameter_tuning_job_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigToHclTerraform(struct!.hyperParameterTuningJobConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig",
    },
    hyper_parameter_tuning_job_name: {
      value: cdktf.stringToHclTerraform(struct!.hyperParameterTuningJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsList",
    },
    training_job_definition: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionToHclTerraform(struct!.trainingJobDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition",
    },
    training_job_definitions: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsToHclTerraform, false)(struct!.trainingJobDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsList",
    },
    warm_start_config: {
      value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigToHclTerraform(struct!.warmStartConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autotune?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotune = this._autotune?.internalValue;
    }
    if (this._hyperParameterTuningJobConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningJobConfig = this._hyperParameterTuningJobConfig?.internalValue;
    }
    if (this._hyperParameterTuningJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningJobName = this._hyperParameterTuningJobName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._trainingJobDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingJobDefinition = this._trainingJobDefinition?.internalValue;
    }
    if (this._trainingJobDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingJobDefinitions = this._trainingJobDefinitions?.internalValue;
    }
    if (this._warmStartConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmStartConfig = this._warmStartConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autotune.internalValue = undefined;
      this._hyperParameterTuningJobConfig.internalValue = undefined;
      this._hyperParameterTuningJobName = undefined;
      this._tags.internalValue = undefined;
      this._trainingJobDefinition.internalValue = undefined;
      this._trainingJobDefinitions.internalValue = undefined;
      this._warmStartConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autotune.internalValue = value.autotune;
      this._hyperParameterTuningJobConfig.internalValue = value.hyperParameterTuningJobConfig;
      this._hyperParameterTuningJobName = value.hyperParameterTuningJobName;
      this._tags.internalValue = value.tags;
      this._trainingJobDefinition.internalValue = value.trainingJobDefinition;
      this._trainingJobDefinitions.internalValue = value.trainingJobDefinitions;
      this._warmStartConfig.internalValue = value.warmStartConfig;
    }
  }

  // autotune - computed: false, optional: true, required: false
  private _autotune = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotuneOutputReference(this, "autotune");
  public get autotune() {
    return this._autotune;
  }
  public putAutotune(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecAutotune) {
    this._autotune.internalValue = value;
  }
  public resetAutotune() {
    this._autotune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotuneInput() {
    return this._autotune.internalValue;
  }

  // hyper_parameter_tuning_job_config - computed: false, optional: false, required: true
  private _hyperParameterTuningJobConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfigOutputReference(this, "hyper_parameter_tuning_job_config");
  public get hyperParameterTuningJobConfig() {
    return this._hyperParameterTuningJobConfig;
  }
  public putHyperParameterTuningJobConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecHyperParameterTuningJobConfig) {
    this._hyperParameterTuningJobConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningJobConfigInput() {
    return this._hyperParameterTuningJobConfig.internalValue;
  }

  // hyper_parameter_tuning_job_name - computed: false, optional: false, required: true
  private _hyperParameterTuningJobName?: string; 
  public get hyperParameterTuningJobName() {
    return this.getStringAttribute('hyper_parameter_tuning_job_name');
  }
  public set hyperParameterTuningJobName(value: string) {
    this._hyperParameterTuningJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningJobNameInput() {
    return this._hyperParameterTuningJobName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // training_job_definition - computed: false, optional: true, required: false
  private _trainingJobDefinition = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionOutputReference(this, "training_job_definition");
  public get trainingJobDefinition() {
    return this._trainingJobDefinition;
  }
  public putTrainingJobDefinition(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinition) {
    this._trainingJobDefinition.internalValue = value;
  }
  public resetTrainingJobDefinition() {
    this._trainingJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobDefinitionInput() {
    return this._trainingJobDefinition.internalValue;
  }

  // training_job_definitions - computed: false, optional: true, required: false
  private _trainingJobDefinitions = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitionsList(this, "training_job_definitions", false);
  public get trainingJobDefinitions() {
    return this._trainingJobDefinitions;
  }
  public putTrainingJobDefinitions(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecTrainingJobDefinitions[] | cdktf.IResolvable) {
    this._trainingJobDefinitions.internalValue = value;
  }
  public resetTrainingJobDefinitions() {
    this._trainingJobDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobDefinitionsInput() {
    return this._trainingJobDefinitions.internalValue;
  }

  // warm_start_config - computed: false, optional: true, required: false
  private _warmStartConfig = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfigOutputReference(this, "warm_start_config");
  public get warmStartConfig() {
    return this._warmStartConfig;
  }
  public putWarmStartConfig(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecWarmStartConfig) {
    this._warmStartConfig.internalValue = value;
  }
  public resetWarmStartConfig() {
    this._warmStartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmStartConfigInput() {
    return this._warmStartConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_hyper_parameter_tuning_job_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsHyperParameterTuningJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
