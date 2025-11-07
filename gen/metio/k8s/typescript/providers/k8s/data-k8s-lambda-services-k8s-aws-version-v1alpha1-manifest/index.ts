// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#metadata DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#spec DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec;
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#annotations DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#labels DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#destination DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#destination}
  */
  readonly destination?: string;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#destination DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#destination}
  */
  readonly destination?: string;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig {
  /**
  * A destination for events that failed processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#on_failure DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#on_failure}
  */
  readonly onFailure?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure;
  /**
  * A destination for events that were processed successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#on_success DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#on_success}
  */
  readonly onSuccess?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct!.onFailure),
    on_success: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct!.onSuccess),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure",
    },
    on_success: {
      value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = value.onFailure;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig {
  /**
  * A configuration object that specifies the destination of an event after Lambda processes it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#destination_config DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#destination_config}
  */
  readonly destinationConfig?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#function_name DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#maximum_event_age_in_seconds DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#maximum_retry_attempts DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#qualifier DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#qualifier}
  */
  readonly qualifier?: string;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_config: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToTerraform(struct!.destinationConfig),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    maximum_event_age_in_seconds: cdktf.numberToTerraform(struct!.maximumEventAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_config: {
      value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToHclTerraform(struct!.destinationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_event_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumEventAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConfig = this._destinationConfig?.internalValue;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._maximumEventAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationConfig.internalValue = undefined;
      this._functionName = undefined;
      this._maximumEventAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
      this._qualifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationConfig.internalValue = value.destinationConfig;
      this._functionName = value.functionName;
      this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
      this._qualifier = value.qualifier;
    }
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds;
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

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#function_name DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#provisioned_concurrent_executions DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#provisioned_concurrent_executions}
  */
  readonly provisionedConcurrentExecutions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#qualifier DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#qualifier}
  */
  readonly qualifier?: string;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    provisioned_concurrent_executions: cdktf.numberToTerraform(struct!.provisionedConcurrentExecutions),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioned_concurrent_executions: {
      value: cdktf.numberToHclTerraform(struct!.provisionedConcurrentExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._provisionedConcurrentExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConcurrentExecutions = this._provisionedConcurrentExecutions;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._provisionedConcurrentExecutions = undefined;
      this._qualifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._provisionedConcurrentExecutions = value.provisionedConcurrentExecutions;
      this._qualifier = value.qualifier;
    }
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // provisioned_concurrent_executions - computed: false, optional: true, required: false
  private _provisionedConcurrentExecutions?: number; 
  public get provisionedConcurrentExecutions() {
    return this.getNumberAttribute('provisioned_concurrent_executions');
  }
  public set provisionedConcurrentExecutions(value: number) {
    this._provisionedConcurrentExecutions = value;
  }
  public resetProvisionedConcurrentExecutions() {
    this._provisionedConcurrentExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrentExecutionsInput() {
    return this._provisionedConcurrentExecutions;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}
export interface DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec {
  /**
  * Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of UpdateFunctionCode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#code_sha256 DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#code_sha256}
  */
  readonly codeSha256?: string;
  /**
  * A description for the version to override the description in the function configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#description DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#function_event_invoke_config DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#function_event_invoke_config}
  */
  readonly functionEventInvokeConfig?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig;
  /**
  * The name of the Lambda function. Name formats * Function name - MyFunction. * Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction. * Partial ARN - 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#function_name DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#function_ref DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#function_ref}
  */
  readonly functionRef?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#provisioned_concurrency_config DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#provisioned_concurrency_config}
  */
  readonly provisionedConcurrencyConfig?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig;
  /**
  * Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#revision_id DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest#revision_id}
  */
  readonly revisionId?: string;
}

export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_sha256: cdktf.stringToTerraform(struct!.codeSha256),
    description: cdktf.stringToTerraform(struct!.description),
    function_event_invoke_config: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigToTerraform(struct!.functionEventInvokeConfig),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    function_ref: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefToTerraform(struct!.functionRef),
    provisioned_concurrency_config: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfigToTerraform(struct!.provisionedConcurrencyConfig),
    revision_id: cdktf.stringToTerraform(struct!.revisionId),
  }
}


export function dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_sha256: {
      value: cdktf.stringToHclTerraform(struct!.codeSha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_event_invoke_config: {
      value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigToHclTerraform(struct!.functionEventInvokeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_ref: {
      value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefToHclTerraform(struct!.functionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef",
    },
    provisioned_concurrency_config: {
      value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfigToHclTerraform(struct!.provisionedConcurrencyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig",
    },
    revision_id: {
      value: cdktf.stringToHclTerraform(struct!.revisionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeSha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSha256 = this._codeSha256;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._functionEventInvokeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionEventInvokeConfig = this._functionEventInvokeConfig?.internalValue;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._functionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionRef = this._functionRef?.internalValue;
    }
    if (this._provisionedConcurrencyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConcurrencyConfig = this._provisionedConcurrencyConfig?.internalValue;
    }
    if (this._revisionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionId = this._revisionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeSha256 = undefined;
      this._description = undefined;
      this._functionEventInvokeConfig.internalValue = undefined;
      this._functionName = undefined;
      this._functionRef.internalValue = undefined;
      this._provisionedConcurrencyConfig.internalValue = undefined;
      this._revisionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeSha256 = value.codeSha256;
      this._description = value.description;
      this._functionEventInvokeConfig.internalValue = value.functionEventInvokeConfig;
      this._functionName = value.functionName;
      this._functionRef.internalValue = value.functionRef;
      this._provisionedConcurrencyConfig.internalValue = value.provisionedConcurrencyConfig;
      this._revisionId = value.revisionId;
    }
  }

  // code_sha256 - computed: false, optional: true, required: false
  private _codeSha256?: string; 
  public get codeSha256() {
    return this.getStringAttribute('code_sha256');
  }
  public set codeSha256(value: string) {
    this._codeSha256 = value;
  }
  public resetCodeSha256() {
    this._codeSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSha256Input() {
    return this._codeSha256;
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

  // function_event_invoke_config - computed: false, optional: true, required: false
  private _functionEventInvokeConfig = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfigOutputReference(this, "function_event_invoke_config");
  public get functionEventInvokeConfig() {
    return this._functionEventInvokeConfig;
  }
  public putFunctionEventInvokeConfig(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionEventInvokeConfig) {
    this._functionEventInvokeConfig.internalValue = value;
  }
  public resetFunctionEventInvokeConfig() {
    this._functionEventInvokeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionEventInvokeConfigInput() {
    return this._functionEventInvokeConfig.internalValue;
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_ref - computed: false, optional: true, required: false
  private _functionRef = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRefOutputReference(this, "function_ref");
  public get functionRef() {
    return this._functionRef;
  }
  public putFunctionRef(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecFunctionRef) {
    this._functionRef.internalValue = value;
  }
  public resetFunctionRef() {
    this._functionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionRefInput() {
    return this._functionRef.internalValue;
  }

  // provisioned_concurrency_config - computed: false, optional: true, required: false
  private _provisionedConcurrencyConfig = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfigOutputReference(this, "provisioned_concurrency_config");
  public get provisionedConcurrencyConfig() {
    return this._provisionedConcurrencyConfig;
  }
  public putProvisionedConcurrencyConfig(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecProvisionedConcurrencyConfig) {
    this._provisionedConcurrencyConfig.internalValue = value;
  }
  public resetProvisionedConcurrencyConfig() {
    this._provisionedConcurrencyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrencyConfigInput() {
    return this._provisionedConcurrencyConfig.internalValue;
  }

  // revision_id - computed: false, optional: true, required: false
  private _revisionId?: string; 
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }
  public set revisionId(value: string) {
    this._revisionId = value;
  }
  public resetRevisionId() {
    this._revisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionIdInput() {
    return this._revisionId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest k8s_lambda_services_k8s_aws_version_v1alpha1_manifest}
*/
export class DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lambda_services_k8s_aws_version_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLambdaServicesK8SAwsVersionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lambda_services_k8s_aws_version_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/lambda_services_k8s_aws_version_v1alpha1_manifest k8s_lambda_services_k8s_aws_version_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lambda_services_k8s_aws_version_v1alpha1_manifest',
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
  private _metadata = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsVersionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
