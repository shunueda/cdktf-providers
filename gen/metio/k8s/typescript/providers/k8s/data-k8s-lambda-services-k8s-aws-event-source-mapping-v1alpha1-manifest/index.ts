// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#metadata DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata;
  /**
  * EventSourceMappingSpec defines the desired state of EventSourceMapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#spec DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec;
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#annotations DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#labels DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#consumer_group_id DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#consumer_group_id}
  */
  readonly consumerGroupId?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_group_id: cdktf.stringToTerraform(struct!.consumerGroupId),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerGroupId = value.consumerGroupId;
    }
  }

  // consumer_group_id - computed: false, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#destination DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#destination}
  */
  readonly destination?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailureToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailureToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#destination DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#destination}
  */
  readonly destination?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccessToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccessToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig {
  /**
  * A destination for events that failed processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#on_failure DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#on_failure}
  */
  readonly onFailure?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure;
  /**
  * A destination for events that were processed successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#on_success DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#on_success}
  */
  readonly onSuccess?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailureToTerraform(struct!.onFailure),
    on_success: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccessToTerraform(struct!.onSuccess),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure",
    },
    on_success: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccessToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig | cdktf.IResolvable | undefined) {
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
  private _onFailure = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnFailure) {
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
  private _onSuccess = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOnSuccess) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefFrom) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#pattern DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersOutputReference {
    return new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#filters DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#filters}
  */
  readonly filters?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters[] | cdktf.IResolvable;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersToTerraform, false)(struct!.filters),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefFrom) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsFrom) {
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

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsOutputReference {
    return new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#maximum_concurrency DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#maximum_concurrency}
  */
  readonly maximumConcurrency?: number;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_concurrency: cdktf.numberToTerraform(struct!.maximumConcurrency),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maximumConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumConcurrency = this._maximumConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumConcurrency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumConcurrency = value.maximumConcurrency;
    }
  }

  // maximum_concurrency - computed: false, optional: true, required: false
  private _maximumConcurrency?: number; 
  public get maximumConcurrency() {
    return this.getNumberAttribute('maximum_concurrency');
  }
  public set maximumConcurrency(value: number) {
    this._maximumConcurrency = value;
  }
  public resetMaximumConcurrency() {
    this._maximumConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrencyInput() {
    return this._maximumConcurrency;
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#endpoints DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#endpoints}
  */
  readonly endpoints?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSourceToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.endpoints),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSourceToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.endpoints),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
    }
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get endpoints() {
    return this.interpolationForAttribute('endpoints');
  }
  public set endpoints(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#consumer_group_id DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#consumer_group_id}
  */
  readonly consumerGroupId?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_group_id: cdktf.stringToTerraform(struct!.consumerGroupId),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerGroupId = value.consumerGroupId;
    }
  }

  // consumer_group_id - computed: false, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#type_ DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#u_ri DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#u_ri}
  */
  readonly uRi?: string;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    u_ri: cdktf.stringToTerraform(struct!.uRi),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    u_ri: {
      value: cdktf.stringToHclTerraform(struct!.uRi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uRi !== undefined) {
      hasAnyValues = true;
      internalValueResult.uRi = this._uRi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._uRi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._uRi = value.uRi;
    }
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

  // u_ri - computed: false, optional: true, required: false
  private _uRi?: string; 
  public get uRi() {
    return this.getStringAttribute('u_ri');
  }
  public set uRi(value: string) {
    this._uRi = value;
  }
  public resetURi() {
    this._uRi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uRiInput() {
    return this._uRi;
  }
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsOutputReference {
    return new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec {
  /**
  * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#amazon_managed_kafka_event_source_config DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#amazon_managed_kafka_event_source_config}
  */
  readonly amazonManagedKafkaEventSourceConfig?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig;
  /**
  * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB). * Amazon Kinesis – Default 100. Max 10,000. * Amazon DynamoDB Streams – Default 100. Max 10,000. * Amazon Simple Queue Service – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10. * Amazon Managed Streaming for Apache Kafka – Default 100. Max 10,000. * Self-managed Apache Kafka – Default 100. Max 10,000. * Amazon MQ (ActiveMQ and RabbitMQ) – Default 100. Max 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#batch_size DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * (Streams only) If the function returns an error, split the batch in two and retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#bisect_batch_on_function_error DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#bisect_batch_on_function_error}
  */
  readonly bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
  /**
  * (Streams only) An Amazon SQS queue or Amazon SNS topic destination for discarded records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#destination_config DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#destination_config}
  */
  readonly destinationConfig?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig;
  /**
  * When true, the event source mapping is active. When false, Lambda pauses polling and invocation. Default: True
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#enabled DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the event source. * Amazon Kinesis – The ARN of the data stream or a stream consumer. * Amazon DynamoDB Streams – The ARN of the stream. * Amazon Simple Queue Service – The ARN of the queue. * Amazon Managed Streaming for Apache Kafka – The ARN of the cluster. * Amazon MQ – The ARN of the broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#event_source_arn DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#event_source_arn}
  */
  readonly eventSourceArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#event_source_ref DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#event_source_ref}
  */
  readonly eventSourceRef?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef;
  /**
  * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see Lambda event filtering (https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#filter_criteria DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#filter_criteria}
  */
  readonly filterCriteria?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria;
  /**
  * The name of the Lambda function. Name formats * Function name – MyFunction. * Function ARN – arn:aws:lambda:us-west-2:123456789012:function:MyFunction. * Version or Alias ARN – arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD. * Partial ARN – 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#function_name DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#function_ref DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#function_ref}
  */
  readonly functionRef?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef;
  /**
  * (Streams and Amazon SQS) A list of current response type enums applied to the event source mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#function_response_types DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#function_response_types}
  */
  readonly functionResponseTypes?: string[];
  /**
  * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure MaximumBatchingWindowInSeconds to any value from 0 seconds to 300 seconds in increments of seconds. For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, and Amazon MQ event sources, the default batching window is 500 ms. Note that because you can only change MaximumBatchingWindowInSeconds in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping. Related setting: For streams and Amazon SQS event sources, when you set BatchSize to a value greater than 10, you must set MaximumBatchingWindowInSeconds to at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#maximum_batching_window_in_seconds DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * (Streams only) Discard records older than the specified age. The default value is infinite (-1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#maximum_record_age_in_seconds DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * (Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#maximum_retry_attempts DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * (Streams only) The number of batches to process from each shard concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#parallelization_factor DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#queue_refs DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#queue_refs}
  */
  readonly queueRefs?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs[] | cdktf.IResolvable;
  /**
  * (MQ) The name of the Amazon MQ broker destination queue to consume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#queues DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#queues}
  */
  readonly queues?: string[];
  /**
  * (Amazon SQS only) The scaling configuration for the event source. For more information, see Configuring maximum concurrency for Amazon SQS event sources (https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#scaling_config DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#scaling_config}
  */
  readonly scalingConfig?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig;
  /**
  * The self-managed Apache Kafka cluster to receive records from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#self_managed_event_source DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#self_managed_event_source}
  */
  readonly selfManagedEventSource?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource;
  /**
  * Specific configuration settings for a self-managed Apache Kafka event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#self_managed_kafka_event_source_config DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#self_managed_kafka_event_source_config}
  */
  readonly selfManagedKafkaEventSourceConfig?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig;
  /**
  * An array of authentication protocols or VPC components required to secure your event source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#source_access_configurations DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#source_access_configurations}
  */
  readonly sourceAccessConfigurations?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations[] | cdktf.IResolvable;
  /**
  * The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams sources. AT_TIMESTAMP is supported only for Amazon Kinesis streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#starting_position DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * With StartingPosition set to AT_TIMESTAMP, the time from which to start reading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#starting_position_timestamp DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#starting_position_timestamp}
  */
  readonly startingPositionTimestamp?: string;
  /**
  * The name of the Kafka topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#topics DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#topics}
  */
  readonly topics?: string[];
  /**
  * (Streams only) The duration in seconds of a processing window. The range is between 1 second and 900 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#tumbling_window_in_seconds DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest#tumbling_window_in_seconds}
  */
  readonly tumblingWindowInSeconds?: number;
}

export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_managed_kafka_event_source_config: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfigToTerraform(struct!.amazonManagedKafkaEventSourceConfig),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    bisect_batch_on_function_error: cdktf.booleanToTerraform(struct!.bisectBatchOnFunctionError),
    destination_config: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigToTerraform(struct!.destinationConfig),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    event_source_arn: cdktf.stringToTerraform(struct!.eventSourceArn),
    event_source_ref: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefToTerraform(struct!.eventSourceRef),
    filter_criteria: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaToTerraform(struct!.filterCriteria),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    function_ref: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefToTerraform(struct!.functionRef),
    function_response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionResponseTypes),
    maximum_batching_window_in_seconds: cdktf.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    maximum_record_age_in_seconds: cdktf.numberToTerraform(struct!.maximumRecordAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
    parallelization_factor: cdktf.numberToTerraform(struct!.parallelizationFactor),
    queue_refs: cdktf.listMapper(dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsToTerraform, false)(struct!.queueRefs),
    queues: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queues),
    scaling_config: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfigToTerraform(struct!.scalingConfig),
    self_managed_event_source: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSourceToTerraform(struct!.selfManagedEventSource),
    self_managed_kafka_event_source_config: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfigToTerraform(struct!.selfManagedKafkaEventSourceConfig),
    source_access_configurations: cdktf.listMapper(dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsToTerraform, false)(struct!.sourceAccessConfigurations),
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
    starting_position_timestamp: cdktf.stringToTerraform(struct!.startingPositionTimestamp),
    topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topics),
    tumbling_window_in_seconds: cdktf.numberToTerraform(struct!.tumblingWindowInSeconds),
  }
}


