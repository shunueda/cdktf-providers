// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata;
  /**
  * ModelPackageSpec defines the desired state of ModelPackage. A versioned model that can be deployed for SageMaker inference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
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
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#data_input_config DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#data_input_config}
  */
  readonly dataInputConfig?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_input_config: cdktf.stringToTerraform(struct!.dataInputConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_input_config: {
      value: cdktf.stringToHclTerraform(struct!.dataInputConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataInputConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataInputConfig = this._dataInputConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataInputConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataInputConfig = value.dataInputConfig;
    }
  }

  // data_input_config - computed: false, optional: true, required: false
  private _dataInputConfig?: string; 
  public get dataInputConfig() {
    return this.getStringAttribute('data_input_config');
  }
  public set dataInputConfig(value: string) {
    this._dataInputConfig = value;
  }
  public resetDataInputConfig() {
    this._dataInputConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInputConfigInput() {
    return this._dataInputConfig;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers {
  /**
  * A data source used for training or inference that is in addition to the input dataset or model data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#additional_s3_data_source DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#additional_s3_data_source}
  */
  readonly additionalS3DataSource?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#container_hostname DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#framework DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#framework}
  */
  readonly framework?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#framework_version DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#framework_version}
  */
  readonly frameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#image DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#image_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_data_url DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Input object for the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_input DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_input}
  */
  readonly modelInput?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#nearest_model_name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#nearest_model_name}
  */
  readonly nearestModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#product_id DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#product_id}
  */
  readonly productId?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_s3_data_source: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSourceToTerraform(struct!.additionalS3DataSource),
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    framework: cdktf.stringToTerraform(struct!.framework),
    framework_version: cdktf.stringToTerraform(struct!.frameworkVersion),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    model_input: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInputToTerraform(struct!.modelInput),
    nearest_model_name: cdktf.stringToTerraform(struct!.nearestModelName),
    product_id: cdktf.stringToTerraform(struct!.productId),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSourceToHclTerraform(struct!.additionalS3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource",
    },
    container_hostname: {
      value: cdktf.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    framework: {
      value: cdktf.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framework_version: {
      value: cdktf.stringToHclTerraform(struct!.frameworkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktf.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_input: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInputToHclTerraform(struct!.modelInput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput",
    },
    nearest_model_name: {
      value: cdktf.stringToHclTerraform(struct!.nearestModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_id: {
      value: cdktf.stringToHclTerraform(struct!.productId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalS3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalS3DataSource = this._additionalS3DataSource?.internalValue;
    }
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._frameworkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameworkVersion = this._frameworkVersion;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelInput = this._modelInput?.internalValue;
    }
    if (this._nearestModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearestModelName = this._nearestModelName;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalS3DataSource.internalValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._framework = undefined;
      this._frameworkVersion = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._modelDataUrl = undefined;
      this._modelInput.internalValue = undefined;
      this._nearestModelName = undefined;
      this._productId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalS3DataSource.internalValue = value.additionalS3DataSource;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._framework = value.framework;
      this._frameworkVersion = value.frameworkVersion;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._modelDataUrl = value.modelDataUrl;
      this._modelInput.internalValue = value.modelInput;
      this._nearestModelName = value.nearestModelName;
      this._productId = value.productId;
    }
  }

  // additional_s3_data_source - computed: false, optional: true, required: false
  private _additionalS3DataSource = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSourceOutputReference(this, "additional_s3_data_source");
  public get additionalS3DataSource() {
    return this._additionalS3DataSource;
  }
  public putAdditionalS3DataSource(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersAdditionalS3DataSource) {
    this._additionalS3DataSource.internalValue = value;
  }
  public resetAdditionalS3DataSource() {
    this._additionalS3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalS3DataSourceInput() {
    return this._additionalS3DataSource.internalValue;
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
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

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // framework_version - computed: false, optional: true, required: false
  private _frameworkVersion?: string; 
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }
  public set frameworkVersion(value: string) {
    this._frameworkVersion = value;
  }
  public resetFrameworkVersion() {
    this._frameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkVersionInput() {
    return this._frameworkVersion;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: false, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_input - computed: false, optional: true, required: false
  private _modelInput = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }
  public putModelInput(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersModelInput) {
    this._modelInput.internalValue = value;
  }
  public resetModelInput() {
    this._modelInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInputInput() {
    return this._modelInput.internalValue;
  }

  // nearest_model_name - computed: false, optional: true, required: false
  private _nearestModelName?: string; 
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
  public set nearestModelName(value: string) {
    this._nearestModelName = value;
  }
  public resetNearestModelName() {
    this._nearestModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearestModelNameInput() {
    return this._nearestModelName;
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#containers DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#description DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_content_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_content_types}
  */
  readonly supportedContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_realtime_inference_instance_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_realtime_inference_instance_types}
  */
  readonly supportedRealtimeInferenceInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_response_mime_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_response_mime_types}
  */
  readonly supportedResponseMimeTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_transform_instance_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_transform_instance_types}
  */
  readonly supportedTransformInstanceTypes?: string[];
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersToTerraform, false)(struct!.containers),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    supported_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_realtime_inference_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
    supported_response_mime_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
    supported_transform_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    supported_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_realtime_inference_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_response_mime_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_transform_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._supportedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedContentTypes = this._supportedContentTypes;
    }
    if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
    }
    if (this._supportedResponseMimeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
    }
    if (this._supportedTransformInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._supportedContentTypes = undefined;
      this._supportedRealtimeInferenceInstanceTypes = undefined;
      this._supportedResponseMimeTypes = undefined;
      this._supportedTransformInstanceTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._description = value.description;
      this._name = value.name;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
      this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
      this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // supported_content_types - computed: false, optional: true, required: false
  private _supportedContentTypes?: string[]; 
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }
  public set supportedContentTypes(value: string[]) {
    this._supportedContentTypes = value;
  }
  public resetSupportedContentTypes() {
    this._supportedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentTypesInput() {
    return this._supportedContentTypes;
  }

  // supported_realtime_inference_instance_types - computed: false, optional: true, required: false
  private _supportedRealtimeInferenceInstanceTypes?: string[]; 
  public get supportedRealtimeInferenceInstanceTypes() {
    return this.getListAttribute('supported_realtime_inference_instance_types');
  }
  public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
    this._supportedRealtimeInferenceInstanceTypes = value;
  }
  public resetSupportedRealtimeInferenceInstanceTypes() {
    this._supportedRealtimeInferenceInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRealtimeInferenceInstanceTypesInput() {
    return this._supportedRealtimeInferenceInstanceTypes;
  }

  // supported_response_mime_types - computed: false, optional: true, required: false
  private _supportedResponseMimeTypes?: string[]; 
  public get supportedResponseMimeTypes() {
    return this.getListAttribute('supported_response_mime_types');
  }
  public set supportedResponseMimeTypes(value: string[]) {
    this._supportedResponseMimeTypes = value;
  }
  public resetSupportedResponseMimeTypes() {
    this._supportedResponseMimeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedResponseMimeTypesInput() {
    return this._supportedResponseMimeTypes;
  }

  // supported_transform_instance_types - computed: false, optional: true, required: false
  private _supportedTransformInstanceTypes?: string[]; 
  public get supportedTransformInstanceTypes() {
    return this.getListAttribute('supported_transform_instance_types');
  }
  public set supportedTransformInstanceTypes(value: string[]) {
    this._supportedTransformInstanceTypes = value;
  }
  public resetSupportedTransformInstanceTypes() {
    this._supportedTransformInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTransformInstanceTypesInput() {
    return this._supportedTransformInstanceTypes;
  }
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFileToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFileToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraintsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraintsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraintsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraintsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias {
  /**
  * Contains details regarding the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#config_file DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#config_file}
  */
  readonly configFile?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#post_training_constraints DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#post_training_constraints}
  */
  readonly postTrainingConstraints?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#pre_training_constraints DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#pre_training_constraints}
  */
  readonly preTrainingConstraints?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFileToTerraform(struct!.configFile),
    post_training_constraints: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraintsToTerraform(struct!.postTrainingConstraints),
    pre_training_constraints: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraintsToTerraform(struct!.preTrainingConstraints),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFileToHclTerraform(struct!.configFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile",
    },
    post_training_constraints: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraintsToHclTerraform(struct!.postTrainingConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints",
    },
    pre_training_constraints: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraintsToHclTerraform(struct!.preTrainingConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile?.internalValue;
    }
    if (this._postTrainingConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postTrainingConstraints = this._postTrainingConstraints?.internalValue;
    }
    if (this._preTrainingConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTrainingConstraints = this._preTrainingConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFile.internalValue = undefined;
      this._postTrainingConstraints.internalValue = undefined;
      this._preTrainingConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFile.internalValue = value.configFile;
      this._postTrainingConstraints.internalValue = value.postTrainingConstraints;
      this._preTrainingConstraints.internalValue = value.preTrainingConstraints;
    }
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFileOutputReference(this, "config_file");
  public get configFile() {
    return this._configFile;
  }
  public putConfigFile(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasConfigFile) {
    this._configFile.internalValue = value;
  }
  public resetConfigFile() {
    this._configFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile.internalValue;
  }

  // post_training_constraints - computed: false, optional: true, required: false
  private _postTrainingConstraints = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraintsOutputReference(this, "post_training_constraints");
  public get postTrainingConstraints() {
    return this._postTrainingConstraints;
  }
  public putPostTrainingConstraints(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPostTrainingConstraints) {
    this._postTrainingConstraints.internalValue = value;
  }
  public resetPostTrainingConstraints() {
    this._postTrainingConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTrainingConstraintsInput() {
    return this._postTrainingConstraints.internalValue;
  }

  // pre_training_constraints - computed: false, optional: true, required: false
  private _preTrainingConstraints = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraintsOutputReference(this, "pre_training_constraints");
  public get preTrainingConstraints() {
    return this._preTrainingConstraints;
  }
  public putPreTrainingConstraints(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasPreTrainingConstraints) {
    this._preTrainingConstraints.internalValue = value;
  }
  public resetPreTrainingConstraints() {
    this._preTrainingConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTrainingConstraintsInput() {
    return this._preTrainingConstraints.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFileToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFileToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraintsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraintsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability {
  /**
  * Contains details regarding the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#config_file DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#config_file}
  */
  readonly configFile?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#constraints DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#constraints}
  */
  readonly constraints?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFileToTerraform(struct!.configFile),
    constraints: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraintsToTerraform(struct!.constraints),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFileToHclTerraform(struct!.configFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile",
    },
    constraints: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile?.internalValue;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFile.internalValue = undefined;
      this._constraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFile.internalValue = value.configFile;
      this._constraints.internalValue = value.constraints;
    }
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFileOutputReference(this, "config_file");
  public get configFile() {
    return this._configFile;
  }
  public putConfigFile(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConfigFile) {
    this._configFile.internalValue = value;
  }
  public resetConfigFile() {
    this._configFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraintsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraintsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatisticsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatisticsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality {
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#constraints DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#constraints}
  */
  readonly constraints?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#statistics DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#statistics}
  */
  readonly statistics?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraintsToTerraform(struct!.constraints),
    statistics: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints",
    },
    statistics: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraintsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraintsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatisticsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatisticsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality {
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#constraints DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#constraints}
  */
  readonly constraints?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#statistics DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#statistics}
  */
  readonly statistics?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraintsToTerraform(struct!.constraints),
    statistics: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints",
    },
    statistics: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines {
  /**
  * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#bias DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#bias}
  */
  readonly bias?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias;
  /**
  * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#explainability DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#explainability}
  */
  readonly explainability?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability;
  /**
  * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_data_quality DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_data_quality}
  */
  readonly modelDataQuality?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality;
  /**
  * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_quality DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_quality}
  */
  readonly modelQuality?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bias: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasToTerraform(struct!.bias),
    explainability: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityToTerraform(struct!.explainability),
    model_data_quality: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityToTerraform(struct!.modelDataQuality),
    model_quality: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityToTerraform(struct!.modelQuality),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bias: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasToHclTerraform(struct!.bias),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias",
    },
    explainability: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityToHclTerraform(struct!.explainability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability",
    },
    model_data_quality: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityToHclTerraform(struct!.modelDataQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality",
    },
    model_quality: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityToHclTerraform(struct!.modelQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bias = this._bias?.internalValue;
    }
    if (this._explainability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explainability = this._explainability?.internalValue;
    }
    if (this._modelDataQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataQuality = this._modelDataQuality?.internalValue;
    }
    if (this._modelQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelQuality = this._modelQuality?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bias.internalValue = undefined;
      this._explainability.internalValue = undefined;
      this._modelDataQuality.internalValue = undefined;
      this._modelQuality.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bias.internalValue = value.bias;
      this._explainability.internalValue = value.explainability;
      this._modelDataQuality.internalValue = value.modelDataQuality;
      this._modelQuality.internalValue = value.modelQuality;
    }
  }

  // bias - computed: false, optional: true, required: false
  private _bias = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBiasOutputReference(this, "bias");
  public get bias() {
    return this._bias;
  }
  public putBias(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesBias) {
    this._bias.internalValue = value;
  }
  public resetBias() {
    this._bias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biasInput() {
    return this._bias.internalValue;
  }

  // explainability - computed: false, optional: true, required: false
  private _explainability = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainabilityOutputReference(this, "explainability");
  public get explainability() {
    return this._explainability;
  }
  public putExplainability(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesExplainability) {
    this._explainability.internalValue = value;
  }
  public resetExplainability() {
    this._explainability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainabilityInput() {
    return this._explainability.internalValue;
  }

  // model_data_quality - computed: false, optional: true, required: false
  private _modelDataQuality = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQualityOutputReference(this, "model_data_quality");
  public get modelDataQuality() {
    return this._modelDataQuality;
  }
  public putModelDataQuality(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelDataQuality) {
    this._modelDataQuality.internalValue = value;
  }
  public resetModelDataQuality() {
    this._modelDataQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataQualityInput() {
    return this._modelDataQuality.internalValue;
  }

  // model_quality - computed: false, optional: true, required: false
  private _modelQuality = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQualityOutputReference(this, "model_quality");
  public get modelQuality() {
    return this._modelQuality;
  }
  public putModelQuality(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesModelQuality) {
    this._modelQuality.internalValue = value;
  }
  public resetModelQuality() {
    this._modelQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityInput() {
    return this._modelQuality.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
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
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#data_input_config DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#data_input_config}
  */
  readonly dataInputConfig?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_input_config: cdktf.stringToTerraform(struct!.dataInputConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_input_config: {
      value: cdktf.stringToHclTerraform(struct!.dataInputConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataInputConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataInputConfig = this._dataInputConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataInputConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataInputConfig = value.dataInputConfig;
    }
  }

  // data_input_config - computed: false, optional: true, required: false
  private _dataInputConfig?: string; 
  public get dataInputConfig() {
    return this.getStringAttribute('data_input_config');
  }
  public set dataInputConfig(value: string) {
    this._dataInputConfig = value;
  }
  public resetDataInputConfig() {
    this._dataInputConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInputConfigInput() {
    return this._dataInputConfig;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers {
  /**
  * A data source used for training or inference that is in addition to the input dataset or model data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#additional_s3_data_source DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#additional_s3_data_source}
  */
  readonly additionalS3DataSource?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#container_hostname DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#framework DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#framework}
  */
  readonly framework?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#framework_version DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#framework_version}
  */
  readonly frameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#image DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#image_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_data_url DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Input object for the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_input DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_input}
  */
  readonly modelInput?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#nearest_model_name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#nearest_model_name}
  */
  readonly nearestModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#product_id DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#product_id}
  */
  readonly productId?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_s3_data_source: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSourceToTerraform(struct!.additionalS3DataSource),
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    framework: cdktf.stringToTerraform(struct!.framework),
    framework_version: cdktf.stringToTerraform(struct!.frameworkVersion),
    image: cdktf.stringToTerraform(struct!.image),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    model_input: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInputToTerraform(struct!.modelInput),
    nearest_model_name: cdktf.stringToTerraform(struct!.nearestModelName),
    product_id: cdktf.stringToTerraform(struct!.productId),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSourceToHclTerraform(struct!.additionalS3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource",
    },
    container_hostname: {
      value: cdktf.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    framework: {
      value: cdktf.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framework_version: {
      value: cdktf.stringToHclTerraform(struct!.frameworkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktf.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_input: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInputToHclTerraform(struct!.modelInput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput",
    },
    nearest_model_name: {
      value: cdktf.stringToHclTerraform(struct!.nearestModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_id: {
      value: cdktf.stringToHclTerraform(struct!.productId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalS3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalS3DataSource = this._additionalS3DataSource?.internalValue;
    }
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._frameworkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameworkVersion = this._frameworkVersion;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelInput = this._modelInput?.internalValue;
    }
    if (this._nearestModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearestModelName = this._nearestModelName;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalS3DataSource.internalValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._framework = undefined;
      this._frameworkVersion = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._modelDataUrl = undefined;
      this._modelInput.internalValue = undefined;
      this._nearestModelName = undefined;
      this._productId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalS3DataSource.internalValue = value.additionalS3DataSource;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._framework = value.framework;
      this._frameworkVersion = value.frameworkVersion;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._modelDataUrl = value.modelDataUrl;
      this._modelInput.internalValue = value.modelInput;
      this._nearestModelName = value.nearestModelName;
      this._productId = value.productId;
    }
  }

  // additional_s3_data_source - computed: false, optional: true, required: false
  private _additionalS3DataSource = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSourceOutputReference(this, "additional_s3_data_source");
  public get additionalS3DataSource() {
    return this._additionalS3DataSource;
  }
  public putAdditionalS3DataSource(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersAdditionalS3DataSource) {
    this._additionalS3DataSource.internalValue = value;
  }
  public resetAdditionalS3DataSource() {
    this._additionalS3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalS3DataSourceInput() {
    return this._additionalS3DataSource.internalValue;
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
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

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // framework_version - computed: false, optional: true, required: false
  private _frameworkVersion?: string; 
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }
  public set frameworkVersion(value: string) {
    this._frameworkVersion = value;
  }
  public resetFrameworkVersion() {
    this._frameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkVersionInput() {
    return this._frameworkVersion;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: false, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_input - computed: false, optional: true, required: false
  private _modelInput = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }
  public putModelInput(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersModelInput) {
    this._modelInput.internalValue = value;
  }
  public resetModelInput() {
    this._modelInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInputInput() {
    return this._modelInput.internalValue;
  }

  // nearest_model_name - computed: false, optional: true, required: false
  private _nearestModelName?: string; 
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
  public set nearestModelName(value: string) {
    this._nearestModelName = value;
  }
  public resetNearestModelName() {
    this._nearestModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearestModelNameInput() {
    return this._nearestModelName;
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#containers DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_content_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_content_types}
  */
  readonly supportedContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_realtime_inference_instance_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_realtime_inference_instance_types}
  */
  readonly supportedRealtimeInferenceInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_response_mime_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_response_mime_types}
  */
  readonly supportedResponseMimeTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#supported_transform_instance_types DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#supported_transform_instance_types}
  */
  readonly supportedTransformInstanceTypes?: string[];
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersToTerraform, false)(struct!.containers),
    supported_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_realtime_inference_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
    supported_response_mime_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
    supported_transform_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersList",
    },
    supported_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_realtime_inference_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_response_mime_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_transform_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._supportedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedContentTypes = this._supportedContentTypes;
    }
    if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
    }
    if (this._supportedResponseMimeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
    }
    if (this._supportedTransformInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._supportedContentTypes = undefined;
      this._supportedRealtimeInferenceInstanceTypes = undefined;
      this._supportedResponseMimeTypes = undefined;
      this._supportedTransformInstanceTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
      this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
      this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // supported_content_types - computed: false, optional: true, required: false
  private _supportedContentTypes?: string[]; 
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }
  public set supportedContentTypes(value: string[]) {
    this._supportedContentTypes = value;
  }
  public resetSupportedContentTypes() {
    this._supportedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentTypesInput() {
    return this._supportedContentTypes;
  }

  // supported_realtime_inference_instance_types - computed: false, optional: true, required: false
  private _supportedRealtimeInferenceInstanceTypes?: string[]; 
  public get supportedRealtimeInferenceInstanceTypes() {
    return this.getListAttribute('supported_realtime_inference_instance_types');
  }
  public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
    this._supportedRealtimeInferenceInstanceTypes = value;
  }
  public resetSupportedRealtimeInferenceInstanceTypes() {
    this._supportedRealtimeInferenceInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRealtimeInferenceInstanceTypesInput() {
    return this._supportedRealtimeInferenceInstanceTypes;
  }

  // supported_response_mime_types - computed: false, optional: true, required: false
  private _supportedResponseMimeTypes?: string[]; 
  public get supportedResponseMimeTypes() {
    return this.getListAttribute('supported_response_mime_types');
  }
  public set supportedResponseMimeTypes(value: string[]) {
    this._supportedResponseMimeTypes = value;
  }
  public resetSupportedResponseMimeTypes() {
    this._supportedResponseMimeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedResponseMimeTypesInput() {
    return this._supportedResponseMimeTypes;
  }

  // supported_transform_instance_types - computed: false, optional: true, required: false
  private _supportedTransformInstanceTypes?: string[]; 
  public get supportedTransformInstanceTypes() {
    return this.getListAttribute('supported_transform_instance_types');
  }
  public set supportedTransformInstanceTypes(value: string[]) {
    this._supportedTransformInstanceTypes = value;
  }
  public resetSupportedTransformInstanceTypes() {
    this._supportedTransformInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTransformInstanceTypesInput() {
    return this._supportedTransformInstanceTypes;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#commit_id DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#commit_id}
  */
  readonly commitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#generated_by DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#generated_by}
  */
  readonly generatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#project_id DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#repository DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataPropertiesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_id: cdktf.stringToTerraform(struct!.commitId),
    generated_by: cdktf.stringToTerraform(struct!.generatedBy),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataPropertiesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_id: {
      value: cdktf.stringToHclTerraform(struct!.commitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generated_by: {
      value: cdktf.stringToHclTerraform(struct!.generatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitId = this._commitId;
    }
    if (this._generatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedBy = this._generatedBy;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitId = undefined;
      this._generatedBy = undefined;
      this._projectId = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitId = value.commitId;
      this._generatedBy = value.generatedBy;
      this._projectId = value.projectId;
      this._repository = value.repository;
    }
  }

  // commit_id - computed: false, optional: true, required: false
  private _commitId?: string; 
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }
  public set commitId(value: string) {
    this._commitId = value;
  }
  public resetCommitId() {
    this._commitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitIdInput() {
    return this._commitId;
  }

  // generated_by - computed: false, optional: true, required: false
  private _generatedBy?: string; 
  public get generatedBy() {
    return this.getStringAttribute('generated_by');
  }
  public set generatedBy(value: string) {
    this._generatedBy = value;
  }
  public resetGeneratedBy() {
    this._generatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedByInput() {
    return this._generatedBy;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReportToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReportToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReportToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReportToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReportToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReportToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias {
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#post_training_report DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#post_training_report}
  */
  readonly postTrainingReport?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#pre_training_report DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#pre_training_report}
  */
  readonly preTrainingReport?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#report DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#report}
  */
  readonly report?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_training_report: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReportToTerraform(struct!.postTrainingReport),
    pre_training_report: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReportToTerraform(struct!.preTrainingReport),
    report: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReportToTerraform(struct!.report),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_training_report: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReportToHclTerraform(struct!.postTrainingReport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport",
    },
    pre_training_report: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReportToHclTerraform(struct!.preTrainingReport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport",
    },
    report: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReportToHclTerraform(struct!.report),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postTrainingReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postTrainingReport = this._postTrainingReport?.internalValue;
    }
    if (this._preTrainingReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTrainingReport = this._preTrainingReport?.internalValue;
    }
    if (this._report?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postTrainingReport.internalValue = undefined;
      this._preTrainingReport.internalValue = undefined;
      this._report.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postTrainingReport.internalValue = value.postTrainingReport;
      this._preTrainingReport.internalValue = value.preTrainingReport;
      this._report.internalValue = value.report;
    }
  }

  // post_training_report - computed: false, optional: true, required: false
  private _postTrainingReport = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReportOutputReference(this, "post_training_report");
  public get postTrainingReport() {
    return this._postTrainingReport;
  }
  public putPostTrainingReport(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPostTrainingReport) {
    this._postTrainingReport.internalValue = value;
  }
  public resetPostTrainingReport() {
    this._postTrainingReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTrainingReportInput() {
    return this._postTrainingReport.internalValue;
  }

  // pre_training_report - computed: false, optional: true, required: false
  private _preTrainingReport = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReportOutputReference(this, "pre_training_report");
  public get preTrainingReport() {
    return this._preTrainingReport;
  }
  public putPreTrainingReport(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasPreTrainingReport) {
    this._preTrainingReport.internalValue = value;
  }
  public resetPreTrainingReport() {
    this._preTrainingReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTrainingReportInput() {
    return this._preTrainingReport.internalValue;
  }

  // report - computed: false, optional: true, required: false
  private _report = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasReport) {
    this._report.internalValue = value;
  }
  public resetReport() {
    this._report.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReportToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReportToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability {
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#report DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#report}
  */
  readonly report?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    report: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReportToTerraform(struct!.report),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    report: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReportToHclTerraform(struct!.report),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._report?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._report.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._report.internalValue = value.report;
    }
  }

  // report - computed: false, optional: true, required: false
  private _report = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityReport) {
    this._report.internalValue = value;
  }
  public resetReport() {
    this._report.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraintsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraintsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatisticsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatisticsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality {
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#constraints DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#constraints}
  */
  readonly constraints?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#statistics DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#statistics}
  */
  readonly statistics?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraintsToTerraform(struct!.constraints),
    statistics: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints",
    },
    statistics: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraintsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraintsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_digest DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatisticsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_digest: cdktf.stringToTerraform(struct!.contentDigest),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatisticsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_digest: {
      value: cdktf.stringToHclTerraform(struct!.contentDigest),
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: false, optional: true, required: false
  private _contentDigest?: string; 
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality {
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#constraints DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#constraints}
  */
  readonly constraints?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints;
  /**
  * Details about the metrics source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#statistics DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#statistics}
  */
  readonly statistics?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraintsToTerraform(struct!.constraints),
    statistics: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints",
    },
    statistics: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics {
  /**
  * Contains bias metrics for a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#bias DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#bias}
  */
  readonly bias?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias;
  /**
  * Contains explainability metrics for a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#explainability DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#explainability}
  */
  readonly explainability?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability;
  /**
  * Data quality constraints and statistics for a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_data_quality DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_data_quality}
  */
  readonly modelDataQuality?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality;
  /**
  * Model quality statistics and constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_quality DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_quality}
  */
  readonly modelQuality?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bias: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasToTerraform(struct!.bias),
    explainability: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityToTerraform(struct!.explainability),
    model_data_quality: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityToTerraform(struct!.modelDataQuality),
    model_quality: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityToTerraform(struct!.modelQuality),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bias: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasToHclTerraform(struct!.bias),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias",
    },
    explainability: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityToHclTerraform(struct!.explainability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability",
    },
    model_data_quality: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityToHclTerraform(struct!.modelDataQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality",
    },
    model_quality: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityToHclTerraform(struct!.modelQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bias = this._bias?.internalValue;
    }
    if (this._explainability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explainability = this._explainability?.internalValue;
    }
    if (this._modelDataQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataQuality = this._modelDataQuality?.internalValue;
    }
    if (this._modelQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelQuality = this._modelQuality?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bias.internalValue = undefined;
      this._explainability.internalValue = undefined;
      this._modelDataQuality.internalValue = undefined;
      this._modelQuality.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bias.internalValue = value.bias;
      this._explainability.internalValue = value.explainability;
      this._modelDataQuality.internalValue = value.modelDataQuality;
      this._modelQuality.internalValue = value.modelQuality;
    }
  }

  // bias - computed: false, optional: true, required: false
  private _bias = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBiasOutputReference(this, "bias");
  public get bias() {
    return this._bias;
  }
  public putBias(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsBias) {
    this._bias.internalValue = value;
  }
  public resetBias() {
    this._bias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biasInput() {
    return this._bias.internalValue;
  }

  // explainability - computed: false, optional: true, required: false
  private _explainability = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainabilityOutputReference(this, "explainability");
  public get explainability() {
    return this._explainability;
  }
  public putExplainability(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsExplainability) {
    this._explainability.internalValue = value;
  }
  public resetExplainability() {
    this._explainability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainabilityInput() {
    return this._explainability.internalValue;
  }

  // model_data_quality - computed: false, optional: true, required: false
  private _modelDataQuality = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQualityOutputReference(this, "model_data_quality");
  public get modelDataQuality() {
    return this._modelDataQuality;
  }
  public putModelDataQuality(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelDataQuality) {
    this._modelDataQuality.internalValue = value;
  }
  public resetModelDataQuality() {
    this._modelDataQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataQualityInput() {
    return this._modelDataQuality.internalValue;
  }

  // model_quality - computed: false, optional: true, required: false
  private _modelQuality = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQualityOutputReference(this, "model_quality");
  public get modelQuality() {
    return this._modelQuality;
  }
  public putModelQuality(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsModelQuality) {
    this._modelQuality.internalValue = value;
  }
  public resetModelQuality() {
    this._modelQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityInput() {
    return this._modelQuality.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#algorithm_name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_data_url DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_data_url}
  */
  readonly modelDataUrl?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_name: cdktf.stringToTerraform(struct!.algorithmName),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms | cdktf.IResolvable): any {
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
    model_data_url: {
      value: cdktf.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._modelDataUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._modelDataUrl = value.modelDataUrl;
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

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#source_algorithms DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#source_algorithms}
  */
  readonly sourceAlgorithms?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_algorithms: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsToTerraform, false)(struct!.sourceAlgorithms),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_algorithms: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsToHclTerraform, false)(struct!.sourceAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAlgorithms = this._sourceAlgorithms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAlgorithms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAlgorithms.internalValue = value.sourceAlgorithms;
    }
  }

  // source_algorithms - computed: false, optional: true, required: false
  private _sourceAlgorithms = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithmsList(this, "source_algorithms", false);
  public get sourceAlgorithms() {
    return this._sourceAlgorithms;
  }
  public putSourceAlgorithms(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationSourceAlgorithms[] | cdktf.IResolvable) {
    this._sourceAlgorithms.internalValue = value;
  }
  public resetSourceAlgorithms() {
    this._sourceAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAlgorithmsInput() {
    return this._sourceAlgorithms.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource {
  /**
  * Describes the S3 data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_data_source DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_data_source}
  */
  readonly s3DataSource?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_source: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktf.IResolvable | undefined) {
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
  private _s3DataSource = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource) {
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#content_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Describes the location of the channel data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#data_source DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#split_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#split_type}
  */
  readonly splitType?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    data_source: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToTerraform(struct!.dataSource),
    split_type: cdktf.stringToTerraform(struct!.splitType),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktf.IResolvable): any {
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
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource",
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource) {
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#accept DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#accept}
  */
  readonly accept?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#assemble_with DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#assemble_with}
  */
  readonly assembleWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#batch_strategy DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#batch_strategy}
  */
  readonly batchStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#max_concurrent_transforms DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#max_concurrent_transforms}
  */
  readonly maxConcurrentTransforms?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#max_payload_in_mb DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#max_payload_in_mb}
  */
  readonly maxPayloadInMb?: number;
  /**
  * Describes the input source of a transform job and the way the transform job consumes it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#transform_input DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#transform_input}
  */
  readonly transformInput?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput;
  /**
  * Describes the results of a transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#transform_output DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#transform_output}
  */
  readonly transformOutput?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput;
  /**
  * Describes the resources, including ML instance types and ML instance count, to use for transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#transform_resources DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#transform_resources}
  */
  readonly transformResources?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_strategy: cdktf.stringToTerraform(struct!.batchStrategy),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    max_concurrent_transforms: cdktf.numberToTerraform(struct!.maxConcurrentTransforms),
    max_payload_in_mb: cdktf.numberToTerraform(struct!.maxPayloadInMb),
    transform_input: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToTerraform(struct!.transformInput),
    transform_output: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToTerraform(struct!.transformOutput),
    transform_resources: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToTerraform(struct!.transformResources),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition | cdktf.IResolvable): any {
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
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    transform_input: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToHclTerraform(struct!.transformInput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput",
    },
    transform_output: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToHclTerraform(struct!.transformOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput",
    },
    transform_resources: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToHclTerraform(struct!.transformResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchStrategy = this._batchStrategy;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._maxConcurrentTransforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentTransforms = this._maxConcurrentTransforms;
    }
    if (this._maxPayloadInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadInMb = this._maxPayloadInMb;
    }
    if (this._transformInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformInput = this._transformInput?.internalValue;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchStrategy = undefined;
      this._environment = undefined;
      this._maxConcurrentTransforms = undefined;
      this._maxPayloadInMb = undefined;
      this._transformInput.internalValue = undefined;
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
      this._environment = value.environment;
      this._maxConcurrentTransforms = value.maxConcurrentTransforms;
      this._maxPayloadInMb = value.maxPayloadInMb;
      this._transformInput.internalValue = value.transformInput;
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

  // transform_input - computed: false, optional: true, required: false
  private _transformInput = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference(this, "transform_input");
  public get transformInput() {
    return this._transformInput;
  }
  public putTransformInput(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput) {
    this._transformInput.internalValue = value;
  }
  public resetTransformInput() {
    this._transformInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInputInput() {
    return this._transformInput.internalValue;
  }

  // transform_output - computed: false, optional: true, required: false
  private _transformOutput = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference(this, "transform_output");
  public get transformOutput() {
    return this._transformOutput;
  }
  public putTransformOutput(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput) {
    this._transformOutput.internalValue = value;
  }
  public resetTransformOutput() {
    this._transformOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformOutputInput() {
    return this._transformOutput.internalValue;
  }

  // transform_resources - computed: false, optional: true, required: false
  private _transformResources = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference(this, "transform_resources");
  public get transformResources() {
    return this._transformResources;
  }
  public putTransformResources(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources) {
    this._transformResources.internalValue = value;
  }
  public resetTransformResources() {
    this._transformResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformResourcesInput() {
    return this._transformResources.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#profile_name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#profile_name}
  */
  readonly profileName?: string;
  /**
  * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#transform_job_definition DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#transform_job_definition}
  */
  readonly transformJobDefinition?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    transform_job_definition: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionToTerraform(struct!.transformJobDefinition),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_job_definition: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionToHclTerraform(struct!.transformJobDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._transformJobDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformJobDefinition = this._transformJobDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileName = undefined;
      this._transformJobDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileName = value.profileName;
      this._transformJobDefinition.internalValue = value.transformJobDefinition;
    }
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // transform_job_definition - computed: false, optional: true, required: false
  private _transformJobDefinition = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference(this, "transform_job_definition");
  public get transformJobDefinition() {
    return this._transformJobDefinition;
  }
  public putTransformJobDefinition(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesTransformJobDefinition) {
    this._transformJobDefinition.internalValue = value;
  }
  public resetTransformJobDefinition() {
    this._transformJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformJobDefinitionInput() {
    return this._transformJobDefinition.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#validation_profiles DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#validation_profiles}
  */
  readonly validationProfiles?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#validation_role DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#validation_role}
  */
  readonly validationRole?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation_profiles: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesToTerraform, false)(struct!.validationProfiles),
    validation_role: cdktf.stringToTerraform(struct!.validationRole),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation_profiles: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesToHclTerraform, false)(struct!.validationProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesList",
    },
    validation_role: {
      value: cdktf.stringToHclTerraform(struct!.validationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationProfiles = this._validationProfiles?.internalValue;
    }
    if (this._validationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationRole = this._validationRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validationProfiles.internalValue = undefined;
      this._validationRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validationProfiles.internalValue = value.validationProfiles;
      this._validationRole = value.validationRole;
    }
  }

  // validation_profiles - computed: false, optional: true, required: false
  private _validationProfiles = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfilesList(this, "validation_profiles", false);
  public get validationProfiles() {
    return this._validationProfiles;
  }
  public putValidationProfiles(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationValidationProfiles[] | cdktf.IResolvable) {
    this._validationProfiles.internalValue = value;
  }
  public resetValidationProfiles() {
    this._validationProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationProfilesInput() {
    return this._validationProfiles.internalValue;
  }

  // validation_role - computed: false, optional: true, required: false
  private _validationRole?: string; 
  public get validationRole() {
    return this.getStringAttribute('validation_role');
  }
  public set validationRole(value: string) {
    this._validationRole = value;
  }
  public resetValidationRole() {
    this._validationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRoleInput() {
    return this._validationRole;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec {
  /**
  * An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#additional_inference_specifications DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#additional_inference_specifications}
  */
  readonly additionalInferenceSpecifications?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications[] | cdktf.IResolvable;
  /**
  * A description for the approval status of the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#approval_description DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#approval_description}
  */
  readonly approvalDescription?: string;
  /**
  * Whether to certify the model package for listing on Amazon Web Services Marketplace. This parameter is optional for unversioned models, and does not apply to versioned models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#certify_for_marketplace DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#certify_for_marketplace}
  */
  readonly certifyForMarketplace?: boolean | cdktf.IResolvable;
  /**
  * A unique token that guarantees that the call to this API is idempotent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#client_token DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#client_token}
  */
  readonly clientToken?: string;
  /**
  * The metadata properties associated with the model package versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#customer_metadata_properties DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#customer_metadata_properties}
  */
  readonly customerMetadataProperties?: { [key: string]: string };
  /**
  * The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#domain DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on Drift Detection against Previous Baselines in SageMaker Pipelines (https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection) in the Amazon SageMaker Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#drift_check_baselines DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#drift_check_baselines}
  */
  readonly driftCheckBaselines?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines;
  /**
  * Specifies details about inference jobs that can be run with models based on this model package, including the following: * The Amazon ECR paths of containers that contain the inference code and model artifacts. * The instance types that the model package supports for transform jobs and real-time endpoints used for inference. * The input and output content formats that the model package supports for inference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#inference_specification DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#inference_specification}
  */
  readonly inferenceSpecification?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification;
  /**
  * Metadata properties of the tracking entity, trial, or trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#metadata_properties DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#metadata_properties}
  */
  readonly metadataProperties?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties;
  /**
  * Whether the model is approved for deployment. This parameter is optional for versioned models, and does not apply to unversioned models. For versioned models, the value of this parameter must be set to Approved to deploy the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_approval_status DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_approval_status}
  */
  readonly modelApprovalStatus?: string;
  /**
  * A structure that contains model metrics reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_metrics DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_metrics}
  */
  readonly modelMetrics?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics;
  /**
  * A description of the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_package_description DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_package_description}
  */
  readonly modelPackageDescription?: string;
  /**
  * The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to. This parameter is required for versioned models, and does not apply to unversioned models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_package_group_name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_package_group_name}
  */
  readonly modelPackageGroupName?: string;
  /**
  * The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen). This parameter is required for unversioned models. It is not applicable to versioned models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#model_package_name DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). This archive can hold multiple files that are all equally used in the load test. Each file in the archive must satisfy the size constraints of the InvokeEndpoint (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html#API_runtime_InvokeEndpoint_RequestSyntax) call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#sample_payload_url DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#sample_payload_url}
  */
  readonly samplePayloadUrl?: string;
  /**
  * Indicates if you want to skip model validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#skip_model_validation DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#skip_model_validation}
  */
  readonly skipModelValidation?: string;
  /**
  * Details about the algorithm that was used to create the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#source_algorithm_specification DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#source_algorithm_specification}
  */
  readonly sourceAlgorithmSpecification?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification;
  /**
  * A list of key value pairs associated with the model. For more information, see Tagging Amazon Web Services resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the Amazon Web Services General Reference Guide. If you supply ModelPackageGroupName, your model package belongs to the model group you specify and uses the tags associated with the model group. In this case, you cannot supply a tag argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification. The following tasks are supported by Inference Recommender: 'IMAGE_CLASSIFICATION' | 'OBJECT_DETECTION' | 'TEXT_GENERATION' |'IMAGE_SEGMENTATION' | 'FILL_MASK' | 'CLASSIFICATION' | 'REGRESSION' | 'OTHER'. Specify 'OTHER' if none of the tasks listed fit your use case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#task DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#task}
  */
  readonly task?: string;
  /**
  * Specifies configurations for one or more transform jobs that SageMaker runs to test the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#validation_specification DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest#validation_specification}
  */
  readonly validationSpecification?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification;
}

export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_inference_specifications: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsToTerraform, false)(struct!.additionalInferenceSpecifications),
    approval_description: cdktf.stringToTerraform(struct!.approvalDescription),
    certify_for_marketplace: cdktf.booleanToTerraform(struct!.certifyForMarketplace),
    client_token: cdktf.stringToTerraform(struct!.clientToken),
    customer_metadata_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customerMetadataProperties),
    domain: cdktf.stringToTerraform(struct!.domain),
    drift_check_baselines: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesToTerraform(struct!.driftCheckBaselines),
    inference_specification: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationToTerraform(struct!.inferenceSpecification),
    metadata_properties: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataPropertiesToTerraform(struct!.metadataProperties),
    model_approval_status: cdktf.stringToTerraform(struct!.modelApprovalStatus),
    model_metrics: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsToTerraform(struct!.modelMetrics),
    model_package_description: cdktf.stringToTerraform(struct!.modelPackageDescription),
    model_package_group_name: cdktf.stringToTerraform(struct!.modelPackageGroupName),
    model_package_name: cdktf.stringToTerraform(struct!.modelPackageName),
    sample_payload_url: cdktf.stringToTerraform(struct!.samplePayloadUrl),
    skip_model_validation: cdktf.stringToTerraform(struct!.skipModelValidation),
    source_algorithm_specification: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationToTerraform(struct!.sourceAlgorithmSpecification),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    task: cdktf.stringToTerraform(struct!.task),
    validation_specification: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationToTerraform(struct!.validationSpecification),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_inference_specifications: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsToHclTerraform, false)(struct!.additionalInferenceSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsList",
    },
    approval_description: {
      value: cdktf.stringToHclTerraform(struct!.approvalDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certify_for_marketplace: {
      value: cdktf.booleanToHclTerraform(struct!.certifyForMarketplace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_token: {
      value: cdktf.stringToHclTerraform(struct!.clientToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_metadata_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customerMetadataProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drift_check_baselines: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesToHclTerraform(struct!.driftCheckBaselines),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines",
    },
    inference_specification: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationToHclTerraform(struct!.inferenceSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification",
    },
    metadata_properties: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataPropertiesToHclTerraform(struct!.metadataProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties",
    },
    model_approval_status: {
      value: cdktf.stringToHclTerraform(struct!.modelApprovalStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_metrics: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsToHclTerraform(struct!.modelMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics",
    },
    model_package_description: {
      value: cdktf.stringToHclTerraform(struct!.modelPackageDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_package_group_name: {
      value: cdktf.stringToHclTerraform(struct!.modelPackageGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_package_name: {
      value: cdktf.stringToHclTerraform(struct!.modelPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_payload_url: {
      value: cdktf.stringToHclTerraform(struct!.samplePayloadUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_model_validation: {
      value: cdktf.stringToHclTerraform(struct!.skipModelValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_algorithm_specification: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationToHclTerraform(struct!.sourceAlgorithmSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsList",
    },
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_specification: {
      value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationToHclTerraform(struct!.validationSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalInferenceSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInferenceSpecifications = this._additionalInferenceSpecifications?.internalValue;
    }
    if (this._approvalDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalDescription = this._approvalDescription;
    }
    if (this._certifyForMarketplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.certifyForMarketplace = this._certifyForMarketplace;
    }
    if (this._clientToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientToken = this._clientToken;
    }
    if (this._customerMetadataProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerMetadataProperties = this._customerMetadataProperties;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._driftCheckBaselines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driftCheckBaselines = this._driftCheckBaselines?.internalValue;
    }
    if (this._inferenceSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSpecification = this._inferenceSpecification?.internalValue;
    }
    if (this._metadataProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataProperties = this._metadataProperties?.internalValue;
    }
    if (this._modelApprovalStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelApprovalStatus = this._modelApprovalStatus;
    }
    if (this._modelMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelMetrics = this._modelMetrics?.internalValue;
    }
    if (this._modelPackageDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageDescription = this._modelPackageDescription;
    }
    if (this._modelPackageGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageGroupName = this._modelPackageGroupName;
    }
    if (this._modelPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageName = this._modelPackageName;
    }
    if (this._samplePayloadUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePayloadUrl = this._samplePayloadUrl;
    }
    if (this._skipModelValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipModelValidation = this._skipModelValidation;
    }
    if (this._sourceAlgorithmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAlgorithmSpecification = this._sourceAlgorithmSpecification?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._validationSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationSpecification = this._validationSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalInferenceSpecifications.internalValue = undefined;
      this._approvalDescription = undefined;
      this._certifyForMarketplace = undefined;
      this._clientToken = undefined;
      this._customerMetadataProperties = undefined;
      this._domain = undefined;
      this._driftCheckBaselines.internalValue = undefined;
      this._inferenceSpecification.internalValue = undefined;
      this._metadataProperties.internalValue = undefined;
      this._modelApprovalStatus = undefined;
      this._modelMetrics.internalValue = undefined;
      this._modelPackageDescription = undefined;
      this._modelPackageGroupName = undefined;
      this._modelPackageName = undefined;
      this._samplePayloadUrl = undefined;
      this._skipModelValidation = undefined;
      this._sourceAlgorithmSpecification.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._task = undefined;
      this._validationSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalInferenceSpecifications.internalValue = value.additionalInferenceSpecifications;
      this._approvalDescription = value.approvalDescription;
      this._certifyForMarketplace = value.certifyForMarketplace;
      this._clientToken = value.clientToken;
      this._customerMetadataProperties = value.customerMetadataProperties;
      this._domain = value.domain;
      this._driftCheckBaselines.internalValue = value.driftCheckBaselines;
      this._inferenceSpecification.internalValue = value.inferenceSpecification;
      this._metadataProperties.internalValue = value.metadataProperties;
      this._modelApprovalStatus = value.modelApprovalStatus;
      this._modelMetrics.internalValue = value.modelMetrics;
      this._modelPackageDescription = value.modelPackageDescription;
      this._modelPackageGroupName = value.modelPackageGroupName;
      this._modelPackageName = value.modelPackageName;
      this._samplePayloadUrl = value.samplePayloadUrl;
      this._skipModelValidation = value.skipModelValidation;
      this._sourceAlgorithmSpecification.internalValue = value.sourceAlgorithmSpecification;
      this._tags.internalValue = value.tags;
      this._task = value.task;
      this._validationSpecification.internalValue = value.validationSpecification;
    }
  }

  // additional_inference_specifications - computed: false, optional: true, required: false
  private _additionalInferenceSpecifications = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecificationsList(this, "additional_inference_specifications", false);
  public get additionalInferenceSpecifications() {
    return this._additionalInferenceSpecifications;
  }
  public putAdditionalInferenceSpecifications(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecAdditionalInferenceSpecifications[] | cdktf.IResolvable) {
    this._additionalInferenceSpecifications.internalValue = value;
  }
  public resetAdditionalInferenceSpecifications() {
    this._additionalInferenceSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInferenceSpecificationsInput() {
    return this._additionalInferenceSpecifications.internalValue;
  }

  // approval_description - computed: false, optional: true, required: false
  private _approvalDescription?: string; 
  public get approvalDescription() {
    return this.getStringAttribute('approval_description');
  }
  public set approvalDescription(value: string) {
    this._approvalDescription = value;
  }
  public resetApprovalDescription() {
    this._approvalDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalDescriptionInput() {
    return this._approvalDescription;
  }

  // certify_for_marketplace - computed: false, optional: true, required: false
  private _certifyForMarketplace?: boolean | cdktf.IResolvable; 
  public get certifyForMarketplace() {
    return this.getBooleanAttribute('certify_for_marketplace');
  }
  public set certifyForMarketplace(value: boolean | cdktf.IResolvable) {
    this._certifyForMarketplace = value;
  }
  public resetCertifyForMarketplace() {
    this._certifyForMarketplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certifyForMarketplaceInput() {
    return this._certifyForMarketplace;
  }

  // client_token - computed: false, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // customer_metadata_properties - computed: false, optional: true, required: false
  private _customerMetadataProperties?: { [key: string]: string }; 
  public get customerMetadataProperties() {
    return this.getStringMapAttribute('customer_metadata_properties');
  }
  public set customerMetadataProperties(value: { [key: string]: string }) {
    this._customerMetadataProperties = value;
  }
  public resetCustomerMetadataProperties() {
    this._customerMetadataProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerMetadataPropertiesInput() {
    return this._customerMetadataProperties;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // drift_check_baselines - computed: false, optional: true, required: false
  private _driftCheckBaselines = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselinesOutputReference(this, "drift_check_baselines");
  public get driftCheckBaselines() {
    return this._driftCheckBaselines;
  }
  public putDriftCheckBaselines(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecDriftCheckBaselines) {
    this._driftCheckBaselines.internalValue = value;
  }
  public resetDriftCheckBaselines() {
    this._driftCheckBaselines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftCheckBaselinesInput() {
    return this._driftCheckBaselines.internalValue;
  }

  // inference_specification - computed: false, optional: true, required: false
  private _inferenceSpecification = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecificationOutputReference(this, "inference_specification");
  public get inferenceSpecification() {
    return this._inferenceSpecification;
  }
  public putInferenceSpecification(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecInferenceSpecification) {
    this._inferenceSpecification.internalValue = value;
  }
  public resetInferenceSpecification() {
    this._inferenceSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationInput() {
    return this._inferenceSpecification.internalValue;
  }

  // metadata_properties - computed: false, optional: true, required: false
  private _metadataProperties = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataPropertiesOutputReference(this, "metadata_properties");
  public get metadataProperties() {
    return this._metadataProperties;
  }
  public putMetadataProperties(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecMetadataProperties) {
    this._metadataProperties.internalValue = value;
  }
  public resetMetadataProperties() {
    this._metadataProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPropertiesInput() {
    return this._metadataProperties.internalValue;
  }

  // model_approval_status - computed: false, optional: true, required: false
  private _modelApprovalStatus?: string; 
  public get modelApprovalStatus() {
    return this.getStringAttribute('model_approval_status');
  }
  public set modelApprovalStatus(value: string) {
    this._modelApprovalStatus = value;
  }
  public resetModelApprovalStatus() {
    this._modelApprovalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelApprovalStatusInput() {
    return this._modelApprovalStatus;
  }

  // model_metrics - computed: false, optional: true, required: false
  private _modelMetrics = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetricsOutputReference(this, "model_metrics");
  public get modelMetrics() {
    return this._modelMetrics;
  }
  public putModelMetrics(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecModelMetrics) {
    this._modelMetrics.internalValue = value;
  }
  public resetModelMetrics() {
    this._modelMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelMetricsInput() {
    return this._modelMetrics.internalValue;
  }

  // model_package_description - computed: false, optional: true, required: false
  private _modelPackageDescription?: string; 
  public get modelPackageDescription() {
    return this.getStringAttribute('model_package_description');
  }
  public set modelPackageDescription(value: string) {
    this._modelPackageDescription = value;
  }
  public resetModelPackageDescription() {
    this._modelPackageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageDescriptionInput() {
    return this._modelPackageDescription;
  }

  // model_package_group_name - computed: false, optional: true, required: false
  private _modelPackageGroupName?: string; 
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }
  public set modelPackageGroupName(value: string) {
    this._modelPackageGroupName = value;
  }
  public resetModelPackageGroupName() {
    this._modelPackageGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupNameInput() {
    return this._modelPackageGroupName;
  }

  // model_package_name - computed: false, optional: true, required: false
  private _modelPackageName?: string; 
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }
  public set modelPackageName(value: string) {
    this._modelPackageName = value;
  }
  public resetModelPackageName() {
    this._modelPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageNameInput() {
    return this._modelPackageName;
  }

  // sample_payload_url - computed: false, optional: true, required: false
  private _samplePayloadUrl?: string; 
  public get samplePayloadUrl() {
    return this.getStringAttribute('sample_payload_url');
  }
  public set samplePayloadUrl(value: string) {
    this._samplePayloadUrl = value;
  }
  public resetSamplePayloadUrl() {
    this._samplePayloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePayloadUrlInput() {
    return this._samplePayloadUrl;
  }

  // skip_model_validation - computed: false, optional: true, required: false
  private _skipModelValidation?: string; 
  public get skipModelValidation() {
    return this.getStringAttribute('skip_model_validation');
  }
  public set skipModelValidation(value: string) {
    this._skipModelValidation = value;
  }
  public resetSkipModelValidation() {
    this._skipModelValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipModelValidationInput() {
    return this._skipModelValidation;
  }

  // source_algorithm_specification - computed: false, optional: true, required: false
  private _sourceAlgorithmSpecification = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecificationOutputReference(this, "source_algorithm_specification");
  public get sourceAlgorithmSpecification() {
    return this._sourceAlgorithmSpecification;
  }
  public putSourceAlgorithmSpecification(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecSourceAlgorithmSpecification) {
    this._sourceAlgorithmSpecification.internalValue = value;
  }
  public resetSourceAlgorithmSpecification() {
    this._sourceAlgorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAlgorithmSpecificationInput() {
    return this._sourceAlgorithmSpecification.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task - computed: false, optional: true, required: false
  private _task?: string; 
  public get task() {
    return this.getStringAttribute('task');
  }
  public set task(value: string) {
    this._task = value;
  }
  public resetTask() {
    this._task = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
  }

  // validation_specification - computed: false, optional: true, required: false
  private _validationSpecification = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecificationOutputReference(this, "validation_specification");
  public get validationSpecification() {
    return this._validationSpecification;
  }
  public putValidationSpecification(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecValidationSpecification) {
    this._validationSpecification.internalValue = value;
  }
  public resetValidationSpecification() {
    this._validationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationSpecificationInput() {
    return this._validationSpecification.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_model_package_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_model_package_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_model_package_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sagemaker_services_k8s_aws_model_package_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_model_package_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_model_package_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsModelPackageV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
