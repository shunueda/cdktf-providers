// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata;
  /**
  * TrainingJobSpec defines the desired state of TrainingJob. Contains information about a training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#regex DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#algorithm_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#enable_sage_maker_metrics_time_series DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#enable_sage_maker_metrics_time_series}
  */
  readonly enableSageMakerMetricsTimeSeries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#metric_definitions DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#metric_definitions}
  */
  readonly metricDefinitions?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#training_image DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#training_image}
  */
  readonly trainingImage?: string;
  /**
  * The training input mode that the algorithm supports. For more information about input modes, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). Pipe mode If an algorithm supports Pipe mode, Amazon SageMaker streams data directly from Amazon S3 to the container. File mode If an algorithm supports File mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container. You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any. For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training. FastFile mode If an algorithm supports FastFile mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk. FastFile mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#training_input_mode DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#training_input_mode}
  */
  readonly trainingInputMode?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_name: cdktf.stringToTerraform(struct!.algorithmName),
    enable_sage_maker_metrics_time_series: cdktf.booleanToTerraform(struct!.enableSageMakerMetricsTimeSeries),
    metric_definitions: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsToTerraform, false)(struct!.metricDefinitions),
    training_image: cdktf.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktf.stringToTerraform(struct!.trainingInputMode),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification | cdktf.IResolvable): any {
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
    enable_sage_maker_metrics_time_series: {
      value: cdktf.booleanToHclTerraform(struct!.enableSageMakerMetricsTimeSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_definitions: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsToHclTerraform, false)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsList",
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._enableSageMakerMetricsTimeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSageMakerMetricsTimeSeries = this._enableSageMakerMetricsTimeSeries;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._enableSageMakerMetricsTimeSeries = undefined;
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
      this._enableSageMakerMetricsTimeSeries = value.enableSageMakerMetricsTimeSeries;
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

  // enable_sage_maker_metrics_time_series - computed: false, optional: true, required: false
  private _enableSageMakerMetricsTimeSeries?: boolean | cdktf.IResolvable; 
  public get enableSageMakerMetricsTimeSeries() {
    return this.getBooleanAttribute('enable_sage_maker_metrics_time_series');
  }
  public set enableSageMakerMetricsTimeSeries(value: boolean | cdktf.IResolvable) {
    this._enableSageMakerMetricsTimeSeries = value;
  }
  public resetEnableSageMakerMetricsTimeSeries() {
    this._enableSageMakerMetricsTimeSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSageMakerMetricsTimeSeriesInput() {
    return this._enableSageMakerMetricsTimeSeries;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationMetricDefinitions[] | cdktf.IResolvable) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#collection_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#collection_parameters DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#collection_parameters}
  */
  readonly collectionParameters?: { [key: string]: string };
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktf.stringToTerraform(struct!.collectionName),
    collection_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.collectionParameters),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_name: {
      value: cdktf.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collection_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.collectionParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._collectionParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionParameters = this._collectionParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._collectionParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._collectionParameters = value.collectionParameters;
    }
  }

  // collection_name - computed: false, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // collection_parameters - computed: false, optional: true, required: false
  private _collectionParameters?: { [key: string]: string }; 
  public get collectionParameters() {
    return this.getStringMapAttribute('collection_parameters');
  }
  public set collectionParameters(value: { [key: string]: string }) {
    this._collectionParameters = value;
  }
  public resetCollectionParameters() {
    this._collectionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionParametersInput() {
    return this._collectionParameters;
  }
}

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#collection_configurations DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#collection_configurations}
  */
  readonly collectionConfigurations?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#hook_parameters DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#hook_parameters}
  */
  readonly hookParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_configurations: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsToTerraform, false)(struct!.collectionConfigurations),
    hook_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hookParameters),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_configurations: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsToHclTerraform, false)(struct!.collectionConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsList",
    },
    hook_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hookParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionConfigurations = this._collectionConfigurations?.internalValue;
    }
    if (this._hookParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookParameters = this._hookParameters;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionConfigurations.internalValue = undefined;
      this._hookParameters = undefined;
      this._localPath = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionConfigurations.internalValue = value.collectionConfigurations;
      this._hookParameters = value.hookParameters;
      this._localPath = value.localPath;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // collection_configurations - computed: false, optional: true, required: false
  private _collectionConfigurations = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurationsList(this, "collection_configurations", false);
  public get collectionConfigurations() {
    return this._collectionConfigurations;
  }
  public putCollectionConfigurations(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigCollectionConfigurations[] | cdktf.IResolvable) {
    this._collectionConfigurations.internalValue = value;
  }
  public resetCollectionConfigurations() {
    this._collectionConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionConfigurationsInput() {
    return this._collectionConfigurations.internalValue;
  }

  // hook_parameters - computed: false, optional: true, required: false
  private _hookParameters?: { [key: string]: string }; 
  public get hookParameters() {
    return this.getStringMapAttribute('hook_parameters');
  }
  public set hookParameters(value: { [key: string]: string }) {
    this._hookParameters = value;
  }
  public resetHookParameters() {
    this._hookParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookParametersInput() {
    return this._hookParameters;
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#rule_configuration_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#rule_configuration_name}
  */
  readonly ruleConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#rule_evaluator_image DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#rule_evaluator_image}
  */
  readonly ruleEvaluatorImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#rule_parameters DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#rule_parameters}
  */
  readonly ruleParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    rule_configuration_name: cdktf.stringToTerraform(struct!.ruleConfigurationName),
    rule_evaluator_image: cdktf.stringToTerraform(struct!.ruleEvaluatorImage),
    rule_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ruleParameters),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
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
    rule_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_evaluator_image: {
      value: cdktf.stringToHclTerraform(struct!.ruleEvaluatorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ruleParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._ruleConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConfigurationName = this._ruleConfigurationName;
    }
    if (this._ruleEvaluatorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEvaluatorImage = this._ruleEvaluatorImage;
    }
    if (this._ruleParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleParameters = this._ruleParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._localPath = undefined;
      this._ruleConfigurationName = undefined;
      this._ruleEvaluatorImage = undefined;
      this._ruleParameters = undefined;
      this._s3OutputPath = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._localPath = value.localPath;
      this._ruleConfigurationName = value.ruleConfigurationName;
      this._ruleEvaluatorImage = value.ruleEvaluatorImage;
      this._ruleParameters = value.ruleParameters;
      this._s3OutputPath = value.s3OutputPath;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
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

  // rule_configuration_name - computed: false, optional: true, required: false
  private _ruleConfigurationName?: string; 
  public get ruleConfigurationName() {
    return this.getStringAttribute('rule_configuration_name');
  }
  public set ruleConfigurationName(value: string) {
    this._ruleConfigurationName = value;
  }
  public resetRuleConfigurationName() {
    this._ruleConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigurationNameInput() {
    return this._ruleConfigurationName;
  }

  // rule_evaluator_image - computed: false, optional: true, required: false
  private _ruleEvaluatorImage?: string; 
  public get ruleEvaluatorImage() {
    return this.getStringAttribute('rule_evaluator_image');
  }
  public set ruleEvaluatorImage(value: string) {
    this._ruleEvaluatorImage = value;
  }
  public resetRuleEvaluatorImage() {
    this._ruleEvaluatorImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEvaluatorImageInput() {
    return this._ruleEvaluatorImage;
  }

  // rule_parameters - computed: false, optional: true, required: false
  private _ruleParameters?: { [key: string]: string }; 
  public get ruleParameters() {
    return this.getStringMapAttribute('rule_parameters');
  }
  public set ruleParameters(value: { [key: string]: string }) {
    this._ruleParameters = value;
  }
  public resetRuleParameters() {
    this._ruleParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleParametersInput() {
    return this._ruleParameters;
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#experiment_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#experiment_name}
  */
  readonly experimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#trial_component_display_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#trial_component_display_name}
  */
  readonly trialComponentDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#trial_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#trial_name}
  */
  readonly trialName?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#enable_infra_check DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#enable_infra_check}
  */
  readonly enableInfraCheck?: boolean | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_infra_check: cdktf.booleanToTerraform(struct!.enableInfraCheck),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_infra_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableInfraCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInfraCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInfraCheck = this._enableInfraCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInfraCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInfraCheck = value.enableInfraCheck;
    }
  }

  // enable_infra_check - computed: false, optional: true, required: false
  private _enableInfraCheck?: boolean | cdktf.IResolvable; 
  public get enableInfraCheck() {
    return this.getBooleanAttribute('enable_infra_check');
  }
  public set enableInfraCheck(value: boolean | cdktf.IResolvable) {
    this._enableInfraCheck = value;
  }
  public resetEnableInfraCheck() {
    this._enableInfraCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInfraCheckInput() {
    return this._enableInfraCheck;
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#directory_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#directory_path}
  */
  readonly directoryPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#file_system_access_mode DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#file_system_access_mode}
  */
  readonly fileSystemAccessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#file_system_id DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#file_system_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#file_system_type}
  */
  readonly fileSystemType?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#attribute_names DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_group_names DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_data_distribution_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource {
  /**
  * Specifies a file system data source for a channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#file_system_data_source DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#file_system_data_source}
  */
  readonly fileSystemDataSource?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource;
  /**
  * Describes the S3 data source. Your input bucket must be in the same Amazon Web Services region as your training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_data_source DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_data_source}
  */
  readonly s3DataSource?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_data_source: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct!.fileSystemDataSource),
    s3_data_source: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_data_source: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct!.fileSystemDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource",
    },
    s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource | cdktf.IResolvable | undefined) {
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
  private _fileSystemDataSource = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSourceOutputReference(this, "file_system_data_source");
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceFileSystemDataSource) {
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
  private _s3DataSource = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceS3DataSource) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#seed DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#seed}
  */
  readonly seed?: number;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed: cdktf.numberToTerraform(struct!.seed),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#channel_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Describes the location of the channel data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#data_source DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource;
  /**
  * The training input mode that the algorithm supports. For more information about input modes, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). Pipe mode If an algorithm supports Pipe mode, Amazon SageMaker streams data directly from Amazon S3 to the container. File mode If an algorithm supports File mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container. You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any. For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training. FastFile mode If an algorithm supports FastFile mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk. FastFile mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#input_mode DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#record_wrapper_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * A configuration for a shuffle option for input data in a channel. If you use S3Prefix for S3DataType, the results of the S3 key prefix matches are shuffled. If you use ManifestFile, the order of the S3 object references in the ManifestFile is shuffled. If you use AugmentedManifestFile, the order of the JSON lines in the AugmentedManifestFile is shuffled. The shuffling order is determined using the Seed value. For Pipe input mode, when ShuffleConfig is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when ShuffleConfig is combined with S3DataDistributionType of ShardedByS3Key, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#shuffle_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#shuffle_config}
  */
  readonly shuffleConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    data_source: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceToTerraform(struct!.dataSource),
    input_mode: cdktf.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktf.stringToTerraform(struct!.recordWrapperType),
    shuffle_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfigToTerraform(struct!.shuffleConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig | cdktf.IResolvable): any {
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
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource",
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
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfigToHclTerraform(struct!.shuffleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigDataSource) {
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
  private _shuffleConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfigOutputReference(this, "shuffle_config");
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigShuffleConfig) {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#profiling_interval_in_milliseconds DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#profiling_interval_in_milliseconds}
  */
  readonly profilingIntervalInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#profiling_parameters DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#profiling_parameters}
  */
  readonly profilingParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiling_interval_in_milliseconds: cdktf.numberToTerraform(struct!.profilingIntervalInMilliseconds),
    profiling_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.profilingParameters),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profiling_interval_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.profilingIntervalInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiling_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.profilingParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profilingIntervalInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingIntervalInMilliseconds = this._profilingIntervalInMilliseconds;
    }
    if (this._profilingParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingParameters = this._profilingParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profilingIntervalInMilliseconds = undefined;
      this._profilingParameters = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profilingIntervalInMilliseconds = value.profilingIntervalInMilliseconds;
      this._profilingParameters = value.profilingParameters;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // profiling_interval_in_milliseconds - computed: false, optional: true, required: false
  private _profilingIntervalInMilliseconds?: number; 
  public get profilingIntervalInMilliseconds() {
    return this.getNumberAttribute('profiling_interval_in_milliseconds');
  }
  public set profilingIntervalInMilliseconds(value: number) {
    this._profilingIntervalInMilliseconds = value;
  }
  public resetProfilingIntervalInMilliseconds() {
    this._profilingIntervalInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingIntervalInMillisecondsInput() {
    return this._profilingIntervalInMilliseconds;
  }

  // profiling_parameters - computed: false, optional: true, required: false
  private _profilingParameters?: { [key: string]: string }; 
  public get profilingParameters() {
    return this.getStringMapAttribute('profiling_parameters');
  }
  public set profilingParameters(value: { [key: string]: string }) {
    this._profilingParameters = value;
  }
  public resetProfilingParameters() {
    this._profilingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingParametersInput() {
    return this._profilingParameters;
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#rule_configuration_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#rule_configuration_name}
  */
  readonly ruleConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#rule_evaluator_image DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#rule_evaluator_image}
  */
  readonly ruleEvaluatorImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#rule_parameters DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#rule_parameters}
  */
  readonly ruleParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    rule_configuration_name: cdktf.stringToTerraform(struct!.ruleConfigurationName),
    rule_evaluator_image: cdktf.stringToTerraform(struct!.ruleEvaluatorImage),
    rule_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ruleParameters),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
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
    rule_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_evaluator_image: {
      value: cdktf.stringToHclTerraform(struct!.ruleEvaluatorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ruleParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._ruleConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConfigurationName = this._ruleConfigurationName;
    }
    if (this._ruleEvaluatorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEvaluatorImage = this._ruleEvaluatorImage;
    }
    if (this._ruleParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleParameters = this._ruleParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._localPath = undefined;
      this._ruleConfigurationName = undefined;
      this._ruleEvaluatorImage = undefined;
      this._ruleParameters = undefined;
      this._s3OutputPath = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._localPath = value.localPath;
      this._ruleConfigurationName = value.ruleConfigurationName;
      this._ruleEvaluatorImage = value.ruleEvaluatorImage;
      this._ruleParameters = value.ruleParameters;
      this._s3OutputPath = value.s3OutputPath;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
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

  // rule_configuration_name - computed: false, optional: true, required: false
  private _ruleConfigurationName?: string; 
  public get ruleConfigurationName() {
    return this.getStringAttribute('rule_configuration_name');
  }
  public set ruleConfigurationName(value: string) {
    this._ruleConfigurationName = value;
  }
  public resetRuleConfigurationName() {
    this._ruleConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigurationNameInput() {
    return this._ruleConfigurationName;
  }

  // rule_evaluator_image - computed: false, optional: true, required: false
  private _ruleEvaluatorImage?: string; 
  public get ruleEvaluatorImage() {
    return this.getStringAttribute('rule_evaluator_image');
  }
  public set ruleEvaluatorImage(value: string) {
    this._ruleEvaluatorImage = value;
  }
  public resetRuleEvaluatorImage() {
    this._ruleEvaluatorImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEvaluatorImageInput() {
    return this._ruleEvaluatorImage;
  }

  // rule_parameters - computed: false, optional: true, required: false
  private _ruleParameters?: { [key: string]: string }; 
  public get ruleParameters() {
    return this.getStringMapAttribute('rule_parameters');
  }
  public set ruleParameters(value: { [key: string]: string }) {
    this._ruleParameters = value;
  }
  public resetRuleParameters() {
    this._ruleParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleParametersInput() {
    return this._ruleParameters;
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#enable_remote_debug DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#enable_remote_debug}
  */
  readonly enableRemoteDebug?: boolean | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_remote_debug: cdktf.booleanToTerraform(struct!.enableRemoteDebug),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_remote_debug: {
      value: cdktf.booleanToHclTerraform(struct!.enableRemoteDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRemoteDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteDebug = this._enableRemoteDebug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRemoteDebug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRemoteDebug = value.enableRemoteDebug;
    }
  }

  // enable_remote_debug - computed: false, optional: true, required: false
  private _enableRemoteDebug?: boolean | cdktf.IResolvable; 
  public get enableRemoteDebug() {
    return this.getBooleanAttribute('enable_remote_debug');
  }
  public set enableRemoteDebug(value: boolean | cdktf.IResolvable) {
    this._enableRemoteDebug = value;
  }
  public resetEnableRemoteDebug() {
    this._enableRemoteDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteDebugInput() {
    return this._enableRemoteDebug;
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_group_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_group_name}
  */
  readonly instanceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_groups DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_groups}
  */
  readonly instanceGroups?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Optional. Customer requested period in seconds for which the Training cluster is kept alive after the job is finished.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#keep_alive_period_in_seconds DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_groups: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsToTerraform, false)(struct!.instanceGroups),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktf.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsToHclTerraform, false)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsList",
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig | cdktf.IResolvable | undefined) {
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
  private _instanceGroups = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigInstanceGroups[] | cdktf.IResolvable) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#maximum_retry_attempts DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategyToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategyToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition {
  /**
  * Maximum job scheduler pending time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#max_pending_time_in_seconds DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#max_runtime_in_seconds DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#max_wait_time_in_seconds DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingConditionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingConditionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3OutputPath = value.s3OutputPath;
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec {
  /**
  * The registry path of the Docker image that contains the training algorithm and algorithm-specific metadata, including the input mode. For more information about algorithms provided by SageMaker, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). For information about providing your own algorithms, see Using Your Own Algorithms with Amazon SageMaker (https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#algorithm_specification DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#algorithm_specification}
  */
  readonly algorithmSpecification: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification;
  /**
  * Contains information about the output location for managed spot training checkpoint data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#checkpoint_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#checkpoint_config}
  */
  readonly checkpointConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig;
  /**
  * Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the DebugHookConfig parameter, see Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job (https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#debug_hook_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#debug_hook_config}
  */
  readonly debugHookConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig;
  /**
  * Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#debug_rule_configurations DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#debug_rule_configurations}
  */
  readonly debugRuleConfigurations?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations[] | cdktf.IResolvable;
  /**
  * To encrypt all communications between ML compute instances in distributed training, choose True. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training. For more information, see Protect Communications Between ML Compute Instances in a Distributed Training Job (https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#enable_inter_container_traffic_encryption DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * To train models using managed spot training, choose True. Managed spot training provides a fully managed and scalable infrastructure for training machine learning models. this option is useful when training jobs can be interrupted and when there is flexibility when the training job is run. The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be used as a starting point to train models incrementally. Amazon SageMaker provides metrics and logs in CloudWatch. They can be used to see when managed spot training jobs are running, interrupted, resumed, or completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#enable_managed_spot_training DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktf.IResolvable;
  /**
  * Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * The environment variables to set in the Docker container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs: * CreateProcessingJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html) * CreateTrainingJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html) * CreateTransformJob (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#experiment_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#experiment_config}
  */
  readonly experimentConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig;
  /**
  * Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see Algorithms (https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). You can specify a maximum of 100 hyperparameters. Each hyperparameter is a key-value pair. Each key and value is limited to 256 characters, as specified by the Length Constraint. Do not include any security-sensitive information including account access IDs, secrets or tokens in any hyperparameter field. If the use of security-sensitive credentials are detected, SageMaker will reject your training job request and return an exception error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#hyper_parameters DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#hyper_parameters}
  */
  readonly hyperParameters?: { [key: string]: string };
  /**
  * Contains information about the infrastructure health check configuration for the training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#infra_check_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#infra_check_config}
  */
  readonly infraCheckConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig;
  /**
  * An array of Channel objects. Each channel is a named input source. InputDataConfig describes the input data and its location. Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, training_data and validation_data. The configuration for each channel provides the S3, EFS, or FSx location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format. Depending on the input mode that the algorithm supports, SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. For example, if you specify an EFS location, input data files are available as input streams. They do not need to be downloaded. Your input must be in the same Amazon Web Services region as your training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#input_data_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#input_data_config}
  */
  readonly inputDataConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig[] | cdktf.IResolvable;
  /**
  * Specifies the path to the S3 location where you want to store model artifacts. SageMaker creates subfolders for the artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#output_data_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#output_data_config}
  */
  readonly outputDataConfig: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig;
  /**
  * Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#profiler_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#profiler_config}
  */
  readonly profilerConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig;
  /**
  * Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#profiler_rule_configurations DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#profiler_rule_configurations}
  */
  readonly profilerRuleConfigurations?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations[] | cdktf.IResolvable;
  /**
  * Configuration for remote debugging. To learn more about the remote debugging functionality of SageMaker, see Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging (https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#remote_debug_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#remote_debug_config}
  */
  readonly remoteDebugConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig;
  /**
  * The resources, including the ML compute instances and ML storage volumes, to use for model training. ML storage volumes store model artifacts and incremental states. Training algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use the ML storage volume to store the training data, choose File as the TrainingInputMode in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#resource_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#resource_config}
  */
  readonly resourceConfig: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig;
  /**
  * The number of times to retry the job when the job fails due to an InternalServerError.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#retry_strategy DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#retry_strategy}
  */
  readonly retryStrategy?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform tasks on your behalf. During model training, SageMaker needs your permission to read input data from an S3 bucket, download a Docker image that contains training code, write model artifacts to an S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant permissions for all of these tasks to an IAM role. For more information, see SageMaker Roles (https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html). To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#role_arn DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * Specifies a limit to how long a model training job can run. It also specifies how long a managed Spot training job has to complete. When the job reaches the time limit, SageMaker ends the training job. Use this API to cap model training costs. To stop a job, SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#stopping_condition DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#stopping_condition}
  */
  readonly stoppingCondition: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition;
  /**
  * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#tensor_board_output_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#tensor_board_output_config}
  */
  readonly tensorBoardOutputConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig;
  /**
  * The name of the training job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#training_job_name DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#training_job_name}
  */
  readonly trainingJobName: string;
  /**
  * A VpcConfig (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that you want your training job to connect to. Control access to and from your training container by configuring the VPC. For more information, see Protect Training Jobs by Using an Amazon Virtual Private Cloud (https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_specification: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationToTerraform(struct!.algorithmSpecification),
    checkpoint_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfigToTerraform(struct!.checkpointConfig),
    debug_hook_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigToTerraform(struct!.debugHookConfig),
    debug_rule_configurations: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsToTerraform, false)(struct!.debugRuleConfigurations),
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_managed_spot_training: cdktf.booleanToTerraform(struct!.enableManagedSpotTraining),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    experiment_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfigToTerraform(struct!.experimentConfig),
    hyper_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hyperParameters),
    infra_check_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfigToTerraform(struct!.infraCheckConfig),
    input_data_config: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigToTerraform, false)(struct!.inputDataConfig),
    output_data_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfigToTerraform(struct!.outputDataConfig),
    profiler_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfigToTerraform(struct!.profilerConfig),
    profiler_rule_configurations: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsToTerraform, false)(struct!.profilerRuleConfigurations),
    remote_debug_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfigToTerraform(struct!.remoteDebugConfig),
    resource_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigToTerraform(struct!.resourceConfig),
    retry_strategy: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategyToTerraform(struct!.retryStrategy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stopping_condition: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingConditionToTerraform(struct!.stoppingCondition),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    tensor_board_output_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfigToTerraform(struct!.tensorBoardOutputConfig),
    training_job_name: cdktf.stringToTerraform(struct!.trainingJobName),
    vpc_config: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_specification: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationToHclTerraform(struct!.algorithmSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification",
    },
    checkpoint_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfigToHclTerraform(struct!.checkpointConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig",
    },
    debug_hook_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigToHclTerraform(struct!.debugHookConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig",
    },
    debug_rule_configurations: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsToHclTerraform, false)(struct!.debugRuleConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsList",
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
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    experiment_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfigToHclTerraform(struct!.experimentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig",
    },
    hyper_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    infra_check_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfigToHclTerraform(struct!.infraCheckConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig",
    },
    input_data_config: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigToHclTerraform, false)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigList",
    },
    output_data_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfigToHclTerraform(struct!.outputDataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig",
    },
    profiler_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfigToHclTerraform(struct!.profilerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig",
    },
    profiler_rule_configurations: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsToHclTerraform, false)(struct!.profilerRuleConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsList",
    },
    remote_debug_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfigToHclTerraform(struct!.remoteDebugConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig",
    },
    resource_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigToHclTerraform(struct!.resourceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig",
    },
    retry_strategy: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategyToHclTerraform(struct!.retryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stopping_condition: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingConditionToHclTerraform(struct!.stoppingCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsList",
    },
    tensor_board_output_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfigToHclTerraform(struct!.tensorBoardOutputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig",
    },
    training_job_name: {
      value: cdktf.stringToHclTerraform(struct!.trainingJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_config: {
      value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._debugHookConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugHookConfig = this._debugHookConfig?.internalValue;
    }
    if (this._debugRuleConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugRuleConfigurations = this._debugRuleConfigurations?.internalValue;
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
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._experimentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentConfig = this._experimentConfig?.internalValue;
    }
    if (this._hyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameters = this._hyperParameters;
    }
    if (this._infraCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraCheckConfig = this._infraCheckConfig?.internalValue;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._profilerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilerConfig = this._profilerConfig?.internalValue;
    }
    if (this._profilerRuleConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilerRuleConfigurations = this._profilerRuleConfigurations?.internalValue;
    }
    if (this._remoteDebugConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDebugConfig = this._remoteDebugConfig?.internalValue;
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
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._tensorBoardOutputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorBoardOutputConfig = this._tensorBoardOutputConfig?.internalValue;
    }
    if (this._trainingJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingJobName = this._trainingJobName;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmSpecification.internalValue = undefined;
      this._checkpointConfig.internalValue = undefined;
      this._debugHookConfig.internalValue = undefined;
      this._debugRuleConfigurations.internalValue = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableManagedSpotTraining = undefined;
      this._enableNetworkIsolation = undefined;
      this._environment = undefined;
      this._experimentConfig.internalValue = undefined;
      this._hyperParameters = undefined;
      this._infraCheckConfig.internalValue = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._profilerConfig.internalValue = undefined;
      this._profilerRuleConfigurations.internalValue = undefined;
      this._remoteDebugConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._retryStrategy.internalValue = undefined;
      this._roleArn = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._tensorBoardOutputConfig.internalValue = undefined;
      this._trainingJobName = undefined;
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
      this._debugHookConfig.internalValue = value.debugHookConfig;
      this._debugRuleConfigurations.internalValue = value.debugRuleConfigurations;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableManagedSpotTraining = value.enableManagedSpotTraining;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._environment = value.environment;
      this._experimentConfig.internalValue = value.experimentConfig;
      this._hyperParameters = value.hyperParameters;
      this._infraCheckConfig.internalValue = value.infraCheckConfig;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._profilerConfig.internalValue = value.profilerConfig;
      this._profilerRuleConfigurations.internalValue = value.profilerRuleConfigurations;
      this._remoteDebugConfig.internalValue = value.remoteDebugConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._retryStrategy.internalValue = value.retryStrategy;
      this._roleArn = value.roleArn;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tags.internalValue = value.tags;
      this._tensorBoardOutputConfig.internalValue = value.tensorBoardOutputConfig;
      this._trainingJobName = value.trainingJobName;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // algorithm_specification - computed: false, optional: false, required: true
  private _algorithmSpecification = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecificationOutputReference(this, "algorithm_specification");
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecAlgorithmSpecification) {
    this._algorithmSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfigOutputReference(this, "checkpoint_config");
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecCheckpointConfig) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // debug_hook_config - computed: false, optional: true, required: false
  private _debugHookConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfigOutputReference(this, "debug_hook_config");
  public get debugHookConfig() {
    return this._debugHookConfig;
  }
  public putDebugHookConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugHookConfig) {
    this._debugHookConfig.internalValue = value;
  }
  public resetDebugHookConfig() {
    this._debugHookConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugHookConfigInput() {
    return this._debugHookConfig.internalValue;
  }

  // debug_rule_configurations - computed: false, optional: true, required: false
  private _debugRuleConfigurations = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurationsList(this, "debug_rule_configurations", false);
  public get debugRuleConfigurations() {
    return this._debugRuleConfigurations;
  }
  public putDebugRuleConfigurations(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecDebugRuleConfigurations[] | cdktf.IResolvable) {
    this._debugRuleConfigurations.internalValue = value;
  }
  public resetDebugRuleConfigurations() {
    this._debugRuleConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugRuleConfigurationsInput() {
    return this._debugRuleConfigurations.internalValue;
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
  private _experimentConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfigOutputReference(this, "experiment_config");
  public get experimentConfig() {
    return this._experimentConfig;
  }
  public putExperimentConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecExperimentConfig) {
    this._experimentConfig.internalValue = value;
  }
  public resetExperimentConfig() {
    this._experimentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentConfigInput() {
    return this._experimentConfig.internalValue;
  }

  // hyper_parameters - computed: false, optional: true, required: false
  private _hyperParameters?: { [key: string]: string }; 
  public get hyperParameters() {
    return this.getStringMapAttribute('hyper_parameters');
  }
  public set hyperParameters(value: { [key: string]: string }) {
    this._hyperParameters = value;
  }
  public resetHyperParameters() {
    this._hyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParametersInput() {
    return this._hyperParameters;
  }

  // infra_check_config - computed: false, optional: true, required: false
  private _infraCheckConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfigOutputReference(this, "infra_check_config");
  public get infraCheckConfig() {
    return this._infraCheckConfig;
  }
  public putInfraCheckConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInfraCheckConfig) {
    this._infraCheckConfig.internalValue = value;
  }
  public resetInfraCheckConfig() {
    this._infraCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraCheckConfigInput() {
    return this._infraCheckConfig.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecInputDataConfig[] | cdktf.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: false, required: true
  private _outputDataConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfigOutputReference(this, "output_data_config");
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputDataConfig) {
    this._outputDataConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // profiler_config - computed: false, optional: true, required: false
  private _profilerConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfigOutputReference(this, "profiler_config");
  public get profilerConfig() {
    return this._profilerConfig;
  }
  public putProfilerConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerConfig) {
    this._profilerConfig.internalValue = value;
  }
  public resetProfilerConfig() {
    this._profilerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerConfigInput() {
    return this._profilerConfig.internalValue;
  }

  // profiler_rule_configurations - computed: false, optional: true, required: false
  private _profilerRuleConfigurations = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurationsList(this, "profiler_rule_configurations", false);
  public get profilerRuleConfigurations() {
    return this._profilerRuleConfigurations;
  }
  public putProfilerRuleConfigurations(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecProfilerRuleConfigurations[] | cdktf.IResolvable) {
    this._profilerRuleConfigurations.internalValue = value;
  }
  public resetProfilerRuleConfigurations() {
    this._profilerRuleConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerRuleConfigurationsInput() {
    return this._profilerRuleConfigurations.internalValue;
  }

  // remote_debug_config - computed: false, optional: true, required: false
  private _remoteDebugConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfigOutputReference(this, "remote_debug_config");
  public get remoteDebugConfig() {
    return this._remoteDebugConfig;
  }
  public putRemoteDebugConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRemoteDebugConfig) {
    this._remoteDebugConfig.internalValue = value;
  }
  public resetRemoteDebugConfig() {
    this._remoteDebugConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDebugConfigInput() {
    return this._remoteDebugConfig.internalValue;
  }

  // resource_config - computed: false, optional: false, required: true
  private _resourceConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfigOutputReference(this, "resource_config");
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecResourceConfig) {
    this._resourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
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

  // stopping_condition - computed: false, optional: false, required: true
  private _stoppingCondition = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecStoppingCondition) {
    this._stoppingCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tensor_board_output_config - computed: false, optional: true, required: false
  private _tensorBoardOutputConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfigOutputReference(this, "tensor_board_output_config");
  public get tensorBoardOutputConfig() {
    return this._tensorBoardOutputConfig;
  }
  public putTensorBoardOutputConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecTensorBoardOutputConfig) {
    this._tensorBoardOutputConfig.internalValue = value;
  }
  public resetTensorBoardOutputConfig() {
    this._tensorBoardOutputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardOutputConfigInput() {
    return this._tensorBoardOutputConfig.internalValue;
  }

  // training_job_name - computed: false, optional: false, required: true
  private _trainingJobName?: string; 
  public get trainingJobName() {
    return this.getStringAttribute('training_job_name');
  }
  public set trainingJobName(value: string) {
    this._trainingJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobNameInput() {
    return this._trainingJobName;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecVpcConfig) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_training_job_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_training_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_training_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_training_job_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_training_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_training_job_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsTrainingJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