export function dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_managed_kafka_event_source_config: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfigToHclTerraform(struct!.amazonManagedKafkaEventSourceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bisect_batch_on_function_error: {
      value: cdktf.booleanToHclTerraform(struct!.bisectBatchOnFunctionError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_config: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigToHclTerraform(struct!.destinationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_source_arn: {
      value: cdktf.stringToHclTerraform(struct!.eventSourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_source_ref: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefToHclTerraform(struct!.eventSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef",
    },
    filter_criteria: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaToHclTerraform(struct!.filterCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_ref: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefToHclTerraform(struct!.functionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef",
    },
    function_response_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functionResponseTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_batching_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_record_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumRecordAgeInSeconds),
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
    parallelization_factor: {
      value: cdktf.numberToHclTerraform(struct!.parallelizationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_refs: {
      value: cdktf.listMapperHcl(dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsToHclTerraform, false)(struct!.queueRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsList",
    },
    queues: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scaling_config: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfigToHclTerraform(struct!.scalingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig",
    },
    self_managed_event_source: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSourceToHclTerraform(struct!.selfManagedEventSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource",
    },
    self_managed_kafka_event_source_config: {
      value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfigToHclTerraform(struct!.selfManagedKafkaEventSourceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig",
    },
    source_access_configurations: {
      value: cdktf.listMapperHcl(dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsToHclTerraform, false)(struct!.sourceAccessConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsList",
    },
    starting_position: {
      value: cdktf.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_position_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.startingPositionTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tumbling_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tumblingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonManagedKafkaEventSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonManagedKafkaEventSourceConfig = this._amazonManagedKafkaEventSourceConfig?.internalValue;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._bisectBatchOnFunctionError !== undefined) {
      hasAnyValues = true;
      internalValueResult.bisectBatchOnFunctionError = this._bisectBatchOnFunctionError;
    }
    if (this._destinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConfig = this._destinationConfig?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._eventSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSourceArn = this._eventSourceArn;
    }
    if (this._eventSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSourceRef = this._eventSourceRef?.internalValue;
    }
    if (this._filterCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCriteria = this._filterCriteria?.internalValue;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._functionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionRef = this._functionRef?.internalValue;
    }
    if (this._functionResponseTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionResponseTypes = this._functionResponseTypes;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._maximumRecordAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRecordAgeInSeconds = this._maximumRecordAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    if (this._parallelizationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelizationFactor = this._parallelizationFactor;
    }
    if (this._queueRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueRefs = this._queueRefs?.internalValue;
    }
    if (this._queues !== undefined) {
      hasAnyValues = true;
      internalValueResult.queues = this._queues;
    }
    if (this._scalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfig = this._scalingConfig?.internalValue;
    }
    if (this._selfManagedEventSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedEventSource = this._selfManagedEventSource?.internalValue;
    }
    if (this._selfManagedKafkaEventSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedKafkaEventSourceConfig = this._selfManagedKafkaEventSourceConfig?.internalValue;
    }
    if (this._sourceAccessConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAccessConfigurations = this._sourceAccessConfigurations?.internalValue;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._startingPositionTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPositionTimestamp = this._startingPositionTimestamp;
    }
    if (this._topics !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics;
    }
    if (this._tumblingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tumblingWindowInSeconds = this._tumblingWindowInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonManagedKafkaEventSourceConfig.internalValue = undefined;
      this._batchSize = undefined;
      this._bisectBatchOnFunctionError = undefined;
      this._destinationConfig.internalValue = undefined;
      this._enabled = undefined;
      this._eventSourceArn = undefined;
      this._eventSourceRef.internalValue = undefined;
      this._filterCriteria.internalValue = undefined;
      this._functionName = undefined;
      this._functionRef.internalValue = undefined;
      this._functionResponseTypes = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._maximumRecordAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
      this._parallelizationFactor = undefined;
      this._queueRefs.internalValue = undefined;
      this._queues = undefined;
      this._scalingConfig.internalValue = undefined;
      this._selfManagedEventSource.internalValue = undefined;
      this._selfManagedKafkaEventSourceConfig.internalValue = undefined;
      this._sourceAccessConfigurations.internalValue = undefined;
      this._startingPosition = undefined;
      this._startingPositionTimestamp = undefined;
      this._topics = undefined;
      this._tumblingWindowInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonManagedKafkaEventSourceConfig.internalValue = value.amazonManagedKafkaEventSourceConfig;
      this._batchSize = value.batchSize;
      this._bisectBatchOnFunctionError = value.bisectBatchOnFunctionError;
      this._destinationConfig.internalValue = value.destinationConfig;
      this._enabled = value.enabled;
      this._eventSourceArn = value.eventSourceArn;
      this._eventSourceRef.internalValue = value.eventSourceRef;
      this._filterCriteria.internalValue = value.filterCriteria;
      this._functionName = value.functionName;
      this._functionRef.internalValue = value.functionRef;
      this._functionResponseTypes = value.functionResponseTypes;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._maximumRecordAgeInSeconds = value.maximumRecordAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
      this._parallelizationFactor = value.parallelizationFactor;
      this._queueRefs.internalValue = value.queueRefs;
      this._queues = value.queues;
      this._scalingConfig.internalValue = value.scalingConfig;
      this._selfManagedEventSource.internalValue = value.selfManagedEventSource;
      this._selfManagedKafkaEventSourceConfig.internalValue = value.selfManagedKafkaEventSourceConfig;
      this._sourceAccessConfigurations.internalValue = value.sourceAccessConfigurations;
      this._startingPosition = value.startingPosition;
      this._startingPositionTimestamp = value.startingPositionTimestamp;
      this._topics = value.topics;
      this._tumblingWindowInSeconds = value.tumblingWindowInSeconds;
    }
  }

  // amazon_managed_kafka_event_source_config - computed: false, optional: true, required: false
  private _amazonManagedKafkaEventSourceConfig = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfigOutputReference(this, "amazon_managed_kafka_event_source_config");
  public get amazonManagedKafkaEventSourceConfig() {
    return this._amazonManagedKafkaEventSourceConfig;
  }
  public putAmazonManagedKafkaEventSourceConfig(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecAmazonManagedKafkaEventSourceConfig) {
    this._amazonManagedKafkaEventSourceConfig.internalValue = value;
  }
  public resetAmazonManagedKafkaEventSourceConfig() {
    this._amazonManagedKafkaEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonManagedKafkaEventSourceConfigInput() {
    return this._amazonManagedKafkaEventSourceConfig.internalValue;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // bisect_batch_on_function_error - computed: false, optional: true, required: false
  private _bisectBatchOnFunctionError?: boolean | cdktf.IResolvable; 
  public get bisectBatchOnFunctionError() {
    return this.getBooleanAttribute('bisect_batch_on_function_error');
  }
  public set bisectBatchOnFunctionError(value: boolean | cdktf.IResolvable) {
    this._bisectBatchOnFunctionError = value;
  }
  public resetBisectBatchOnFunctionError() {
    this._bisectBatchOnFunctionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bisectBatchOnFunctionErrorInput() {
    return this._bisectBatchOnFunctionError;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_source_arn - computed: false, optional: true, required: false
  private _eventSourceArn?: string; 
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }
  public set eventSourceArn(value: string) {
    this._eventSourceArn = value;
  }
  public resetEventSourceArn() {
    this._eventSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceArnInput() {
    return this._eventSourceArn;
  }

  // event_source_ref - computed: false, optional: true, required: false
  private _eventSourceRef = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRefOutputReference(this, "event_source_ref");
  public get eventSourceRef() {
    return this._eventSourceRef;
  }
  public putEventSourceRef(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecEventSourceRef) {
    this._eventSourceRef.internalValue = value;
  }
  public resetEventSourceRef() {
    this._eventSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceRefInput() {
    return this._eventSourceRef.internalValue;
  }

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFilterCriteria) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
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
  private _functionRef = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRefOutputReference(this, "function_ref");
  public get functionRef() {
    return this._functionRef;
  }
  public putFunctionRef(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecFunctionRef) {
    this._functionRef.internalValue = value;
  }
  public resetFunctionRef() {
    this._functionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionRefInput() {
    return this._functionRef.internalValue;
  }

  // function_response_types - computed: false, optional: true, required: false
  private _functionResponseTypes?: string[]; 
  public get functionResponseTypes() {
    return this.getListAttribute('function_response_types');
  }
  public set functionResponseTypes(value: string[]) {
    this._functionResponseTypes = value;
  }
  public resetFunctionResponseTypes() {
    this._functionResponseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionResponseTypesInput() {
    return this._functionResponseTypes;
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // maximum_record_age_in_seconds - computed: false, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number; 
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds;
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

  // parallelization_factor - computed: false, optional: true, required: false
  private _parallelizationFactor?: number; 
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor;
  }

  // queue_refs - computed: false, optional: true, required: false
  private _queueRefs = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefsList(this, "queue_refs", false);
  public get queueRefs() {
    return this._queueRefs;
  }
  public putQueueRefs(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecQueueRefs[] | cdktf.IResolvable) {
    this._queueRefs.internalValue = value;
  }
  public resetQueueRefs() {
    this._queueRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueRefsInput() {
    return this._queueRefs.internalValue;
  }

  // queues - computed: false, optional: true, required: false
  private _queues?: string[]; 
  public get queues() {
    return this.getListAttribute('queues');
  }
  public set queues(value: string[]) {
    this._queues = value;
  }
  public resetQueues() {
    this._queues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuesInput() {
    return this._queues;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // self_managed_event_source - computed: false, optional: true, required: false
  private _selfManagedEventSource = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSourceOutputReference(this, "self_managed_event_source");
  public get selfManagedEventSource() {
    return this._selfManagedEventSource;
  }
  public putSelfManagedEventSource(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedEventSource) {
    this._selfManagedEventSource.internalValue = value;
  }
  public resetSelfManagedEventSource() {
    this._selfManagedEventSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedEventSourceInput() {
    return this._selfManagedEventSource.internalValue;
  }

  // self_managed_kafka_event_source_config - computed: false, optional: true, required: false
  private _selfManagedKafkaEventSourceConfig = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfigOutputReference(this, "self_managed_kafka_event_source_config");
  public get selfManagedKafkaEventSourceConfig() {
    return this._selfManagedKafkaEventSourceConfig;
  }
  public putSelfManagedKafkaEventSourceConfig(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSelfManagedKafkaEventSourceConfig) {
    this._selfManagedKafkaEventSourceConfig.internalValue = value;
  }
  public resetSelfManagedKafkaEventSourceConfig() {
    this._selfManagedKafkaEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedKafkaEventSourceConfigInput() {
    return this._selfManagedKafkaEventSourceConfig.internalValue;
  }

  // source_access_configurations - computed: false, optional: true, required: false
  private _sourceAccessConfigurations = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurationsList(this, "source_access_configurations", false);
  public get sourceAccessConfigurations() {
    return this._sourceAccessConfigurations;
  }
  public putSourceAccessConfigurations(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecSourceAccessConfigurations[] | cdktf.IResolvable) {
    this._sourceAccessConfigurations.internalValue = value;
  }
  public resetSourceAccessConfigurations() {
    this._sourceAccessConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccessConfigurationsInput() {
    return this._sourceAccessConfigurations.internalValue;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // starting_position_timestamp - computed: false, optional: true, required: false
  private _startingPositionTimestamp?: string; 
  public get startingPositionTimestamp() {
    return this.getStringAttribute('starting_position_timestamp');
  }
  public set startingPositionTimestamp(value: string) {
    this._startingPositionTimestamp = value;
  }
  public resetStartingPositionTimestamp() {
    this._startingPositionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionTimestampInput() {
    return this._startingPositionTimestamp;
  }

  // topics - computed: false, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return this.getListAttribute('topics');
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // tumbling_window_in_seconds - computed: false, optional: true, required: false
  private _tumblingWindowInSeconds?: number; 
  public get tumblingWindowInSeconds() {
    return this.getNumberAttribute('tumbling_window_in_seconds');
  }
  public set tumblingWindowInSeconds(value: number) {
    this._tumblingWindowInSeconds = value;
  }
  public resetTumblingWindowInSeconds() {
    this._tumblingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingWindowInSecondsInput() {
    return this._tumblingWindowInSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest k8s_lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest}
*/
export class DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest k8s_lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lambda_services_k8s_aws_event_source_mapping_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec) {
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
      metadata: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsEventSourceMappingV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
