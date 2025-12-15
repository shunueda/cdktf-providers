// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#metadata DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata;
  /**
  * SubscriptionSpec defines the desired state of Subscription. A wrapper type for the attributes of an Amazon SNS subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#spec DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec;
}
export interface DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#annotations DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#labels DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom;
}

export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefToTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#delivery_policy DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#delivery_policy}
  */
  readonly deliveryPolicy?: string;
  /**
  * The endpoint that you want to receive notifications. Endpoints vary by protocol: * For the http protocol, the (public) endpoint is a URL beginning with http://. * For the https protocol, the (public) endpoint is a URL beginning with https://. * For the email protocol, the endpoint is an email address. * For the email-json protocol, the endpoint is an email address. * For the sms protocol, the endpoint is a phone number of an SMS-enabled device. * For the sqs protocol, the endpoint is the ARN of an Amazon SQS queue. * For the application protocol, the endpoint is the EndpointArn of a mobile app and device. * For the lambda protocol, the endpoint is the ARN of an Lambda function. * For the firehose protocol, the endpoint is the ARN of an Amazon Kinesis Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#endpoint DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#filter_policy DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#filter_policy}
  */
  readonly filterPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#filter_policy_scope DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#filter_policy_scope}
  */
  readonly filterPolicyScope?: string;
  /**
  * The protocol that you want to use. Supported protocols include: * http – delivery of JSON-encoded message via HTTP POST * https – delivery of JSON-encoded message via HTTPS POST * email – delivery of message via SMTP * email-json – delivery of JSON-encoded message via SMTP * sms – delivery of message via SMS * sqs – delivery of JSON-encoded message to an Amazon SQS queue * application – delivery of JSON-encoded message to an EndpointArn for a mobile app and device * lambda – delivery of JSON-encoded message to an Lambda function * firehose – delivery of JSON-encoded message to an Amazon Kinesis Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#protocol DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#raw_message_delivery DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#raw_message_delivery}
  */
  readonly rawMessageDelivery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#redrive_policy DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#redrive_policy}
  */
  readonly redrivePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#subscription_role_arn DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#subscription_role_arn}
  */
  readonly subscriptionRoleArn?: string;
  /**
  * The ARN of the topic you want to subscribe to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#topic_arn DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#topic_arn}
  */
  readonly topicArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#topic_ref DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest#topic_ref}
  */
  readonly topicRef?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef;
}

export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_policy: cdktf.stringToTerraform(struct!.deliveryPolicy),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    filter_policy: cdktf.stringToTerraform(struct!.filterPolicy),
    filter_policy_scope: cdktf.stringToTerraform(struct!.filterPolicyScope),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    raw_message_delivery: cdktf.stringToTerraform(struct!.rawMessageDelivery),
    redrive_policy: cdktf.stringToTerraform(struct!.redrivePolicy),
    subscription_role_arn: cdktf.stringToTerraform(struct!.subscriptionRoleArn),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    topic_ref: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefToTerraform(struct!.topicRef),
  }
}


export function dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_policy: {
      value: cdktf.stringToHclTerraform(struct!.deliveryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_policy: {
      value: cdktf.stringToHclTerraform(struct!.filterPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_policy_scope: {
      value: cdktf.stringToHclTerraform(struct!.filterPolicyScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_message_delivery: {
      value: cdktf.stringToHclTerraform(struct!.rawMessageDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redrive_policy: {
      value: cdktf.stringToHclTerraform(struct!.redrivePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_ref: {
      value: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefToHclTerraform(struct!.topicRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryPolicy = this._deliveryPolicy;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._filterPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPolicy = this._filterPolicy;
    }
    if (this._filterPolicyScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPolicyScope = this._filterPolicyScope;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rawMessageDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawMessageDelivery = this._rawMessageDelivery;
    }
    if (this._redrivePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redrivePolicy = this._redrivePolicy;
    }
    if (this._subscriptionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionRoleArn = this._subscriptionRoleArn;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    if (this._topicRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicRef = this._topicRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryPolicy = undefined;
      this._endpoint = undefined;
      this._filterPolicy = undefined;
      this._filterPolicyScope = undefined;
      this._protocol = undefined;
      this._rawMessageDelivery = undefined;
      this._redrivePolicy = undefined;
      this._subscriptionRoleArn = undefined;
      this._topicArn = undefined;
      this._topicRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryPolicy = value.deliveryPolicy;
      this._endpoint = value.endpoint;
      this._filterPolicy = value.filterPolicy;
      this._filterPolicyScope = value.filterPolicyScope;
      this._protocol = value.protocol;
      this._rawMessageDelivery = value.rawMessageDelivery;
      this._redrivePolicy = value.redrivePolicy;
      this._subscriptionRoleArn = value.subscriptionRoleArn;
      this._topicArn = value.topicArn;
      this._topicRef.internalValue = value.topicRef;
    }
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string; 
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string) {
    this._deliveryPolicy = value;
  }
  public resetDeliveryPolicy() {
    this._deliveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPolicyInput() {
    return this._deliveryPolicy;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // filter_policy - computed: false, optional: true, required: false
  private _filterPolicy?: string; 
  public get filterPolicy() {
    return this.getStringAttribute('filter_policy');
  }
  public set filterPolicy(value: string) {
    this._filterPolicy = value;
  }
  public resetFilterPolicy() {
    this._filterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPolicyInput() {
    return this._filterPolicy;
  }

  // filter_policy_scope - computed: false, optional: true, required: false
  private _filterPolicyScope?: string; 
  public get filterPolicyScope() {
    return this.getStringAttribute('filter_policy_scope');
  }
  public set filterPolicyScope(value: string) {
    this._filterPolicyScope = value;
  }
  public resetFilterPolicyScope() {
    this._filterPolicyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPolicyScopeInput() {
    return this._filterPolicyScope;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // raw_message_delivery - computed: false, optional: true, required: false
  private _rawMessageDelivery?: string; 
  public get rawMessageDelivery() {
    return this.getStringAttribute('raw_message_delivery');
  }
  public set rawMessageDelivery(value: string) {
    this._rawMessageDelivery = value;
  }
  public resetRawMessageDelivery() {
    this._rawMessageDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawMessageDeliveryInput() {
    return this._rawMessageDelivery;
  }

  // redrive_policy - computed: false, optional: true, required: false
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  public resetRedrivePolicy() {
    this._redrivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
  }

  // subscription_role_arn - computed: false, optional: true, required: false
  private _subscriptionRoleArn?: string; 
  public get subscriptionRoleArn() {
    return this.getStringAttribute('subscription_role_arn');
  }
  public set subscriptionRoleArn(value: string) {
    this._subscriptionRoleArn = value;
  }
  public resetSubscriptionRoleArn() {
    this._subscriptionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionRoleArnInput() {
    return this._subscriptionRoleArn;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }

  // topic_ref - computed: false, optional: true, required: false
  private _topicRef = new DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRefOutputReference(this, "topic_ref");
  public get topicRef() {
    return this._topicRef;
  }
  public putTopicRef(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecTopicRef) {
    this._topicRef.internalValue = value;
  }
  public resetTopicRef() {
    this._topicRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicRefInput() {
    return this._topicRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest k8s_sns_services_k8s_aws_subscription_v1alpha1_manifest}
*/
export class DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sns_services_k8s_aws_subscription_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sns_services_k8s_aws_subscription_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_subscription_v1alpha1_manifest k8s_sns_services_k8s_aws_subscription_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sns_services_k8s_aws_subscription_v1alpha1_manifest',
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
  private _metadata = new DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnsServicesK8SAwsSubscriptionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
