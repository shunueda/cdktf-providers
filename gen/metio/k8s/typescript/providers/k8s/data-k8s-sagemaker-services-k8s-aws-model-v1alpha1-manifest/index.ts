// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata;
  /**
  * ModelSpec defines the desired state of Model. The properties of a model as returned by the Search (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#repository_credentials_provider_arn DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#repository_credentials_provider_arn}
  */
  readonly repositoryCredentialsProviderArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_credentials_provider_arn: cdktf.stringToTerraform(struct!.repositoryCredentialsProviderArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_credentials_provider_arn: {
      value: cdktf.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryCredentialsProviderArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
    }
  }

  // repository_credentials_provider_arn - computed: false, optional: true, required: false
  private _repositoryCredentialsProviderArn?: string; 
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
  public set repositoryCredentialsProviderArn(value: string) {
    this._repositoryCredentialsProviderArn = value;
  }
  public resetRepositoryCredentialsProviderArn() {
    this._repositoryCredentialsProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsProviderArnInput() {
    return this._repositoryCredentialsProviderArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#repository_access_mode DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#repository_access_mode}
  */
  readonly repositoryAccessMode?: string;
  /**
  * Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified Vpc as the value for the RepositoryAccessMode field of the ImageConfig object that you passed to a call to CreateModel and the private Docker registry where the model image is hosted requires authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#repository_auth_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#repository_auth_config}
  */
  readonly repositoryAuthConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
    repository_auth_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfigToTerraform(struct!.repositoryAuthConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_access_mode: {
      value: cdktf.stringToHclTerraform(struct!.repositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_auth_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfigToHclTerraform(struct!.repositoryAuthConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
    }
    if (this._repositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryAccessMode = undefined;
      this._repositoryAuthConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryAccessMode = value.repositoryAccessMode;
      this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
    }
  }

  // repository_access_mode - computed: false, optional: true, required: false
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  public resetRepositoryAccessMode() {
    this._repositoryAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode;
  }

  // repository_auth_config - computed: false, optional: true, required: false
  private _repositoryAuthConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfigOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
  public putRepositoryAuthConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigRepositoryAuthConfig) {
    this._repositoryAuthConfig.internalValue = value;
  }
  public resetRepositoryAuthConfig() {
    this._repositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAuthConfigInput() {
    return this._repositoryAuthConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#accept_eula DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#accept_eula}
  */
  readonly acceptEula?: boolean | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_eula: cdktf.booleanToTerraform(struct!.acceptEula),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_eula: {
      value: cdktf.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: boolean | cdktf.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktf.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the ModelAccessConfig. * If you are a Jumpstart user, see the End-user license agreements (https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA. * If you are an AutoML user, see the Optional Parameters section of Create an AutoML job to fine-tune text generation models using the API for details on How to set the EULA acceptance when fine-tuning a model using the AutoML API (https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_access_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_access_config}
  */
  readonly modelAccessConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    model_access_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct!.modelAccessConfig),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource | cdktf.IResolvable): any {
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
    model_access_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig",
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

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._modelAccessConfig.internalValue = undefined;
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
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
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

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceModelAccessConfig) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
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
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource {
  /**
  * Specifies the S3 location of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#s3_data_source DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#s3_data_source}
  */
  readonly s3DataSource?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_source: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource | cdktf.IResolvable | undefined) {
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
  private _s3DataSource = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceS3DataSource) {
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
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_cache_setting DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_cache_setting}
  */
  readonly modelCacheSetting?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_cache_setting: cdktf.stringToTerraform(struct!.modelCacheSetting),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_cache_setting: {
      value: cdktf.stringToHclTerraform(struct!.modelCacheSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelCacheSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCacheSetting = this._modelCacheSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelCacheSetting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelCacheSetting = value.modelCacheSetting;
    }
  }

  // model_cache_setting - computed: false, optional: true, required: false
  private _modelCacheSetting?: string; 
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
  public set modelCacheSetting(value: string) {
    this._modelCacheSetting = value;
  }
  public resetModelCacheSetting() {
    this._modelCacheSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCacheSettingInput() {
    return this._modelCacheSetting;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#container_hostname DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#image DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#image_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#image_config}
  */
  readonly imageConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#inference_specification_name DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#inference_specification_name}
  */
  readonly inferenceSpecificationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#mode DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_data_source DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_data_source}
  */
  readonly modelDataSource?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_data_url DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_package_name DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * Specifies additional configuration for hosting multi-model endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#multi_model_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#multi_model_config}
  */
  readonly multiModelConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    image_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigToTerraform(struct!.imageConfig),
    inference_specification_name: cdktf.stringToTerraform(struct!.inferenceSpecificationName),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_source: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceToTerraform(struct!.modelDataSource),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    model_package_name: cdktf.stringToTerraform(struct!.modelPackageName),
    multi_model_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfigToTerraform(struct!.multiModelConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigToHclTerraform(struct!.imageConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig",
    },
    inference_specification_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceSpecificationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_source: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource",
    },
    model_data_url: {
      value: cdktf.stringToHclTerraform(struct!.modelDataUrl),
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
    multi_model_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfigToHclTerraform(struct!.multiModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfig = this._imageConfig?.internalValue;
    }
    if (this._inferenceSpecificationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageName = this._modelPackageName;
    }
    if (this._multiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._imageConfig.internalValue = undefined;
      this._inferenceSpecificationName = undefined;
      this._mode = undefined;
      this._modelDataSource.internalValue = undefined;
      this._modelDataUrl = undefined;
      this._modelPackageName = undefined;
      this._multiModelConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._image = value.image;
      this._imageConfig.internalValue = value.imageConfig;
      this._inferenceSpecificationName = value.inferenceSpecificationName;
      this._mode = value.mode;
      this._modelDataSource.internalValue = value.modelDataSource;
      this._modelDataUrl = value.modelDataUrl;
      this._modelPackageName = value.modelPackageName;
      this._multiModelConfig.internalValue = value.multiModelConfig;
    }
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

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersImageConfig) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // inference_specification_name - computed: false, optional: true, required: false
  private _inferenceSpecificationName?: string; 
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }
  public set inferenceSpecificationName(value: string) {
    this._inferenceSpecificationName = value;
  }
  public resetInferenceSpecificationName() {
    this._inferenceSpecificationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationNameInput() {
    return this._inferenceSpecificationName;
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

  // model_data_source - computed: false, optional: true, required: false
  private _modelDataSource = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersModelDataSource) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
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

  // multi_model_config - computed: false, optional: true, required: false
  private _multiModelConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfigOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
  public putMultiModelConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersMultiModelConfig) {
    this._multiModelConfig.internalValue = value;
  }
  public resetMultiModelConfig() {
    this._multiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiModelConfigInput() {
    return this._multiModelConfig.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#mode DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#repository_credentials_provider_arn DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#repository_credentials_provider_arn}
  */
  readonly repositoryCredentialsProviderArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_credentials_provider_arn: cdktf.stringToTerraform(struct!.repositoryCredentialsProviderArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_credentials_provider_arn: {
      value: cdktf.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryCredentialsProviderArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
    }
  }

  // repository_credentials_provider_arn - computed: false, optional: true, required: false
  private _repositoryCredentialsProviderArn?: string; 
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
  public set repositoryCredentialsProviderArn(value: string) {
    this._repositoryCredentialsProviderArn = value;
  }
  public resetRepositoryCredentialsProviderArn() {
    this._repositoryCredentialsProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsProviderArnInput() {
    return this._repositoryCredentialsProviderArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#repository_access_mode DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#repository_access_mode}
  */
  readonly repositoryAccessMode?: string;
  /**
  * Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified Vpc as the value for the RepositoryAccessMode field of the ImageConfig object that you passed to a call to CreateModel and the private Docker registry where the model image is hosted requires authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#repository_auth_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#repository_auth_config}
  */
  readonly repositoryAuthConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
    repository_auth_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfigToTerraform(struct!.repositoryAuthConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_access_mode: {
      value: cdktf.stringToHclTerraform(struct!.repositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_auth_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfigToHclTerraform(struct!.repositoryAuthConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
    }
    if (this._repositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryAccessMode = undefined;
      this._repositoryAuthConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryAccessMode = value.repositoryAccessMode;
      this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
    }
  }

  // repository_access_mode - computed: false, optional: true, required: false
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  public resetRepositoryAccessMode() {
    this._repositoryAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode;
  }

  // repository_auth_config - computed: false, optional: true, required: false
  private _repositoryAuthConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
  public putRepositoryAuthConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigRepositoryAuthConfig) {
    this._repositoryAuthConfig.internalValue = value;
  }
  public resetRepositoryAuthConfig() {
    this._repositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAuthConfigInput() {
    return this._repositoryAuthConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#accept_eula DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#accept_eula}
  */
  readonly acceptEula?: boolean | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_eula: cdktf.booleanToTerraform(struct!.acceptEula),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_eula: {
      value: cdktf.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: boolean | cdktf.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktf.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#compression_type DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the ModelAccessConfig. * If you are a Jumpstart user, see the End-user license agreements (https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA. * If you are an AutoML user, see the Optional Parameters section of Create an AutoML job to fine-tune text generation models using the API for details on How to set the EULA acceptance when fine-tuning a model using the AutoML API (https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_access_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_access_config}
  */
  readonly modelAccessConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#s3_data_type DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    model_access_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct!.modelAccessConfig),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable): any {
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
    model_access_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig",
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

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._modelAccessConfig.internalValue = undefined;
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
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
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

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
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
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource {
  /**
  * Specifies the S3 location of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#s3_data_source DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#s3_data_source}
  */
  readonly s3DataSource?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_source: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_data_source: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource | cdktf.IResolvable | undefined) {
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
  private _s3DataSource = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceS3DataSource) {
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
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_cache_setting DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_cache_setting}
  */
  readonly modelCacheSetting?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_cache_setting: cdktf.stringToTerraform(struct!.modelCacheSetting),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_cache_setting: {
      value: cdktf.stringToHclTerraform(struct!.modelCacheSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelCacheSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCacheSetting = this._modelCacheSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelCacheSetting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelCacheSetting = value.modelCacheSetting;
    }
  }

  // model_cache_setting - computed: false, optional: true, required: false
  private _modelCacheSetting?: string; 
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
  public set modelCacheSetting(value: string) {
    this._modelCacheSetting = value;
  }
  public resetModelCacheSetting() {
    this._modelCacheSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCacheSettingInput() {
    return this._modelCacheSetting;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#container_hostname DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#image DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#image_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#image_config}
  */
  readonly imageConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#inference_specification_name DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#inference_specification_name}
  */
  readonly inferenceSpecificationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#mode DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_data_source DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_data_source}
  */
  readonly modelDataSource?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_data_url DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_package_name DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * Specifies additional configuration for hosting multi-model endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#multi_model_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#multi_model_config}
  */
  readonly multiModelConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    image_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigToTerraform(struct!.imageConfig),
    inference_specification_name: cdktf.stringToTerraform(struct!.inferenceSpecificationName),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_source: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceToTerraform(struct!.modelDataSource),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    model_package_name: cdktf.stringToTerraform(struct!.modelPackageName),
    multi_model_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfigToTerraform(struct!.multiModelConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigToHclTerraform(struct!.imageConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig",
    },
    inference_specification_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceSpecificationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_source: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource",
    },
    model_data_url: {
      value: cdktf.stringToHclTerraform(struct!.modelDataUrl),
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
    multi_model_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfigToHclTerraform(struct!.multiModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfig = this._imageConfig?.internalValue;
    }
    if (this._inferenceSpecificationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageName = this._modelPackageName;
    }
    if (this._multiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._imageConfig.internalValue = undefined;
      this._inferenceSpecificationName = undefined;
      this._mode = undefined;
      this._modelDataSource.internalValue = undefined;
      this._modelDataUrl = undefined;
      this._modelPackageName = undefined;
      this._multiModelConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._image = value.image;
      this._imageConfig.internalValue = value.imageConfig;
      this._inferenceSpecificationName = value.inferenceSpecificationName;
      this._mode = value.mode;
      this._modelDataSource.internalValue = value.modelDataSource;
      this._modelDataUrl = value.modelDataUrl;
      this._modelPackageName = value.modelPackageName;
      this._multiModelConfig.internalValue = value.multiModelConfig;
    }
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

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerImageConfig) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // inference_specification_name - computed: false, optional: true, required: false
  private _inferenceSpecificationName?: string; 
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }
  public set inferenceSpecificationName(value: string) {
    this._inferenceSpecificationName = value;
  }
  public resetInferenceSpecificationName() {
    this._inferenceSpecificationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationNameInput() {
    return this._inferenceSpecificationName;
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

  // model_data_source - computed: false, optional: true, required: false
  private _modelDataSource = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerModelDataSource) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
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

  // multi_model_config - computed: false, optional: true, required: false
  private _multiModelConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfigOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
  public putMultiModelConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerMultiModelConfig) {
    this._multiModelConfig.internalValue = value;
  }
  public resetMultiModelConfig() {
    this._multiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiModelConfigInput() {
    return this._multiModelConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec {
  /**
  * Specifies the containers in the inference pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#containers DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers[] | cdktf.IResolvable;
  /**
  * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see SageMaker Roles (https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html). To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#execution_role_arn DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Specifies details of how containers in a multi-container endpoint are called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#inference_execution_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#inference_execution_config}
  */
  readonly inferenceExecutionConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig;
  /**
  * The name of the new model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#model_name DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#model_name}
  */
  readonly modelName: string;
  /**
  * The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#primary_container DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#primary_container}
  */
  readonly primaryContainer?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer;
  /**
  * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * A VpcConfig (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. VpcConfig is used in hosting services and in batch transform. For more information, see Protect Endpoints by Using an Amazon Virtual Private Cloud (https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud (https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersToTerraform, false)(struct!.containers),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    execution_role_arn: cdktf.stringToTerraform(struct!.executionRoleArn),
    inference_execution_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfigToTerraform(struct!.inferenceExecutionConfig),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    primary_container: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerToTerraform(struct!.primaryContainer),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_config: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersList",
    },
    enable_network_isolation: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_execution_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfigToHclTerraform(struct!.inferenceExecutionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_container: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerToHclTerraform(struct!.primaryContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsList",
    },
    vpc_config: {
      value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._inferenceExecutionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceExecutionConfig = this._inferenceExecutionConfig?.internalValue;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._primaryContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryContainer = this._primaryContainer?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableNetworkIsolation = undefined;
      this._executionRoleArn = undefined;
      this._inferenceExecutionConfig.internalValue = undefined;
      this._modelName = undefined;
      this._primaryContainer.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._executionRoleArn = value.executionRoleArn;
      this._inferenceExecutionConfig.internalValue = value.inferenceExecutionConfig;
      this._modelName = value.modelName;
      this._primaryContainer.internalValue = value.primaryContainer;
      this._tags.internalValue = value.tags;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
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

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // inference_execution_config - computed: false, optional: true, required: false
  private _inferenceExecutionConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfigOutputReference(this, "inference_execution_config");
  public get inferenceExecutionConfig() {
    return this._inferenceExecutionConfig;
  }
  public putInferenceExecutionConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecInferenceExecutionConfig) {
    this._inferenceExecutionConfig.internalValue = value;
  }
  public resetInferenceExecutionConfig() {
    this._inferenceExecutionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceExecutionConfigInput() {
    return this._inferenceExecutionConfig.internalValue;
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

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainerOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }
  public putPrimaryContainer(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecPrimaryContainer) {
    this._primaryContainer.internalValue = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecVpcConfig) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_model_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_model_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsModelV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_model_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_model_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_model_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_model_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsModelV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
