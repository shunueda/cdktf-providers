// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata;
  /**
  * ProcessingJobSpec defines the desired state of ProcessingJob. An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see Process Data and Evaluate Models (https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#container_arguments DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#container_entrypoint DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#image_uri DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#image_uri}
  */
  readonly imageUri?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerEntrypoint),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._imageUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._imageUri = value.imageUri;
    }
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#experiment_name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#experiment_name}
  */
  readonly experimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#trial_component_display_name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#trial_component_display_name}
  */
  readonly trialComponentDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#trial_name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#trial_name}
  */
  readonly trialName?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#enable_inter_container_traffic_encryption DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC (https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_inter_container_traffic_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
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
    vpc_config: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableNetworkIsolation = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
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

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigVpcConfig) {
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
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition {
  /**
  * The name of the data catalog used in Athena query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#catalog DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#catalog}
  */
  readonly catalog?: string;
  /**
  * The name of the database used in the Athena query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#database DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The compression used for Athena query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#output_compression DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#output_compression}
  */
  readonly outputCompression?: string;
  /**
  * The data storage format for Athena query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#output_format DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#output_s3_uri DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#output_s3_uri}
  */
  readonly outputS3Uri?: string;
  /**
  * The SQL query statements, to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#query_string DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#query_string}
  */
  readonly queryString?: string;
  /**
  * The name of the workgroup in which the Athena query is being started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#work_group DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#work_group}
  */
  readonly workGroup?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    database: cdktf.stringToTerraform(struct!.database),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    output_compression: cdktf.stringToTerraform(struct!.outputCompression),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    output_s3_uri: cdktf.stringToTerraform(struct!.outputS3Uri),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    output_compression: {
      value: cdktf.stringToHclTerraform(struct!.outputCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.outputS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktf.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._outputCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputCompression = this._outputCompression;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._outputS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3Uri = this._outputS3Uri;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._database = undefined;
      this._kmsKeyId = undefined;
      this._outputCompression = undefined;
      this._outputFormat = undefined;
      this._outputS3Uri = undefined;
      this._queryString = undefined;
      this._workGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._database = value.database;
      this._kmsKeyId = value.kmsKeyId;
      this._outputCompression = value.outputCompression;
      this._outputFormat = value.outputFormat;
      this._outputS3Uri = value.outputS3Uri;
      this._queryString = value.queryString;
      this._workGroup = value.workGroup;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // output_compression - computed: false, optional: true, required: false
  private _outputCompression?: string; 
  public get outputCompression() {
    return this.getStringAttribute('output_compression');
  }
  public set outputCompression(value: string) {
    this._outputCompression = value;
  }
  public resetOutputCompression() {
    this._outputCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCompressionInput() {
    return this._outputCompression;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // output_s3_uri - computed: false, optional: true, required: false
  private _outputS3Uri?: string; 
  public get outputS3Uri() {
    return this.getStringAttribute('output_s3_uri');
  }
  public set outputS3Uri(value: string) {
    this._outputS3Uri = value;
  }
  public resetOutputS3Uri() {
    this._outputS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3UriInput() {
    return this._outputS3Uri;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // work_group - computed: false, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition {
  /**
  * The Redshift cluster Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#cluster_id DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#cluster_role_arn DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#cluster_role_arn}
  */
  readonly clusterRoleArn?: string;
  /**
  * The name of the Redshift database used in Redshift query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#database DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * The database user name used in Redshift query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#db_user DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#db_user}
  */
  readonly dbUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The compression used for Redshift query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#output_compression DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#output_compression}
  */
  readonly outputCompression?: string;
  /**
  * The data storage format for Redshift query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#output_format DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#output_s3_uri DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#output_s3_uri}
  */
  readonly outputS3Uri?: string;
  /**
  * The SQL query statements to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#query_string DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#query_string}
  */
  readonly queryString?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_role_arn: cdktf.stringToTerraform(struct!.clusterRoleArn),
    database: cdktf.stringToTerraform(struct!.database),
    db_user: cdktf.stringToTerraform(struct!.dbUser),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    output_compression: cdktf.stringToTerraform(struct!.outputCompression),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    output_s3_uri: cdktf.stringToTerraform(struct!.outputS3Uri),
    query_string: cdktf.stringToTerraform(struct!.queryString),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user: {
      value: cdktf.stringToHclTerraform(struct!.dbUser),
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
    output_compression: {
      value: cdktf.stringToHclTerraform(struct!.outputCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.outputS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleArn = this._clusterRoleArn;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUser = this._dbUser;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._outputCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputCompression = this._outputCompression;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._outputS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3Uri = this._outputS3Uri;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._clusterRoleArn = undefined;
      this._database = undefined;
      this._dbUser = undefined;
      this._kmsKeyId = undefined;
      this._outputCompression = undefined;
      this._outputFormat = undefined;
      this._outputS3Uri = undefined;
      this._queryString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._clusterRoleArn = value.clusterRoleArn;
      this._database = value.database;
      this._dbUser = value.dbUser;
      this._kmsKeyId = value.kmsKeyId;
      this._outputCompression = value.outputCompression;
      this._outputFormat = value.outputFormat;
      this._outputS3Uri = value.outputS3Uri;
      this._queryString = value.queryString;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_role_arn - computed: false, optional: true, required: false
  private _clusterRoleArn?: string; 
  public get clusterRoleArn() {
    return this.getStringAttribute('cluster_role_arn');
  }
  public set clusterRoleArn(value: string) {
    this._clusterRoleArn = value;
  }
  public resetClusterRoleArn() {
    this._clusterRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleArnInput() {
    return this._clusterRoleArn;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_user - computed: false, optional: true, required: false
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  public resetDbUser() {
    this._dbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
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

  // output_compression - computed: false, optional: true, required: false
  private _outputCompression?: string; 
  public get outputCompression() {
    return this.getStringAttribute('output_compression');
  }
  public set outputCompression(value: string) {
    this._outputCompression = value;
  }
  public resetOutputCompression() {
    this._outputCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCompressionInput() {
    return this._outputCompression;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // output_s3_uri - computed: false, optional: true, required: false
  private _outputS3Uri?: string; 
  public get outputS3Uri() {
    return this.getStringAttribute('output_s3_uri');
  }
  public set outputS3Uri(value: string) {
    this._outputS3Uri = value;
  }
  public resetOutputS3Uri() {
    this._outputS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3UriInput() {
    return this._outputS3Uri;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition {
  /**
  * Configuration for Athena Dataset Definition input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#athena_dataset_definition DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#athena_dataset_definition}
  */
  readonly athenaDatasetDefinition?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#data_distribution_type DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#data_distribution_type}
  */
  readonly dataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#input_mode DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Configuration for Redshift Dataset Definition input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#redshift_dataset_definition DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#redshift_dataset_definition}
  */
  readonly redshiftDatasetDefinition?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    athena_dataset_definition: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToTerraform(struct!.athenaDatasetDefinition),
    data_distribution_type: cdktf.stringToTerraform(struct!.dataDistributionType),
    input_mode: cdktf.stringToTerraform(struct!.inputMode),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    redshift_dataset_definition: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToTerraform(struct!.redshiftDatasetDefinition),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    athena_dataset_definition: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToHclTerraform(struct!.athenaDatasetDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition",
    },
    data_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.dataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktf.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshift_dataset_definition: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToHclTerraform(struct!.redshiftDatasetDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._athenaDatasetDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaDatasetDefinition = this._athenaDatasetDefinition?.internalValue;
    }
    if (this._dataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDistributionType = this._dataDistributionType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._redshiftDatasetDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftDatasetDefinition = this._redshiftDatasetDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._athenaDatasetDefinition.internalValue = undefined;
      this._dataDistributionType = undefined;
      this._inputMode = undefined;
      this._localPath = undefined;
      this._redshiftDatasetDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._athenaDatasetDefinition.internalValue = value.athenaDatasetDefinition;
      this._dataDistributionType = value.dataDistributionType;
      this._inputMode = value.inputMode;
      this._localPath = value.localPath;
      this._redshiftDatasetDefinition.internalValue = value.redshiftDatasetDefinition;
    }
  }

  // athena_dataset_definition - computed: false, optional: true, required: false
  private _athenaDatasetDefinition = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(this, "athena_dataset_definition");
  public get athenaDatasetDefinition() {
    return this._athenaDatasetDefinition;
  }
  public putAthenaDatasetDefinition(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionAthenaDatasetDefinition) {
    this._athenaDatasetDefinition.internalValue = value;
  }
  public resetAthenaDatasetDefinition() {
    this._athenaDatasetDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaDatasetDefinitionInput() {
    return this._athenaDatasetDefinition.internalValue;
  }

  // data_distribution_type - computed: false, optional: true, required: false
  private _dataDistributionType?: string; 
  public get dataDistributionType() {
    return this.getStringAttribute('data_distribution_type');
  }
  public set dataDistributionType(value: string) {
    this._dataDistributionType = value;
  }
  public resetDataDistributionType() {
    this._dataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDistributionTypeInput() {
    return this._dataDistributionType;
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

  // redshift_dataset_definition - computed: false, optional: true, required: false
  private _redshiftDatasetDefinition = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(this, "redshift_dataset_definition");
  public get redshiftDatasetDefinition() {
    return this._redshiftDatasetDefinition;
  }
  public putRedshiftDatasetDefinition(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionRedshiftDatasetDefinition) {
    this._redshiftDatasetDefinition.internalValue = value;
  }
  public resetRedshiftDatasetDefinition() {
    this._redshiftDatasetDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftDatasetDefinitionInput() {
    return this._redshiftDatasetDefinition.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_compression_type DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_compression_type}
  */
  readonly s3CompressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_data_distribution_type DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_input_mode DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_input_mode}
  */
  readonly s3InputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3InputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_compression_type: cdktf.stringToTerraform(struct!.s3CompressionType),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3InputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input | cdktf.IResolvable): any {
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
    s3_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.s3CompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    s3_input_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3InputMode),
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3InputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3CompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3CompressionType = this._s3CompressionType;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3CompressionType = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3InputMode = undefined;
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
      this._s3CompressionType = value.s3CompressionType;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3InputMode = value.s3InputMode;
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

  // s3_compression_type - computed: false, optional: true, required: false
  private _s3CompressionType?: string; 
  public get s3CompressionType() {
    return this.getStringAttribute('s3_compression_type');
  }
  public set s3CompressionType(value: string) {
    this._s3CompressionType = value;
  }
  public resetS3CompressionType() {
    this._s3CompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompressionTypeInput() {
    return this._s3CompressionType;
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

  // s3_input_mode - computed: false, optional: true, required: false
  private _s3InputMode?: string; 
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
  public set s3InputMode(value: string) {
    this._s3InputMode = value;
  }
  public resetS3InputMode() {
    this._s3InputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputModeInput() {
    return this._s3InputMode;
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
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#app_managed DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#app_managed}
  */
  readonly appManaged?: boolean | cdktf.IResolvable;
  /**
  * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either AthenaDatasetDefinition or RedshiftDatasetDefinition types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#dataset_definition DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#dataset_definition}
  */
  readonly datasetDefinition?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#input_name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#input_name}
  */
  readonly inputName?: string;
  /**
  * Configuration for downloading input data from Amazon S3 into the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_input DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_input}
  */
  readonly s3Input?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_managed: cdktf.booleanToTerraform(struct!.appManaged),
    dataset_definition: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionToTerraform(struct!.datasetDefinition),
    input_name: cdktf.stringToTerraform(struct!.inputName),
    s3_input: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3InputToTerraform(struct!.s3Input),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_managed: {
      value: cdktf.booleanToHclTerraform(struct!.appManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dataset_definition: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionToHclTerraform(struct!.datasetDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition",
    },
    input_name: {
      value: cdktf.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3InputToHclTerraform(struct!.s3Input),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.appManaged = this._appManaged;
    }
    if (this._datasetDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetDefinition = this._datasetDefinition?.internalValue;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._s3Input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Input = this._s3Input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appManaged = undefined;
      this._datasetDefinition.internalValue = undefined;
      this._inputName = undefined;
      this._s3Input.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appManaged = value.appManaged;
      this._datasetDefinition.internalValue = value.datasetDefinition;
      this._inputName = value.inputName;
      this._s3Input.internalValue = value.s3Input;
    }
  }

  // app_managed - computed: false, optional: true, required: false
  private _appManaged?: boolean | cdktf.IResolvable; 
  public get appManaged() {
    return this.getBooleanAttribute('app_managed');
  }
  public set appManaged(value: boolean | cdktf.IResolvable) {
    this._appManaged = value;
  }
  public resetAppManaged() {
    this._appManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appManagedInput() {
    return this._appManaged;
  }

  // dataset_definition - computed: false, optional: true, required: false
  private _datasetDefinition = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinitionOutputReference(this, "dataset_definition");
  public get datasetDefinition() {
    return this._datasetDefinition;
  }
  public putDatasetDefinition(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsDatasetDefinition) {
    this._datasetDefinition.internalValue = value;
  }
  public resetDatasetDefinition() {
    this._datasetDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetDefinitionInput() {
    return this._datasetDefinition.internalValue;
  }

  // input_name - computed: false, optional: true, required: false
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  public resetInputName() {
    this._inputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // s3_input - computed: false, optional: true, required: false
  private _s3Input = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3InputOutputReference(this, "s3_input");
  public get s3Input() {
    return this._s3Input;
  }
  public putS3Input(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsS3Input) {
    this._s3Input.internalValue = value;
  }
  public resetS3Input() {
    this._s3Input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInput() {
    return this._s3Input.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#feature_group_name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#feature_group_name}
  */
  readonly featureGroupName?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_group_name: cdktf.stringToTerraform(struct!.featureGroupName),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_group_name: {
      value: cdktf.stringToHclTerraform(struct!.featureGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGroupName = this._featureGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureGroupName = value.featureGroupName;
    }
  }

  // feature_group_name - computed: false, optional: true, required: false
  private _featureGroupName?: string; 
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
  public set featureGroupName(value: string) {
    this._featureGroupName = value;
  }
  public resetFeatureGroupName() {
    this._featureGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupNameInput() {
    return this._featureGroupName;
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_upload_mode DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3OutputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3OutputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output | cdktf.IResolvable): any {
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
    s3_upload_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3UploadMode),
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3OutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3UploadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UploadMode = this._s3UploadMode;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3UploadMode = undefined;
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
      this._s3UploadMode = value.s3UploadMode;
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

  // s3_upload_mode - computed: false, optional: true, required: false
  private _s3UploadMode?: string; 
  public get s3UploadMode() {
    return this.getStringAttribute('s3_upload_mode');
  }
  public set s3UploadMode(value: string) {
    this._s3UploadMode = value;
  }
  public resetS3UploadMode() {
    this._s3UploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UploadModeInput() {
    return this._s3UploadMode;
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
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#app_managed DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#app_managed}
  */
  readonly appManaged?: boolean | cdktf.IResolvable;
  /**
  * Configuration for processing job outputs in Amazon SageMaker Feature Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#feature_store_output DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#feature_store_output}
  */
  readonly featureStoreOutput?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#output_name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#output_name}
  */
  readonly outputName?: string;
  /**
  * Configuration for uploading output data to Amazon S3 from the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#s3_output DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#s3_output}
  */
  readonly s3Output?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_managed: cdktf.booleanToTerraform(struct!.appManaged),
    feature_store_output: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutputToTerraform(struct!.featureStoreOutput),
    output_name: cdktf.stringToTerraform(struct!.outputName),
    s3_output: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3OutputToTerraform(struct!.s3Output),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_managed: {
      value: cdktf.booleanToHclTerraform(struct!.appManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_store_output: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutputToHclTerraform(struct!.featureStoreOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput",
    },
    output_name: {
      value: cdktf.stringToHclTerraform(struct!.outputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3OutputToHclTerraform(struct!.s3Output),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.appManaged = this._appManaged;
    }
    if (this._featureStoreOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureStoreOutput = this._featureStoreOutput?.internalValue;
    }
    if (this._outputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputName = this._outputName;
    }
    if (this._s3Output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Output = this._s3Output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appManaged = undefined;
      this._featureStoreOutput.internalValue = undefined;
      this._outputName = undefined;
      this._s3Output.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appManaged = value.appManaged;
      this._featureStoreOutput.internalValue = value.featureStoreOutput;
      this._outputName = value.outputName;
      this._s3Output.internalValue = value.s3Output;
    }
  }

  // app_managed - computed: false, optional: true, required: false
  private _appManaged?: boolean | cdktf.IResolvable; 
  public get appManaged() {
    return this.getBooleanAttribute('app_managed');
  }
  public set appManaged(value: boolean | cdktf.IResolvable) {
    this._appManaged = value;
  }
  public resetAppManaged() {
    this._appManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appManagedInput() {
    return this._appManaged;
  }

  // feature_store_output - computed: false, optional: true, required: false
  private _featureStoreOutput = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(this, "feature_store_output");
  public get featureStoreOutput() {
    return this._featureStoreOutput;
  }
  public putFeatureStoreOutput(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsFeatureStoreOutput) {
    this._featureStoreOutput.internalValue = value;
  }
  public resetFeatureStoreOutput() {
    this._featureStoreOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStoreOutputInput() {
    return this._featureStoreOutput.internalValue;
  }

  // output_name - computed: false, optional: true, required: false
  private _outputName?: string; 
  public get outputName() {
    return this.getStringAttribute('output_name');
  }
  public set outputName(value: string) {
    this._outputName = value;
  }
  public resetOutputName() {
    this._outputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNameInput() {
    return this._outputName;
  }

  // s3_output - computed: false, optional: true, required: false
  private _s3Output = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
  public putS3Output(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsS3Output) {
    this._s3Output.internalValue = value;
  }
  public resetS3Output() {
    this._s3Output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputInput() {
    return this._s3Output.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#outputs DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    outputs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsToTerraform, false)(struct!.outputs),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._outputs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._outputs.internalValue = value.outputs;
    }
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

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig | cdktf.IResolvable | undefined {
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
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
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
      this._instanceType = value.instanceType;
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
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources {
  /**
  * Configuration for the cluster used to run a processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#cluster_config DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
    }
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#max_runtime_in_seconds DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingConditionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingConditionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_runtime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRuntimeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
    }
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
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec {
  /**
  * Configures the processing job to run a specified Docker container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#app_specification DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#app_specification}
  */
  readonly appSpecification: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification;
  /**
  * The environment variables to set in the Docker container. Up to 100 key and values entries in the map are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: * CreateProcessingJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html) * CreateTrainingJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html) * CreateTransformJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#experiment_config DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#experiment_config}
  */
  readonly experimentConfig?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig;
  /**
  * Networking options for a processing job, such as whether to allow inbound and outbound network calls to and from processing containers, and the VPC subnets and security groups to use for VPC-enabled processing jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#network_config DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#network_config}
  */
  readonly networkConfig?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig;
  /**
  * An array of inputs configuring the data to download into the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#processing_inputs DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#processing_inputs}
  */
  readonly processingInputs?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs[] | cdktf.IResolvable;
  /**
  * The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#processing_job_name DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#processing_job_name}
  */
  readonly processingJobName: string;
  /**
  * Output configuration for the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#processing_output_config DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#processing_output_config}
  */
  readonly processingOutputConfig?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig;
  /**
  * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#processing_resources DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#processing_resources}
  */
  readonly processingResources: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#role_arn DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * The time limit for how long the processing job is allowed to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#stopping_condition DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#stopping_condition}
  */
  readonly stoppingCondition?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition;
  /**
  * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags (https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the Amazon Web Services Billing and Cost Management User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_specification: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecificationToTerraform(struct!.appSpecification),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    experiment_config: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfigToTerraform(struct!.experimentConfig),
    network_config: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigToTerraform(struct!.networkConfig),
    processing_inputs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsToTerraform, false)(struct!.processingInputs),
    processing_job_name: cdktf.stringToTerraform(struct!.processingJobName),
    processing_output_config: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigToTerraform(struct!.processingOutputConfig),
    processing_resources: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesToTerraform(struct!.processingResources),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stopping_condition: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingConditionToTerraform(struct!.stoppingCondition),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_specification: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecificationToHclTerraform(struct!.appSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    experiment_config: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfigToHclTerraform(struct!.experimentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig",
    },
    network_config: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig",
    },
    processing_inputs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsToHclTerraform, false)(struct!.processingInputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsList",
    },
    processing_job_name: {
      value: cdktf.stringToHclTerraform(struct!.processingJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processing_output_config: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigToHclTerraform(struct!.processingOutputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig",
    },
    processing_resources: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesToHclTerraform(struct!.processingResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stopping_condition: {
      value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingConditionToHclTerraform(struct!.stoppingCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSpecification = this._appSpecification?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._experimentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentConfig = this._experimentConfig?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._processingInputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingInputs = this._processingInputs?.internalValue;
    }
    if (this._processingJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingJobName = this._processingJobName;
    }
    if (this._processingOutputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingOutputConfig = this._processingOutputConfig?.internalValue;
    }
    if (this._processingResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingResources = this._processingResources?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appSpecification.internalValue = undefined;
      this._environment = undefined;
      this._experimentConfig.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._processingInputs.internalValue = undefined;
      this._processingJobName = undefined;
      this._processingOutputConfig.internalValue = undefined;
      this._processingResources.internalValue = undefined;
      this._roleArn = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appSpecification.internalValue = value.appSpecification;
      this._environment = value.environment;
      this._experimentConfig.internalValue = value.experimentConfig;
      this._networkConfig.internalValue = value.networkConfig;
      this._processingInputs.internalValue = value.processingInputs;
      this._processingJobName = value.processingJobName;
      this._processingOutputConfig.internalValue = value.processingOutputConfig;
      this._processingResources.internalValue = value.processingResources;
      this._roleArn = value.roleArn;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tags.internalValue = value.tags;
    }
  }

  // app_specification - computed: false, optional: false, required: true
  private _appSpecification = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecificationOutputReference(this, "app_specification");
  public get appSpecification() {
    return this._appSpecification;
  }
  public putAppSpecification(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecAppSpecification) {
    this._appSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSpecificationInput() {
    return this._appSpecification.internalValue;
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
  private _experimentConfig = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfigOutputReference(this, "experiment_config");
  public get experimentConfig() {
    return this._experimentConfig;
  }
  public putExperimentConfig(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecExperimentConfig) {
    this._experimentConfig.internalValue = value;
  }
  public resetExperimentConfig() {
    this._experimentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentConfigInput() {
    return this._experimentConfig.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // processing_inputs - computed: false, optional: true, required: false
  private _processingInputs = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputsList(this, "processing_inputs", false);
  public get processingInputs() {
    return this._processingInputs;
  }
  public putProcessingInputs(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingInputs[] | cdktf.IResolvable) {
    this._processingInputs.internalValue = value;
  }
  public resetProcessingInputs() {
    this._processingInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInputsInput() {
    return this._processingInputs.internalValue;
  }

  // processing_job_name - computed: false, optional: false, required: true
  private _processingJobName?: string; 
  public get processingJobName() {
    return this.getStringAttribute('processing_job_name');
  }
  public set processingJobName(value: string) {
    this._processingJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingJobNameInput() {
    return this._processingJobName;
  }

  // processing_output_config - computed: false, optional: true, required: false
  private _processingOutputConfig = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfigOutputReference(this, "processing_output_config");
  public get processingOutputConfig() {
    return this._processingOutputConfig;
  }
  public putProcessingOutputConfig(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingOutputConfig) {
    this._processingOutputConfig.internalValue = value;
  }
  public resetProcessingOutputConfig() {
    this._processingOutputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingOutputConfigInput() {
    return this._processingOutputConfig.internalValue;
  }

  // processing_resources - computed: false, optional: false, required: true
  private _processingResources = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResourcesOutputReference(this, "processing_resources");
  public get processingResources() {
    return this._processingResources;
  }
  public putProcessingResources(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecProcessingResources) {
    this._processingResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingResourcesInput() {
    return this._processingResources.internalValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecStoppingCondition) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_processing_job_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsProcessingJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
