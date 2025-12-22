// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata;
  /**
  * ModelExplainabilityJobDefinitionSpec defines the desired state of ModelExplainabilityJobDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources {
  /**
  * Configuration for the cluster used to run model monitoring jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#cluster_config DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources | cdktf.IResolvable | undefined) {
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
  private _clusterConfig = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesClusterConfig) {
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#config_uri DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#config_uri}
  */
  readonly configUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#image_uri DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#image_uri}
  */
  readonly imageUri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_uri: cdktf.stringToTerraform(struct!.configUri),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_uri: {
      value: cdktf.stringToHclTerraform(struct!.configUri),
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.configUri = this._configUri;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configUri = undefined;
      this._environment = undefined;
      this._imageUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configUri = value.configUri;
      this._environment = value.environment;
      this._imageUri = value.imageUri;
    }
  }

  // config_uri - computed: false, optional: true, required: false
  private _configUri?: string; 
  public get configUri() {
    return this.getStringAttribute('config_uri');
  }
  public set configUri(value: string) {
    this._configUri = value;
  }
  public resetConfigUri() {
    this._configUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configUriInput() {
    return this._configUri;
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#baselining_job_name DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#baselining_job_name}
  */
  readonly baseliningJobName?: string;
  /**
  * The constraints resource for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#constraints_resource DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#constraints_resource}
  */
  readonly constraintsResource?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baselining_job_name: cdktf.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baselining_job_name: {
      value: cdktf.stringToHclTerraform(struct!.baseliningJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraints_resource: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResourceToHclTerraform(struct!.constraintsResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseliningJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseliningJobName = this._baseliningJobName;
    }
    if (this._constraintsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintsResource = this._constraintsResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseliningJobName = undefined;
      this._constraintsResource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseliningJobName = value.baseliningJobName;
      this._constraintsResource.internalValue = value.constraintsResource;
    }
  }

  // baselining_job_name - computed: false, optional: true, required: false
  private _baseliningJobName?: string; 
  public get baseliningJobName() {
    return this.getStringAttribute('baselining_job_name');
  }
  public set baseliningJobName(value: string) {
    this._baseliningJobName = value;
  }
  public resetBaseliningJobName() {
    this._baseliningJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseliningJobNameInput() {
    return this._baseliningJobName;
  }

  // constraints_resource - computed: false, optional: true, required: false
  private _constraintsResource = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResourceOutputReference(this, "constraints_resource");
  public get constraintsResource() {
    return this._constraintsResource;
  }
  public putConstraintsResource(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigConstraintsResource) {
    this._constraintsResource.internalValue = value;
  }
  public resetConstraintsResource() {
    this._constraintsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsResourceInput() {
    return this._constraintsResource.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#end_time_offset DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#end_time_offset}
  */
  readonly endTimeOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#endpoint_name DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#exclude_features_attribute DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#exclude_features_attribute}
  */
  readonly excludeFeaturesAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#features_attribute DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#features_attribute}
  */
  readonly featuresAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#inference_attribute DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#inference_attribute}
  */
  readonly inferenceAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#probability_attribute DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#probability_attribute}
  */
  readonly probabilityAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#probability_threshold_attribute DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#probability_threshold_attribute}
  */
  readonly probabilityThresholdAttribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#s3_data_distribution_type DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#s3_input_mode DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#s3_input_mode}
  */
  readonly s3InputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#start_time_offset DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#start_time_offset}
  */
  readonly startTimeOffset?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time_offset: cdktf.stringToTerraform(struct!.endTimeOffset),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    exclude_features_attribute: cdktf.stringToTerraform(struct!.excludeFeaturesAttribute),
    features_attribute: cdktf.stringToTerraform(struct!.featuresAttribute),
    inference_attribute: cdktf.stringToTerraform(struct!.inferenceAttribute),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    probability_attribute: cdktf.stringToTerraform(struct!.probabilityAttribute),
    probability_threshold_attribute: cdktf.numberToTerraform(struct!.probabilityThresholdAttribute),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_features_attribute: {
      value: cdktf.stringToHclTerraform(struct!.excludeFeaturesAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features_attribute: {
      value: cdktf.stringToHclTerraform(struct!.featuresAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_attribute: {
      value: cdktf.stringToHclTerraform(struct!.inferenceAttribute),
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
    probability_attribute: {
      value: cdktf.stringToHclTerraform(struct!.probabilityAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probability_threshold_attribute: {
      value: cdktf.numberToHclTerraform(struct!.probabilityThresholdAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_data_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataDistributionType),
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
    start_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._excludeFeaturesAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFeaturesAttribute = this._excludeFeaturesAttribute;
    }
    if (this._featuresAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.featuresAttribute = this._featuresAttribute;
    }
    if (this._inferenceAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAttribute = this._inferenceAttribute;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._probabilityAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.probabilityAttribute = this._probabilityAttribute;
    }
    if (this._probabilityThresholdAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.probabilityThresholdAttribute = this._probabilityThresholdAttribute;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTimeOffset = undefined;
      this._endpointName = undefined;
      this._excludeFeaturesAttribute = undefined;
      this._featuresAttribute = undefined;
      this._inferenceAttribute = undefined;
      this._localPath = undefined;
      this._probabilityAttribute = undefined;
      this._probabilityThresholdAttribute = undefined;
      this._s3DataDistributionType = undefined;
      this._s3InputMode = undefined;
      this._startTimeOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTimeOffset = value.endTimeOffset;
      this._endpointName = value.endpointName;
      this._excludeFeaturesAttribute = value.excludeFeaturesAttribute;
      this._featuresAttribute = value.featuresAttribute;
      this._inferenceAttribute = value.inferenceAttribute;
      this._localPath = value.localPath;
      this._probabilityAttribute = value.probabilityAttribute;
      this._probabilityThresholdAttribute = value.probabilityThresholdAttribute;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3InputMode = value.s3InputMode;
      this._startTimeOffset = value.startTimeOffset;
    }
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: string; 
  public get endTimeOffset() {
    return this.getStringAttribute('end_time_offset');
  }
  public set endTimeOffset(value: string) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // endpoint_name - computed: false, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // exclude_features_attribute - computed: false, optional: true, required: false
  private _excludeFeaturesAttribute?: string; 
  public get excludeFeaturesAttribute() {
    return this.getStringAttribute('exclude_features_attribute');
  }
  public set excludeFeaturesAttribute(value: string) {
    this._excludeFeaturesAttribute = value;
  }
  public resetExcludeFeaturesAttribute() {
    this._excludeFeaturesAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFeaturesAttributeInput() {
    return this._excludeFeaturesAttribute;
  }

  // features_attribute - computed: false, optional: true, required: false
  private _featuresAttribute?: string; 
  public get featuresAttribute() {
    return this.getStringAttribute('features_attribute');
  }
  public set featuresAttribute(value: string) {
    this._featuresAttribute = value;
  }
  public resetFeaturesAttribute() {
    this._featuresAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresAttributeInput() {
    return this._featuresAttribute;
  }

  // inference_attribute - computed: false, optional: true, required: false
  private _inferenceAttribute?: string; 
  public get inferenceAttribute() {
    return this.getStringAttribute('inference_attribute');
  }
  public set inferenceAttribute(value: string) {
    this._inferenceAttribute = value;
  }
  public resetInferenceAttribute() {
    this._inferenceAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAttributeInput() {
    return this._inferenceAttribute;
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

  // probability_attribute - computed: false, optional: true, required: false
  private _probabilityAttribute?: string; 
  public get probabilityAttribute() {
    return this.getStringAttribute('probability_attribute');
  }
  public set probabilityAttribute(value: string) {
    this._probabilityAttribute = value;
  }
  public resetProbabilityAttribute() {
    this._probabilityAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilityAttributeInput() {
    return this._probabilityAttribute;
  }

  // probability_threshold_attribute - computed: false, optional: true, required: false
  private _probabilityThresholdAttribute?: number; 
  public get probabilityThresholdAttribute() {
    return this.getNumberAttribute('probability_threshold_attribute');
  }
  public set probabilityThresholdAttribute(value: number) {
    this._probabilityThresholdAttribute = value;
  }
  public resetProbabilityThresholdAttribute() {
    this._probabilityThresholdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilityThresholdAttributeInput() {
    return this._probabilityThresholdAttribute;
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

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: string; 
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
  public set startTimeOffset(value: string) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput {
  /**
  * Input object for the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#endpoint_input DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#endpoint_input}
  */
  readonly endpointInput?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_input: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInputToTerraform(struct!.endpointInput),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_input: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInputToHclTerraform(struct!.endpointInput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointInput = this._endpointInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointInput.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointInput.internalValue = value.endpointInput;
    }
  }

  // endpoint_input - computed: false, optional: true, required: false
  private _endpointInput = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInputOutputReference(this, "endpoint_input");
  public get endpointInput() {
    return this._endpointInput;
  }
  public putEndpointInput(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputEndpointInput) {
    this._endpointInput.internalValue = value;
  }
  public resetEndpointInput() {
    this._endpointInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInputInput() {
    return this._endpointInput.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#s3_upload_mode DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs {
  /**
  * Information about where and how you want to store the results of a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#s3_output DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#s3_output}
  */
  readonly s3Output?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_output: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_output: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct!.s3Output),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Output = this._s3Output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Output.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Output.internalValue = value.s3Output;
    }
  }

  // s3_output - computed: false, optional: true, required: false
  private _s3Output = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
  public putS3Output(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsS3Output) {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#monitoring_outputs DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#monitoring_outputs}
  */
  readonly monitoringOutputs?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform, false)(struct!.monitoringOutputs),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig | cdktf.IResolvable): any {
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
    monitoring_outputs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsToHclTerraform, false)(struct!.monitoringOutputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._monitoringOutputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringOutputs = this._monitoringOutputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._monitoringOutputs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._monitoringOutputs.internalValue = value.monitoringOutputs;
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

  // monitoring_outputs - computed: false, optional: true, required: false
  private _monitoringOutputs = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputsList(this, "monitoring_outputs", false);
  public get monitoringOutputs() {
    return this._monitoringOutputs;
  }
  public putMonitoringOutputs(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigMonitoringOutputs[] | cdktf.IResolvable) {
    this._monitoringOutputs.internalValue = value;
  }
  public resetMonitoringOutputs() {
    this._monitoringOutputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringOutputsInput() {
    return this._monitoringOutputs.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#enable_inter_container_traffic_encryption DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC (https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable): any {
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
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig | cdktf.IResolvable | undefined) {
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
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigVpcConfig) {
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#max_runtime_in_seconds DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingConditionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingConditionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec {
  /**
  * The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#job_definition_name DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#job_definition_name}
  */
  readonly jobDefinitionName: string;
  /**
  * Identifies the resources to deploy for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#job_resources DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#job_resources}
  */
  readonly jobResources: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources;
  /**
  * Configures the model explainability job to run a specified Docker container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#model_explainability_app_specification DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#model_explainability_app_specification}
  */
  readonly modelExplainabilityAppSpecification: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification;
  /**
  * The baseline configuration for a model explainability job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#model_explainability_baseline_config DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#model_explainability_baseline_config}
  */
  readonly modelExplainabilityBaselineConfig?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig;
  /**
  * Inputs for the model explainability job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#model_explainability_job_input DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#model_explainability_job_input}
  */
  readonly modelExplainabilityJobInput: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput;
  /**
  * The output configuration for monitoring jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#model_explainability_job_output_config DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#model_explainability_job_output_config}
  */
  readonly modelExplainabilityJobOutputConfig: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig;
  /**
  * Networking options for a model explainability job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#network_config DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#network_config}
  */
  readonly networkConfig?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#role_arn DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * A time limit for how long the monitoring job is allowed to run before stopping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#stopping_condition DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#stopping_condition}
  */
  readonly stoppingCondition?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition;
  /**
  * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags (https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the Amazon Web Services Billing and Cost Management User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_definition_name: cdktf.stringToTerraform(struct!.jobDefinitionName),
    job_resources: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesToTerraform(struct!.jobResources),
    model_explainability_app_specification: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecificationToTerraform(struct!.modelExplainabilityAppSpecification),
    model_explainability_baseline_config: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigToTerraform(struct!.modelExplainabilityBaselineConfig),
    model_explainability_job_input: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputToTerraform(struct!.modelExplainabilityJobInput),
    model_explainability_job_output_config: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigToTerraform(struct!.modelExplainabilityJobOutputConfig),
    network_config: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigToTerraform(struct!.networkConfig),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stopping_condition: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingConditionToTerraform(struct!.stoppingCondition),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_definition_name: {
      value: cdktf.stringToHclTerraform(struct!.jobDefinitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_resources: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesToHclTerraform(struct!.jobResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources",
    },
    model_explainability_app_specification: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecificationToHclTerraform(struct!.modelExplainabilityAppSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification",
    },
    model_explainability_baseline_config: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigToHclTerraform(struct!.modelExplainabilityBaselineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig",
    },
    model_explainability_job_input: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputToHclTerraform(struct!.modelExplainabilityJobInput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput",
    },
    model_explainability_job_output_config: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigToHclTerraform(struct!.modelExplainabilityJobOutputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig",
    },
    network_config: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stopping_condition: {
      value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingConditionToHclTerraform(struct!.stoppingCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobDefinitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDefinitionName = this._jobDefinitionName;
    }
    if (this._jobResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobResources = this._jobResources?.internalValue;
    }
    if (this._modelExplainabilityAppSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelExplainabilityAppSpecification = this._modelExplainabilityAppSpecification?.internalValue;
    }
    if (this._modelExplainabilityBaselineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelExplainabilityBaselineConfig = this._modelExplainabilityBaselineConfig?.internalValue;
    }
    if (this._modelExplainabilityJobInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelExplainabilityJobInput = this._modelExplainabilityJobInput?.internalValue;
    }
    if (this._modelExplainabilityJobOutputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelExplainabilityJobOutputConfig = this._modelExplainabilityJobOutputConfig?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobDefinitionName = undefined;
      this._jobResources.internalValue = undefined;
      this._modelExplainabilityAppSpecification.internalValue = undefined;
      this._modelExplainabilityBaselineConfig.internalValue = undefined;
      this._modelExplainabilityJobInput.internalValue = undefined;
      this._modelExplainabilityJobOutputConfig.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
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
      this._jobDefinitionName = value.jobDefinitionName;
      this._jobResources.internalValue = value.jobResources;
      this._modelExplainabilityAppSpecification.internalValue = value.modelExplainabilityAppSpecification;
      this._modelExplainabilityBaselineConfig.internalValue = value.modelExplainabilityBaselineConfig;
      this._modelExplainabilityJobInput.internalValue = value.modelExplainabilityJobInput;
      this._modelExplainabilityJobOutputConfig.internalValue = value.modelExplainabilityJobOutputConfig;
      this._networkConfig.internalValue = value.networkConfig;
      this._roleArn = value.roleArn;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tags.internalValue = value.tags;
    }
  }

  // job_definition_name - computed: false, optional: false, required: true
  private _jobDefinitionName?: string; 
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }
  public set jobDefinitionName(value: string) {
    this._jobDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionNameInput() {
    return this._jobDefinitionName;
  }

  // job_resources - computed: false, optional: false, required: true
  private _jobResources = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResourcesOutputReference(this, "job_resources");
  public get jobResources() {
    return this._jobResources;
  }
  public putJobResources(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecJobResources) {
    this._jobResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobResourcesInput() {
    return this._jobResources.internalValue;
  }

  // model_explainability_app_specification - computed: false, optional: false, required: true
  private _modelExplainabilityAppSpecification = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecificationOutputReference(this, "model_explainability_app_specification");
  public get modelExplainabilityAppSpecification() {
    return this._modelExplainabilityAppSpecification;
  }
  public putModelExplainabilityAppSpecification(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityAppSpecification) {
    this._modelExplainabilityAppSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelExplainabilityAppSpecificationInput() {
    return this._modelExplainabilityAppSpecification.internalValue;
  }

  // model_explainability_baseline_config - computed: false, optional: true, required: false
  private _modelExplainabilityBaselineConfig = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfigOutputReference(this, "model_explainability_baseline_config");
  public get modelExplainabilityBaselineConfig() {
    return this._modelExplainabilityBaselineConfig;
  }
  public putModelExplainabilityBaselineConfig(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityBaselineConfig) {
    this._modelExplainabilityBaselineConfig.internalValue = value;
  }
  public resetModelExplainabilityBaselineConfig() {
    this._modelExplainabilityBaselineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelExplainabilityBaselineConfigInput() {
    return this._modelExplainabilityBaselineConfig.internalValue;
  }

  // model_explainability_job_input - computed: false, optional: false, required: true
  private _modelExplainabilityJobInput = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInputOutputReference(this, "model_explainability_job_input");
  public get modelExplainabilityJobInput() {
    return this._modelExplainabilityJobInput;
  }
  public putModelExplainabilityJobInput(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobInput) {
    this._modelExplainabilityJobInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelExplainabilityJobInputInput() {
    return this._modelExplainabilityJobInput.internalValue;
  }

  // model_explainability_job_output_config - computed: false, optional: false, required: true
  private _modelExplainabilityJobOutputConfig = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfigOutputReference(this, "model_explainability_job_output_config");
  public get modelExplainabilityJobOutputConfig() {
    return this._modelExplainabilityJobOutputConfig;
  }
  public putModelExplainabilityJobOutputConfig(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecModelExplainabilityJobOutputConfig) {
    this._modelExplainabilityJobOutputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelExplainabilityJobOutputConfigInput() {
    return this._modelExplainabilityJobOutputConfig.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
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
  private _stoppingCondition = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecStoppingCondition) {
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
  private _tags = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_model_explainability_job_definition_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsModelExplainabilityJobDefinitionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
