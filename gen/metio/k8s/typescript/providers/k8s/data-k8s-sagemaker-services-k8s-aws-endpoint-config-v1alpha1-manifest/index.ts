// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata;
  /**
  * EndpointConfigSpec defines the desired state of EndpointConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#max_concurrent_invocations_per_instance DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#max_concurrent_invocations_per_instance}
  */
  readonly maxConcurrentInvocationsPerInstance?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_invocations_per_instance: cdktf.numberToTerraform(struct!.maxConcurrentInvocationsPerInstance),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_invocations_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentInvocationsPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentInvocationsPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentInvocationsPerInstance = this._maxConcurrentInvocationsPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrentInvocationsPerInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrentInvocationsPerInstance = value.maxConcurrentInvocationsPerInstance;
    }
  }

  // max_concurrent_invocations_per_instance - computed: false, optional: true, required: false
  private _maxConcurrentInvocationsPerInstance?: number; 
  public get maxConcurrentInvocationsPerInstance() {
    return this.getNumberAttribute('max_concurrent_invocations_per_instance');
  }
  public set maxConcurrentInvocationsPerInstance(value: number) {
    this._maxConcurrentInvocationsPerInstance = value;
  }
  public resetMaxConcurrentInvocationsPerInstance() {
    this._maxConcurrentInvocationsPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentInvocationsPerInstanceInput() {
    return this._maxConcurrentInvocationsPerInstance;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#error_topic DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#error_topic}
  */
  readonly errorTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#include_inference_response_in DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#include_inference_response_in}
  */
  readonly includeInferenceResponseIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#success_topic DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#success_topic}
  */
  readonly successTopic?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_topic: cdktf.stringToTerraform(struct!.errorTopic),
    include_inference_response_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeInferenceResponseIn),
    success_topic: cdktf.stringToTerraform(struct!.successTopic),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_topic: {
      value: cdktf.stringToHclTerraform(struct!.errorTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_inference_response_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeInferenceResponseIn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    success_topic: {
      value: cdktf.stringToHclTerraform(struct!.successTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorTopic = this._errorTopic;
    }
    if (this._includeInferenceResponseIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInferenceResponseIn = this._includeInferenceResponseIn;
    }
    if (this._successTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.successTopic = this._successTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorTopic = undefined;
      this._includeInferenceResponseIn = undefined;
      this._successTopic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorTopic = value.errorTopic;
      this._includeInferenceResponseIn = value.includeInferenceResponseIn;
      this._successTopic = value.successTopic;
    }
  }

  // error_topic - computed: false, optional: true, required: false
  private _errorTopic?: string; 
  public get errorTopic() {
    return this.getStringAttribute('error_topic');
  }
  public set errorTopic(value: string) {
    this._errorTopic = value;
  }
  public resetErrorTopic() {
    this._errorTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTopicInput() {
    return this._errorTopic;
  }

  // include_inference_response_in - computed: false, optional: true, required: false
  private _includeInferenceResponseIn?: string[]; 
  public get includeInferenceResponseIn() {
    return this.getListAttribute('include_inference_response_in');
  }
  public set includeInferenceResponseIn(value: string[]) {
    this._includeInferenceResponseIn = value;
  }
  public resetIncludeInferenceResponseIn() {
    this._includeInferenceResponseIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInferenceResponseInInput() {
    return this._includeInferenceResponseIn;
  }

  // success_topic - computed: false, optional: true, required: false
  private _successTopic?: string; 
  public get successTopic() {
    return this.getStringAttribute('success_topic');
  }
  public set successTopic(value: string) {
    this._successTopic = value;
  }
  public resetSuccessTopic() {
    this._successTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successTopicInput() {
    return this._successTopic;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Specifies the configuration for notifications of inference results for asynchronous inference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#notification_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#notification_config}
  */
  readonly notificationConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#s3_failure_path DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#s3_failure_path}
  */
  readonly s3FailurePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    notification_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct!.notificationConfig),
    s3_failure_path: cdktf.stringToTerraform(struct!.s3FailurePath),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig | cdktf.IResolvable): any {
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
    notification_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct!.notificationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig",
    },
    s3_failure_path: {
      value: cdktf.stringToHclTerraform(struct!.s3FailurePath),
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

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    if (this._s3FailurePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FailurePath = this._s3FailurePath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._notificationConfig.internalValue = undefined;
      this._s3FailurePath = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._notificationConfig.internalValue = value.notificationConfig;
      this._s3FailurePath = value.s3FailurePath;
      this._s3OutputPath = value.s3OutputPath;
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

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // s3_failure_path - computed: false, optional: true, required: false
  private _s3FailurePath?: string; 
  public get s3FailurePath() {
    return this.getStringAttribute('s3_failure_path');
  }
  public set s3FailurePath(value: string) {
    this._s3FailurePath = value;
  }
  public resetS3FailurePath() {
    this._s3FailurePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FailurePathInput() {
    return this._s3FailurePath;
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
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig {
  /**
  * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#client_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#client_config}
  */
  readonly clientConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig;
  /**
  * Specifies the configuration for asynchronous inference invocation outputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#output_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#output_config}
  */
  readonly outputConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfigToTerraform(struct!.clientConfig),
    output_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigToTerraform(struct!.outputConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfigToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig",
    },
    output_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigToHclTerraform(struct!.outputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._outputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfig = this._outputConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = undefined;
      this._outputConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = value.clientConfig;
      this._outputConfig.internalValue = value.outputConfig;
    }
  }

  // client_config - computed: false, optional: true, required: false
  private _clientConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigClientConfig) {
    this._clientConfig.internalValue = value;
  }
  public resetClientConfig() {
    this._clientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // output_config - computed: false, optional: true, required: false
  private _outputConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  public resetOutputConfig() {
    this._outputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#csv_content_types DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#csv_content_types}
  */
  readonly csvContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#json_content_types DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#json_content_types}
  */
  readonly jsonContentTypes?: string[];
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.csvContentTypes),
    json_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonContentTypes),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.csvContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvContentTypes = this._csvContentTypes;
    }
    if (this._jsonContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonContentTypes = this._jsonContentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csvContentTypes = undefined;
      this._jsonContentTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csvContentTypes = value.csvContentTypes;
      this._jsonContentTypes = value.jsonContentTypes;
    }
  }

  // csv_content_types - computed: false, optional: true, required: false
  private _csvContentTypes?: string[]; 
  public get csvContentTypes() {
    return this.getListAttribute('csv_content_types');
  }
  public set csvContentTypes(value: string[]) {
    this._csvContentTypes = value;
  }
  public resetCsvContentTypes() {
    this._csvContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvContentTypesInput() {
    return this._csvContentTypes;
  }

  // json_content_types - computed: false, optional: true, required: false
  private _jsonContentTypes?: string[]; 
  public get jsonContentTypes() {
    return this.getListAttribute('json_content_types');
  }
  public set jsonContentTypes(value: string[]) {
    this._jsonContentTypes = value;
  }
  public resetJsonContentTypes() {
    this._jsonContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonContentTypesInput() {
    return this._jsonContentTypes;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#capture_mode DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#capture_mode}
  */
  readonly captureMode?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureMode = value.captureMode;
    }
  }

  // capture_mode - computed: false, optional: true, required: false
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  public resetCaptureMode() {
    this._captureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig {
  /**
  * Configuration specifying how to treat different headers. If no headers are specified Amazon SageMaker will by default base64 encode when capturing the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#capture_content_type_header DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#capture_content_type_header}
  */
  readonly captureContentTypeHeader?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#capture_options DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#capture_options}
  */
  readonly captureOptions?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#destination_s3_uri DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#destination_s3_uri}
  */
  readonly destinationS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#enable_capture DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#enable_capture}
  */
  readonly enableCapture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#initial_sampling_percentage DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#initial_sampling_percentage}
  */
  readonly initialSamplingPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_content_type_header: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct!.captureContentTypeHeader),
    capture_options: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsToTerraform, false)(struct!.captureOptions),
    destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
    enable_capture: cdktf.booleanToTerraform(struct!.enableCapture),
    initial_sampling_percentage: cdktf.numberToTerraform(struct!.initialSamplingPercentage),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_content_type_header: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct!.captureContentTypeHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader",
    },
    capture_options: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsToHclTerraform, false)(struct!.captureOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsList",
    },
    destination_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_capture: {
      value: cdktf.booleanToHclTerraform(struct!.enableCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_sampling_percentage: {
      value: cdktf.numberToHclTerraform(struct!.initialSamplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureContentTypeHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureContentTypeHeader = this._captureContentTypeHeader?.internalValue;
    }
    if (this._captureOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureOptions = this._captureOptions?.internalValue;
    }
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._enableCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCapture = this._enableCapture;
    }
    if (this._initialSamplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSamplingPercentage = this._initialSamplingPercentage;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureContentTypeHeader.internalValue = undefined;
      this._captureOptions.internalValue = undefined;
      this._destinationS3Uri = undefined;
      this._enableCapture = undefined;
      this._initialSamplingPercentage = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureContentTypeHeader.internalValue = value.captureContentTypeHeader;
      this._captureOptions.internalValue = value.captureOptions;
      this._destinationS3Uri = value.destinationS3Uri;
      this._enableCapture = value.enableCapture;
      this._initialSamplingPercentage = value.initialSamplingPercentage;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // capture_content_type_header - computed: false, optional: true, required: false
  private _captureContentTypeHeader = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeaderOutputReference(this, "capture_content_type_header");
  public get captureContentTypeHeader() {
    return this._captureContentTypeHeader;
  }
  public putCaptureContentTypeHeader(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureContentTypeHeader) {
    this._captureContentTypeHeader.internalValue = value;
  }
  public resetCaptureContentTypeHeader() {
    this._captureContentTypeHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureContentTypeHeaderInput() {
    return this._captureContentTypeHeader.internalValue;
  }

  // capture_options - computed: false, optional: true, required: false
  private _captureOptions = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptionsList(this, "capture_options", false);
  public get captureOptions() {
    return this._captureOptions;
  }
  public putCaptureOptions(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigCaptureOptions[] | cdktf.IResolvable) {
    this._captureOptions.internalValue = value;
  }
  public resetCaptureOptions() {
    this._captureOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureOptionsInput() {
    return this._captureOptions.internalValue;
  }

  // destination_s3_uri - computed: false, optional: true, required: false
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  public resetDestinationS3Uri() {
    this._destinationS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
  }

  // enable_capture - computed: false, optional: true, required: false
  private _enableCapture?: boolean | cdktf.IResolvable; 
  public get enableCapture() {
    return this.getBooleanAttribute('enable_capture');
  }
  public set enableCapture(value: boolean | cdktf.IResolvable) {
    this._enableCapture = value;
  }
  public resetEnableCapture() {
    this._enableCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCaptureInput() {
    return this._enableCapture;
  }

  // initial_sampling_percentage - computed: false, optional: true, required: false
  private _initialSamplingPercentage?: number; 
  public get initialSamplingPercentage() {
    return this.getNumberAttribute('initial_sampling_percentage');
  }
  public set initialSamplingPercentage(value: number) {
    this._initialSamplingPercentage = value;
  }
  public resetInitialSamplingPercentage() {
    this._initialSamplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSamplingPercentageInput() {
    return this._initialSamplingPercentage;
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
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#destination_s3_uri DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#destination_s3_uri}
  */
  readonly destinationS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationS3Uri),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationS3Uri = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationS3Uri = value.destinationS3Uri;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // destination_s3_uri - computed: false, optional: true, required: false
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  public resetDestinationS3Uri() {
    this._destinationS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
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
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#max_instance_count DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#min_instance_count DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#status DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScalingToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScalingToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
      this._status = value.status;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#routing_strategy DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#routing_strategy}
  */
  readonly routingStrategy?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_strategy: cdktf.stringToTerraform(struct!.routingStrategy),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.routingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingStrategy = this._routingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingStrategy = value.routingStrategy;
    }
  }

  // routing_strategy - computed: false, optional: true, required: false
  private _routingStrategy?: string; 
  public get routingStrategy() {
    return this.getStringAttribute('routing_strategy');
  }
  public set routingStrategy(value: string) {
    this._routingStrategy = value;
  }
  public resetRoutingStrategy() {
    this._routingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStrategyInput() {
    return this._routingStrategy;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#max_concurrency DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#memory_size_in_mb DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#memory_size_in_mb}
  */
  readonly memorySizeInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#provisioned_concurrency DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#provisioned_concurrency}
  */
  readonly provisionedConcurrency?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    memory_size_in_mb: cdktf.numberToTerraform(struct!.memorySizeInMb),
    provisioned_concurrency: cdktf.numberToTerraform(struct!.provisionedConcurrency),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_size_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.provisionedConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memorySizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeInMb = this._memorySizeInMb;
    }
    if (this._provisionedConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConcurrency = this._provisionedConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrency = undefined;
      this._memorySizeInMb = undefined;
      this._provisionedConcurrency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrency = value.maxConcurrency;
      this._memorySizeInMb = value.memorySizeInMb;
      this._provisionedConcurrency = value.provisionedConcurrency;
    }
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_size_in_mb - computed: false, optional: true, required: false
  private _memorySizeInMb?: number; 
  public get memorySizeInMb() {
    return this.getNumberAttribute('memory_size_in_mb');
  }
  public set memorySizeInMb(value: number) {
    this._memorySizeInMb = value;
  }
  public resetMemorySizeInMb() {
    this._memorySizeInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInMbInput() {
    return this._memorySizeInMb;
  }

  // provisioned_concurrency - computed: false, optional: true, required: false
  private _provisionedConcurrency?: number; 
  public get provisionedConcurrency() {
    return this.getNumberAttribute('provisioned_concurrency');
  }
  public set provisionedConcurrency(value: number) {
    this._provisionedConcurrency = value;
  }
  public resetProvisionedConcurrency() {
    this._provisionedConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrencyInput() {
    return this._provisionedConcurrency;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#accelerator_type DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#container_startup_health_check_timeout_in_seconds DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Specifies configuration for a core dump from the model container when the process crashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#core_dump_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#core_dump_config}
  */
  readonly coreDumpConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#enable_ssm_access DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#enable_ssm_access}
  */
  readonly enableSsmAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#initial_instance_count DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#initial_instance_count}
  */
  readonly initialInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#initial_variant_weight DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#initial_variant_weight}
  */
  readonly initialVariantWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#managed_instance_scaling DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#managed_instance_scaling}
  */
  readonly managedInstanceScaling?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#model_data_download_timeout_in_seconds DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#model_name DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#model_name}
  */
  readonly modelName?: string;
  /**
  * Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#routing_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#routing_config}
  */
  readonly routingConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig;
  /**
  * Specifies the serverless configuration for an endpoint variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#serverless_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#serverless_config}
  */
  readonly serverlessConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#variant_name DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#variant_name}
  */
  readonly variantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    container_startup_health_check_timeout_in_seconds: cdktf.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    core_dump_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfigToTerraform(struct!.coreDumpConfig),
    enable_ssm_access: cdktf.booleanToTerraform(struct!.enableSsmAccess),
    initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
    initial_variant_weight: cdktf.numberToTerraform(struct!.initialVariantWeight),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    managed_instance_scaling: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScalingToTerraform(struct!.managedInstanceScaling),
    model_data_download_timeout_in_seconds: cdktf.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    routing_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfigToTerraform(struct!.routingConfig),
    serverless_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfigToTerraform(struct!.serverlessConfig),
    variant_name: cdktf.stringToTerraform(struct!.variantName),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_startup_health_check_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    core_dump_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfigToHclTerraform(struct!.coreDumpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig",
    },
    enable_ssm_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsmAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_variant_weight: {
      value: cdktf.numberToHclTerraform(struct!.initialVariantWeight),
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
    managed_instance_scaling: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScalingToHclTerraform(struct!.managedInstanceScaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfigToHclTerraform(struct!.routingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig",
    },
    serverless_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfigToHclTerraform(struct!.serverlessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig",
    },
    variant_name: {
      value: cdktf.stringToHclTerraform(struct!.variantName),
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

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._coreDumpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDumpConfig = this._coreDumpConfig?.internalValue;
    }
    if (this._enableSsmAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsmAccess = this._enableSsmAccess;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._initialVariantWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialVariantWeight = this._initialVariantWeight;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._managedInstanceScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceScaling = this._managedInstanceScaling?.internalValue;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._routingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingConfig = this._routingConfig?.internalValue;
    }
    if (this._serverlessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessConfig = this._serverlessConfig?.internalValue;
    }
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._coreDumpConfig.internalValue = undefined;
      this._enableSsmAccess = undefined;
      this._initialInstanceCount = undefined;
      this._initialVariantWeight = undefined;
      this._instanceType = undefined;
      this._managedInstanceScaling.internalValue = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
      this._modelName = undefined;
      this._routingConfig.internalValue = undefined;
      this._serverlessConfig.internalValue = undefined;
      this._variantName = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._coreDumpConfig.internalValue = value.coreDumpConfig;
      this._enableSsmAccess = value.enableSsmAccess;
      this._initialInstanceCount = value.initialInstanceCount;
      this._initialVariantWeight = value.initialVariantWeight;
      this._instanceType = value.instanceType;
      this._managedInstanceScaling.internalValue = value.managedInstanceScaling;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
      this._modelName = value.modelName;
      this._routingConfig.internalValue = value.routingConfig;
      this._serverlessConfig.internalValue = value.serverlessConfig;
      this._variantName = value.variantName;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // container_startup_health_check_timeout_in_seconds - computed: false, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // core_dump_config - computed: false, optional: true, required: false
  private _coreDumpConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfigOutputReference(this, "core_dump_config");
  public get coreDumpConfig() {
    return this._coreDumpConfig;
  }
  public putCoreDumpConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsCoreDumpConfig) {
    this._coreDumpConfig.internalValue = value;
  }
  public resetCoreDumpConfig() {
    this._coreDumpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDumpConfigInput() {
    return this._coreDumpConfig.internalValue;
  }

  // enable_ssm_access - computed: false, optional: true, required: false
  private _enableSsmAccess?: boolean | cdktf.IResolvable; 
  public get enableSsmAccess() {
    return this.getBooleanAttribute('enable_ssm_access');
  }
  public set enableSsmAccess(value: boolean | cdktf.IResolvable) {
    this._enableSsmAccess = value;
  }
  public resetEnableSsmAccess() {
    this._enableSsmAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmAccessInput() {
    return this._enableSsmAccess;
  }

  // initial_instance_count - computed: false, optional: true, required: false
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  public resetInitialInstanceCount() {
    this._initialInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // initial_variant_weight - computed: false, optional: true, required: false
  private _initialVariantWeight?: number; 
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }
  public set initialVariantWeight(value: number) {
    this._initialVariantWeight = value;
  }
  public resetInitialVariantWeight() {
    this._initialVariantWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVariantWeightInput() {
    return this._initialVariantWeight;
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

  // managed_instance_scaling - computed: false, optional: true, required: false
  private _managedInstanceScaling = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScalingOutputReference(this, "managed_instance_scaling");
  public get managedInstanceScaling() {
    return this._managedInstanceScaling;
  }
  public putManagedInstanceScaling(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsManagedInstanceScaling) {
    this._managedInstanceScaling.internalValue = value;
  }
  public resetManagedInstanceScaling() {
    this._managedInstanceScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceScalingInput() {
    return this._managedInstanceScaling.internalValue;
  }

  // model_data_download_timeout_in_seconds - computed: false, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfigOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsRoutingConfig) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // serverless_config - computed: false, optional: true, required: false
  private _serverlessConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsServerlessConfig) {
    this._serverlessConfig.internalValue = value;
  }
  public resetServerlessConfig() {
    this._serverlessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigInput() {
    return this._serverlessConfig.internalValue;
  }

  // variant_name - computed: false, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
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

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec {
  /**
  * Specifies configuration for how an endpoint performs asynchronous inference. This is a required field in order for your Endpoint to be invoked using InvokeEndpointAsync (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpointAsync.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#async_inference_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#async_inference_config}
  */
  readonly asyncInferenceConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig;
  /**
  * Configuration to control how SageMaker captures inference data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#data_capture_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#data_capture_config}
  */
  readonly dataCaptureConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig;
  /**
  * Sets whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * The name of the endpoint configuration. You specify this name in a CreateEndpoint (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html) request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#endpoint_config_name DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#endpoint_config_name}
  */
  readonly endpointConfigName: string;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform actions on your behalf. For more information, see SageMaker Roles (https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html). To be able to pass this role to Amazon SageMaker, the caller of this action must have the iam:PassRole permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#execution_role_arn DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The KmsKeyId can be any of the following formats: * Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab * Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab * Alias name: alias/ExampleAlias * Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias The KMS key policy must grant permission to the IAM role that you specify in your CreateEndpoint, UpdateEndpoint requests. For more information, refer to the Amazon Web Services Key Management Service section Using Key Policies in Amazon Web Services KMS (https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a KmsKeyId when using an instance type with local storage. If any of the models that you specify in the ProductionVariants parameter use nitro-based instances with local storage, do not specify a value for the KmsKeyId parameter. If you specify a value for KmsKeyId when using any nitro-based instances with local storage, the call to CreateEndpointConfig fails. For a list of instance types that support local instance storage, see Instance Store Volumes (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes). For more information about local instance storage encryption, see SSD Instance Store Volumes (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * An array of ProductionVariant objects, one for each model that you want to host at this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#production_variants DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#production_variants}
  */
  readonly productionVariants: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants[] | cdktf.IResolvable;
  /**
  * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC (https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async_inference_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigToTerraform(struct!.asyncInferenceConfig),
    data_capture_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigToTerraform(struct!.dataCaptureConfig),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    endpoint_config_name: cdktf.stringToTerraform(struct!.endpointConfigName),
    execution_role_arn: cdktf.stringToTerraform(struct!.executionRoleArn),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    production_variants: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsToTerraform, false)(struct!.productionVariants),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_config: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async_inference_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigToHclTerraform(struct!.asyncInferenceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig",
    },
    data_capture_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigToHclTerraform(struct!.dataCaptureConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig",
    },
    enable_network_isolation: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_config_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.executionRoleArn),
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
    production_variants: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsToHclTerraform, false)(struct!.productionVariants),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsList",
    },
    vpc_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asyncInferenceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInferenceConfig = this._asyncInferenceConfig?.internalValue;
    }
    if (this._dataCaptureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCaptureConfig = this._dataCaptureConfig?.internalValue;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._endpointConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointConfigName = this._endpointConfigName;
    }
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._productionVariants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionVariants = this._productionVariants?.internalValue;
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asyncInferenceConfig.internalValue = undefined;
      this._dataCaptureConfig.internalValue = undefined;
      this._enableNetworkIsolation = undefined;
      this._endpointConfigName = undefined;
      this._executionRoleArn = undefined;
      this._kmsKeyId = undefined;
      this._productionVariants.internalValue = undefined;
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
      this._asyncInferenceConfig.internalValue = value.asyncInferenceConfig;
      this._dataCaptureConfig.internalValue = value.dataCaptureConfig;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._endpointConfigName = value.endpointConfigName;
      this._executionRoleArn = value.executionRoleArn;
      this._kmsKeyId = value.kmsKeyId;
      this._productionVariants.internalValue = value.productionVariants;
      this._tags.internalValue = value.tags;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // async_inference_config - computed: false, optional: true, required: false
  private _asyncInferenceConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfigOutputReference(this, "async_inference_config");
  public get asyncInferenceConfig() {
    return this._asyncInferenceConfig;
  }
  public putAsyncInferenceConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecAsyncInferenceConfig) {
    this._asyncInferenceConfig.internalValue = value;
  }
  public resetAsyncInferenceConfig() {
    this._asyncInferenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInferenceConfigInput() {
    return this._asyncInferenceConfig.internalValue;
  }

  // data_capture_config - computed: false, optional: true, required: false
  private _dataCaptureConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfigOutputReference(this, "data_capture_config");
  public get dataCaptureConfig() {
    return this._dataCaptureConfig;
  }
  public putDataCaptureConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecDataCaptureConfig) {
    this._dataCaptureConfig.internalValue = value;
  }
  public resetDataCaptureConfig() {
    this._dataCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCaptureConfigInput() {
    return this._dataCaptureConfig.internalValue;
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

  // endpoint_config_name - computed: false, optional: false, required: true
  private _endpointConfigName?: string; 
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }
  public set endpointConfigName(value: string) {
    this._endpointConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigNameInput() {
    return this._endpointConfigName;
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

  // production_variants - computed: false, optional: false, required: true
  private _productionVariants = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariantsList(this, "production_variants", false);
  public get productionVariants() {
    return this._productionVariants;
  }
  public putProductionVariants(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecProductionVariants[] | cdktf.IResolvable) {
    this._productionVariants.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionVariantsInput() {
    return this._productionVariants.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecVpcConfig) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_endpoint_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
