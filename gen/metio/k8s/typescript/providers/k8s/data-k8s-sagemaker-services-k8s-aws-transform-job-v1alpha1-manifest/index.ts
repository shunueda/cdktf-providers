// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata;
  /**
  * TransformJobSpec defines the desired state of TransformJob. A batch transform job. For information about SageMaker batch transform, see Use Batch Transform (https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#input_filter DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#input_filter}
  */
  readonly inputFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#join_source DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#join_source}
  */
  readonly joinSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#output_filter DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#output_filter}
  */
  readonly outputFilter?: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessingToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_filter: cdktf.stringToTerraform(struct!.inputFilter),
    join_source: cdktf.stringToTerraform(struct!.joinSource),
    output_filter: cdktf.stringToTerraform(struct!.outputFilter),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessingToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_filter: {
      value: cdktf.stringToHclTerraform(struct!.inputFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_source: {
      value: cdktf.stringToHclTerraform(struct!.joinSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_filter: {
      value: cdktf.stringToHclTerraform(struct!.outputFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFilter = this._inputFilter;
    }
    if (this._joinSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinSource = this._joinSource;
    }
    if (this._outputFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilter = this._outputFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputFilter = undefined;
      this._joinSource = undefined;
      this._outputFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputFilter = value.inputFilter;
      this._joinSource = value.joinSource;
      this._outputFilter = value.outputFilter;
    }
  }

  // input_filter - computed: false, optional: true, required: false
  private _inputFilter?: string; 
  public get inputFilter() {
    return this.getStringAttribute('input_filter');
  }
  public set inputFilter(value: string) {
    this._inputFilter = value;
  }
  public resetInputFilter() {
    this._inputFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFilterInput() {
    return this._inputFilter;
  }

  // join_source - computed: false, optional: true, required: false
  private _joinSource?: string; 
  public get joinSource() {
    return this.getStringAttribute('join_source');
  }
  public set joinSource(value: string) {
    this._joinSource = value;
  }
  public resetJoinSource() {
    this._joinSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinSourceInput() {
    return this._joinSource;
  }

  // output_filter - computed: false, optional: true, required: false
  private _outputFilter?: string; 
  public get outputFilter() {
    return this.getStringAttribute('output_filter');
  }
  public set outputFilter(value: string) {
    this._outputFilter = value;
  }
  public resetOutputFilter() {
    this._outputFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilterInput() {
    return this._outputFilter;
  }
}
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#experiment_name DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#experiment_name}
  */
  readonly experimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#trial_component_display_name DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#trial_component_display_name}
  */
  readonly trialComponentDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#trial_name DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#trial_name}
  */
  readonly trialName?: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    experiment_name: cdktf.stringToTerraform(struct!.experimentName),
    trial_component_display_name: cdktf.stringToTerraform(struct!.trialComponentDisplayName),
    trial_name: cdktf.stringToTerraform(struct!.trialName),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    experiment_name: {
      value: cdktf.stringToHclTerraform(struct!.experimentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_component_display_name: {
      value: cdktf.stringToHclTerraform(struct!.trialComponentDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_name: {
      value: cdktf.stringToHclTerraform(struct!.trialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentName = this._experimentName;
    }
    if (this._trialComponentDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialComponentDisplayName = this._trialComponentDisplayName;
    }
    if (this._trialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialName = this._trialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimentName = undefined;
      this._trialComponentDisplayName = undefined;
      this._trialName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimentName = value.experimentName;
      this._trialComponentDisplayName = value.trialComponentDisplayName;
      this._trialName = value.trialName;
    }
  }

  // experiment_name - computed: false, optional: true, required: false
  private _experimentName?: string; 
  public get experimentName() {
    return this.getStringAttribute('experiment_name');
  }
  public set experimentName(value: string) {
    this._experimentName = value;
  }
  public resetExperimentName() {
    this._experimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentNameInput() {
    return this._experimentName;
  }

  // trial_component_display_name - computed: false, optional: true, required: false
  private _trialComponentDisplayName?: string; 
  public get trialComponentDisplayName() {
    return this.getStringAttribute('trial_component_display_name');
  }
  public set trialComponentDisplayName(value: string) {
    this._trialComponentDisplayName = value;
  }
  public resetTrialComponentDisplayName() {
    this._trialComponentDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialComponentDisplayNameInput() {
    return this._trialComponentDisplayName;
  }

  // trial_name - computed: false, optional: true, required: false
  private _trialName?: string; 
  public get trialName() {
    return this.getStringAttribute('trial_name');
  }
  public set trialName(value: string) {
    this._trialName = value;
  }
  public resetTrialName() {
    this._trialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialNameInput() {
    return this._trialName;
  }
}
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#invocations_max_retries DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#invocations_max_retries}
  */
  readonly invocationsMaxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#invocations_timeout_in_seconds DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#invocations_timeout_in_seconds}
  */
  readonly invocationsTimeoutInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invocations_max_retries: cdktf.numberToTerraform(struct!.invocationsMaxRetries),
    invocations_timeout_in_seconds: cdktf.numberToTerraform(struct!.invocationsTimeoutInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invocations_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.invocationsMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocations_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.invocationsTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationsMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationsMaxRetries = this._invocationsMaxRetries;
    }
    if (this._invocationsTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationsTimeoutInSeconds = this._invocationsTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationsMaxRetries = undefined;
      this._invocationsTimeoutInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationsMaxRetries = value.invocationsMaxRetries;
      this._invocationsTimeoutInSeconds = value.invocationsTimeoutInSeconds;
    }
  }

  // invocations_max_retries - computed: false, optional: true, required: false
  private _invocationsMaxRetries?: number; 
  public get invocationsMaxRetries() {
    return this.getNumberAttribute('invocations_max_retries');
  }
  public set invocationsMaxRetries(value: number) {
    this._invocationsMaxRetries = value;
  }
  public resetInvocationsMaxRetries() {
    this._invocationsMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationsMaxRetriesInput() {
    return this._invocationsMaxRetries;
  }

  // invocations_timeout_in_seconds - computed: false, optional: true, required: false
  private _invocationsTimeoutInSeconds?: number; 
  public get invocationsTimeoutInSeconds() {
    return this.getNumberAttribute('invocations_timeout_in_seconds');
  }
  public set invocationsTimeoutInSeconds(value: number) {
    this._invocationsTimeoutInSeconds = value;
  }
  public resetInvocationsTimeoutInSeconds() {
    this._invocationsTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationsTimeoutInSecondsInput() {
    return this._invocationsTimeoutInSeconds;
  }
}
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
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
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource {
  /**
  * Describes the S3 data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#s3_data_source DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#s3_data_source}
  */
  readonly s3DataSource?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_source: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceS3DataSource) {
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
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Describes the location of the channel data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#data_source DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#split_type DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#split_type}
  */
  readonly splitType?: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    data_source: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceToTerraform(struct!.dataSource),
    split_type: cdktf.stringToTerraform(struct!.splitType),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput | cdktf.IResolvable): any {
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
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource",
    },
    split_type: {
      value: cdktf.stringToHclTerraform(struct!.splitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._splitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitType = this._splitType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._dataSource.internalValue = undefined;
      this._splitType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._dataSource.internalValue = value.dataSource;
      this._splitType = value.splitType;
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
  private _dataSource = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // split_type - computed: false, optional: true, required: false
  private _splitType?: string; 
  public get splitType() {
    return this.getStringAttribute('split_type');
  }
  public set splitType(value: string) {
    this._splitType = value;
  }
  public resetSplitType() {
    this._splitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTypeInput() {
    return this._splitType;
  }
}
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#accept DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#accept}
  */
  readonly accept?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#assemble_with DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#assemble_with}
  */
  readonly assembleWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept: cdktf.stringToTerraform(struct!.accept),
    assemble_with: cdktf.stringToTerraform(struct!.assembleWith),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept: {
      value: cdktf.stringToHclTerraform(struct!.accept),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assemble_with: {
      value: cdktf.stringToHclTerraform(struct!.assembleWith),
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

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accept !== undefined) {
      hasAnyValues = true;
      internalValueResult.accept = this._accept;
    }
    if (this._assembleWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.assembleWith = this._assembleWith;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accept = undefined;
      this._assembleWith = undefined;
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
      this._accept = value.accept;
      this._assembleWith = value.assembleWith;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // accept - computed: false, optional: true, required: false
  private _accept?: string; 
  public get accept() {
    return this.getStringAttribute('accept');
  }
  public set accept(value: string) {
    this._accept = value;
  }
  public resetAccept() {
    this._accept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept;
  }

  // assemble_with - computed: false, optional: true, required: false
  private _assembleWith?: string; 
  public get assembleWith() {
    return this.getStringAttribute('assemble_with');
  }
  public set assembleWith(value: string) {
    this._assembleWith = value;
  }
  public resetAssembleWith() {
    this._assembleWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assembleWithInput() {
    return this._assembleWith;
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
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResourcesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResourcesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources | cdktf.IResolvable): any {
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
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
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
}
export interface DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec {
  /**
  * Specifies the number of records to include in a mini-batch for an HTTP inference request. A record is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record. To enable the batch strategy, you must set the SplitType property to Line, RecordIO, or TFRecord. To use only one record when making an HTTP invocation request to a container, set BatchStrategy to SingleRecord and SplitType to Line. To fit as many records in a mini-batch as can fit within the MaxPayloadInMB limit, set BatchStrategy to MultiRecord and SplitType to Line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#batch_strategy DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#batch_strategy}
  */
  readonly batchStrategy?: string;
  /**
  * The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see Associate Prediction Results with their Corresponding Input Records (https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#data_processing DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#data_processing}
  */
  readonly dataProcessing?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing;
  /**
  * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: * CreateProcessingJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html) * CreateTrainingJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html) * CreateTransformJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#experiment_config DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#experiment_config}
  */
  readonly experimentConfig?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig;
  /**
  * The maximum number of parallel requests that can be sent to each instance in a transform job. If MaxConcurrentTransforms is set to 0 or left unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is 1. For more information on execution-parameters, see How Containers Serve Requests (https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests). For built-in algorithms, you don't need to set a value for MaxConcurrentTransforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#max_concurrent_transforms DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#max_concurrent_transforms}
  */
  readonly maxConcurrentTransforms?: number;
  /**
  * The maximum allowed size of the payload, in MB. A payload is the data portion of a record (without metadata). The value in MaxPayloadInMB must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is 6 MB. The value of MaxPayloadInMB cannot be greater than 100 MB. If you specify the MaxConcurrentTransforms parameter, the value of (MaxConcurrentTransforms * MaxPayloadInMB) also cannot exceed 100 MB. For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to 0. This feature works only in supported algorithms. Currently, Amazon SageMaker built-in algorithms do not support HTTP chunked encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#max_payload_in_mb DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#max_payload_in_mb}
  */
  readonly maxPayloadInMb?: number;
  /**
  * Configures the timeout and maximum number of retries for processing a transform job invocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#model_client_config DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#model_client_config}
  */
  readonly modelClientConfig?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig;
  /**
  * The name of the model that you want to use for the transform job. ModelName must be the name of an existing Amazon SageMaker model within an Amazon Web Services Region in an Amazon Web Services account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#model_name DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#model_name}
  */
  readonly modelName: string;
  /**
  * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags (https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the Amazon Web Services Billing and Cost Management User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Describes the input source and the way the transform job consumes it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#transform_input DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#transform_input}
  */
  readonly transformInput: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput;
  /**
  * The name of the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#transform_job_name DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#transform_job_name}
  */
  readonly transformJobName: string;
  /**
  * Describes the results of the transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#transform_output DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#transform_output}
  */
  readonly transformOutput: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput;
  /**
  * Describes the resources, including ML instance types and ML instance count, to use for the transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#transform_resources DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest#transform_resources}
  */
  readonly transformResources: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources;
}

export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_strategy: cdktf.stringToTerraform(struct!.batchStrategy),
    data_processing: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessingToTerraform(struct!.dataProcessing),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    experiment_config: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfigToTerraform(struct!.experimentConfig),
    max_concurrent_transforms: cdktf.numberToTerraform(struct!.maxConcurrentTransforms),
    max_payload_in_mb: cdktf.numberToTerraform(struct!.maxPayloadInMb),
    model_client_config: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfigToTerraform(struct!.modelClientConfig),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    transform_input: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputToTerraform(struct!.transformInput),
    transform_job_name: cdktf.stringToTerraform(struct!.transformJobName),
    transform_output: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutputToTerraform(struct!.transformOutput),
    transform_resources: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResourcesToTerraform(struct!.transformResources),
  }
}


export function dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_strategy: {
      value: cdktf.stringToHclTerraform(struct!.batchStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_processing: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessingToHclTerraform(struct!.dataProcessing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    experiment_config: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfigToHclTerraform(struct!.experimentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig",
    },
    max_concurrent_transforms: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentTransforms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_payload_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.maxPayloadInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_client_config: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfigToHclTerraform(struct!.modelClientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsList",
    },
    transform_input: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputToHclTerraform(struct!.transformInput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput",
    },
    transform_job_name: {
      value: cdktf.stringToHclTerraform(struct!.transformJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_output: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutputToHclTerraform(struct!.transformOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput",
    },
    transform_resources: {
      value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResourcesToHclTerraform(struct!.transformResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchStrategy = this._batchStrategy;
    }
    if (this._dataProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProcessing = this._dataProcessing?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._experimentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentConfig = this._experimentConfig?.internalValue;
    }
    if (this._maxConcurrentTransforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentTransforms = this._maxConcurrentTransforms;
    }
    if (this._maxPayloadInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadInMb = this._maxPayloadInMb;
    }
    if (this._modelClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelClientConfig = this._modelClientConfig?.internalValue;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._transformInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformInput = this._transformInput?.internalValue;
    }
    if (this._transformJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformJobName = this._transformJobName;
    }
    if (this._transformOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformOutput = this._transformOutput?.internalValue;
    }
    if (this._transformResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformResources = this._transformResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchStrategy = undefined;
      this._dataProcessing.internalValue = undefined;
      this._environment = undefined;
      this._experimentConfig.internalValue = undefined;
      this._maxConcurrentTransforms = undefined;
      this._maxPayloadInMb = undefined;
      this._modelClientConfig.internalValue = undefined;
      this._modelName = undefined;
      this._tags.internalValue = undefined;
      this._transformInput.internalValue = undefined;
      this._transformJobName = undefined;
      this._transformOutput.internalValue = undefined;
      this._transformResources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchStrategy = value.batchStrategy;
      this._dataProcessing.internalValue = value.dataProcessing;
      this._environment = value.environment;
      this._experimentConfig.internalValue = value.experimentConfig;
      this._maxConcurrentTransforms = value.maxConcurrentTransforms;
      this._maxPayloadInMb = value.maxPayloadInMb;
      this._modelClientConfig.internalValue = value.modelClientConfig;
      this._modelName = value.modelName;
      this._tags.internalValue = value.tags;
      this._transformInput.internalValue = value.transformInput;
      this._transformJobName = value.transformJobName;
      this._transformOutput.internalValue = value.transformOutput;
      this._transformResources.internalValue = value.transformResources;
    }
  }

  // batch_strategy - computed: false, optional: true, required: false
  private _batchStrategy?: string; 
  public get batchStrategy() {
    return this.getStringAttribute('batch_strategy');
  }
  public set batchStrategy(value: string) {
    this._batchStrategy = value;
  }
  public resetBatchStrategy() {
    this._batchStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchStrategyInput() {
    return this._batchStrategy;
  }

  // data_processing - computed: false, optional: true, required: false
  private _dataProcessing = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessingOutputReference(this, "data_processing");
  public get dataProcessing() {
    return this._dataProcessing;
  }
  public putDataProcessing(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecDataProcessing) {
    this._dataProcessing.internalValue = value;
  }
  public resetDataProcessing() {
    this._dataProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProcessingInput() {
    return this._dataProcessing.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // experiment_config - computed: false, optional: true, required: false
  private _experimentConfig = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfigOutputReference(this, "experiment_config");
  public get experimentConfig() {
    return this._experimentConfig;
  }
  public putExperimentConfig(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecExperimentConfig) {
    this._experimentConfig.internalValue = value;
  }
  public resetExperimentConfig() {
    this._experimentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentConfigInput() {
    return this._experimentConfig.internalValue;
  }

  // max_concurrent_transforms - computed: false, optional: true, required: false
  private _maxConcurrentTransforms?: number; 
  public get maxConcurrentTransforms() {
    return this.getNumberAttribute('max_concurrent_transforms');
  }
  public set maxConcurrentTransforms(value: number) {
    this._maxConcurrentTransforms = value;
  }
  public resetMaxConcurrentTransforms() {
    this._maxConcurrentTransforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTransformsInput() {
    return this._maxConcurrentTransforms;
  }

  // max_payload_in_mb - computed: false, optional: true, required: false
  private _maxPayloadInMb?: number; 
  public get maxPayloadInMb() {
    return this.getNumberAttribute('max_payload_in_mb');
  }
  public set maxPayloadInMb(value: number) {
    this._maxPayloadInMb = value;
  }
  public resetMaxPayloadInMb() {
    this._maxPayloadInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadInMbInput() {
    return this._maxPayloadInMb;
  }

  // model_client_config - computed: false, optional: true, required: false
  private _modelClientConfig = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfigOutputReference(this, "model_client_config");
  public get modelClientConfig() {
    return this._modelClientConfig;
  }
  public putModelClientConfig(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecModelClientConfig) {
    this._modelClientConfig.internalValue = value;
  }
  public resetModelClientConfig() {
    this._modelClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelClientConfigInput() {
    return this._modelClientConfig.internalValue;
  }

  // model_name - computed: false, optional: false, required: true
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transform_input - computed: false, optional: false, required: true
  private _transformInput = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInputOutputReference(this, "transform_input");
  public get transformInput() {
    return this._transformInput;
  }
  public putTransformInput(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformInput) {
    this._transformInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInputInput() {
    return this._transformInput.internalValue;
  }

  // transform_job_name - computed: false, optional: false, required: true
  private _transformJobName?: string; 
  public get transformJobName() {
    return this.getStringAttribute('transform_job_name');
  }
  public set transformJobName(value: string) {
    this._transformJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformJobNameInput() {
    return this._transformJobName;
  }

  // transform_output - computed: false, optional: false, required: true
  private _transformOutput = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutputOutputReference(this, "transform_output");
  public get transformOutput() {
    return this._transformOutput;
  }
  public putTransformOutput(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformOutput) {
    this._transformOutput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformOutputInput() {
    return this._transformOutput.internalValue;
  }

  // transform_resources - computed: false, optional: false, required: true
  private _transformResources = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResourcesOutputReference(this, "transform_resources");
  public get transformResources() {
    return this._transformResources;
  }
  public putTransformResources(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecTransformResources) {
    this._transformResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformResourcesInput() {
    return this._transformResources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_transform_job_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsTransformJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
