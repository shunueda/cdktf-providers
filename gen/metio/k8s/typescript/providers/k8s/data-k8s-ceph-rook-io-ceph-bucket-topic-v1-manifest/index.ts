// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCephRookIoCephBucketTopicV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#metadata DataK8SCephRookIoCephBucketTopicV1Manifest#metadata}
  */
  readonly metadata: DataK8SCephRookIoCephBucketTopicV1ManifestMetadata;
  /**
  * BucketTopicSpec represent the spec of a Bucket Topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#spec DataK8SCephRookIoCephBucketTopicV1Manifest#spec}
  */
  readonly spec: DataK8SCephRookIoCephBucketTopicV1ManifestSpec;
}
export interface DataK8SCephRookIoCephBucketTopicV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#annotations DataK8SCephRookIoCephBucketTopicV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#labels DataK8SCephRookIoCephBucketTopicV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#name DataK8SCephRookIoCephBucketTopicV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#namespace DataK8SCephRookIoCephBucketTopicV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCephRookIoCephBucketTopicV1ManifestMetadataToTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephBucketTopicV1ManifestMetadataToHclTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephBucketTopicV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBucketTopicV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephBucketTopicV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp {
  /**
  * The ack level required for this topic (none/broker/routeable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#ack_level DataK8SCephRookIoCephBucketTopicV1Manifest#ack_level}
  */
  readonly ackLevel?: string;
  /**
  * Indicate whether the server certificate is validated by the client or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#disable_verify_ssl DataK8SCephRookIoCephBucketTopicV1Manifest#disable_verify_ssl}
  */
  readonly disableVerifySsl?: boolean | cdktf.IResolvable;
  /**
  * Name of the exchange that is used to route messages based on topics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#exchange DataK8SCephRookIoCephBucketTopicV1Manifest#exchange}
  */
  readonly exchange: string;
  /**
  * The URI of the AMQP endpoint to push notification to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#uri DataK8SCephRookIoCephBucketTopicV1Manifest#uri}
  */
  readonly uri: string;
}

export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqpToTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_level: cdktf.stringToTerraform(struct!.ackLevel),
    disable_verify_ssl: cdktf.booleanToTerraform(struct!.disableVerifySsl),
    exchange: cdktf.stringToTerraform(struct!.exchange),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqpToHclTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_level: {
      value: cdktf.stringToHclTerraform(struct!.ackLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exchange: {
      value: cdktf.stringToHclTerraform(struct!.exchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackLevel = this._ackLevel;
    }
    if (this._disableVerifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifySsl = this._disableVerifySsl;
    }
    if (this._exchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchange = this._exchange;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackLevel = undefined;
      this._disableVerifySsl = undefined;
      this._exchange = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackLevel = value.ackLevel;
      this._disableVerifySsl = value.disableVerifySsl;
      this._exchange = value.exchange;
      this._uri = value.uri;
    }
  }

  // ack_level - computed: false, optional: true, required: false
  private _ackLevel?: string; 
  public get ackLevel() {
    return this.getStringAttribute('ack_level');
  }
  public set ackLevel(value: string) {
    this._ackLevel = value;
  }
  public resetAckLevel() {
    this._ackLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackLevelInput() {
    return this._ackLevel;
  }

  // disable_verify_ssl - computed: false, optional: true, required: false
  private _disableVerifySsl?: boolean | cdktf.IResolvable; 
  public get disableVerifySsl() {
    return this.getBooleanAttribute('disable_verify_ssl');
  }
  public set disableVerifySsl(value: boolean | cdktf.IResolvable) {
    this._disableVerifySsl = value;
  }
  public resetDisableVerifySsl() {
    this._disableVerifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifySslInput() {
    return this._disableVerifySsl;
  }

  // exchange - computed: false, optional: false, required: true
  private _exchange?: string; 
  public get exchange() {
    return this.getStringAttribute('exchange');
  }
  public set exchange(value: string) {
    this._exchange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeInput() {
    return this._exchange;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp {
  /**
  * Indicate whether the server certificate is validated by the client or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#disable_verify_ssl DataK8SCephRookIoCephBucketTopicV1Manifest#disable_verify_ssl}
  */
  readonly disableVerifySsl?: boolean | cdktf.IResolvable;
  /**
  * Send the notifications with the CloudEvents header: https://github.com/cloudevents/spec/blob/main/cloudevents/adapters/aws-s3.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#send_cloud_events DataK8SCephRookIoCephBucketTopicV1Manifest#send_cloud_events}
  */
  readonly sendCloudEvents?: boolean | cdktf.IResolvable;
  /**
  * The URI of the HTTP endpoint to push notification to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#uri DataK8SCephRookIoCephBucketTopicV1Manifest#uri}
  */
  readonly uri: string;
}

export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttpToTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_verify_ssl: cdktf.booleanToTerraform(struct!.disableVerifySsl),
    send_cloud_events: cdktf.booleanToTerraform(struct!.sendCloudEvents),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttpToHclTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_cloud_events: {
      value: cdktf.booleanToHclTerraform(struct!.sendCloudEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVerifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifySsl = this._disableVerifySsl;
    }
    if (this._sendCloudEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCloudEvents = this._sendCloudEvents;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableVerifySsl = undefined;
      this._sendCloudEvents = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableVerifySsl = value.disableVerifySsl;
      this._sendCloudEvents = value.sendCloudEvents;
      this._uri = value.uri;
    }
  }

  // disable_verify_ssl - computed: false, optional: true, required: false
  private _disableVerifySsl?: boolean | cdktf.IResolvable; 
  public get disableVerifySsl() {
    return this.getBooleanAttribute('disable_verify_ssl');
  }
  public set disableVerifySsl(value: boolean | cdktf.IResolvable) {
    this._disableVerifySsl = value;
  }
  public resetDisableVerifySsl() {
    this._disableVerifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifySslInput() {
    return this._disableVerifySsl;
  }

  // send_cloud_events - computed: false, optional: true, required: false
  private _sendCloudEvents?: boolean | cdktf.IResolvable; 
  public get sendCloudEvents() {
    return this.getBooleanAttribute('send_cloud_events');
  }
  public set sendCloudEvents(value: boolean | cdktf.IResolvable) {
    this._sendCloudEvents = value;
  }
  public resetSendCloudEvents() {
    this._sendCloudEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCloudEventsInput() {
    return this._sendCloudEvents;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka {
  /**
  * The ack level required for this topic (none/broker)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#ack_level DataK8SCephRookIoCephBucketTopicV1Manifest#ack_level}
  */
  readonly ackLevel?: string;
  /**
  * Indicate whether the server certificate is validated by the client or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#disable_verify_ssl DataK8SCephRookIoCephBucketTopicV1Manifest#disable_verify_ssl}
  */
  readonly disableVerifySsl?: boolean | cdktf.IResolvable;
  /**
  * The URI of the Kafka endpoint to push notification to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#uri DataK8SCephRookIoCephBucketTopicV1Manifest#uri}
  */
  readonly uri: string;
  /**
  * Indicate whether to use SSL when communicating with the broker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#use_ssl DataK8SCephRookIoCephBucketTopicV1Manifest#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafkaToTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_level: cdktf.stringToTerraform(struct!.ackLevel),
    disable_verify_ssl: cdktf.booleanToTerraform(struct!.disableVerifySsl),
    uri: cdktf.stringToTerraform(struct!.uri),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
  }
}


export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafkaToHclTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_level: {
      value: cdktf.stringToHclTerraform(struct!.ackLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackLevel = this._ackLevel;
    }
    if (this._disableVerifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifySsl = this._disableVerifySsl;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackLevel = undefined;
      this._disableVerifySsl = undefined;
      this._uri = undefined;
      this._useSsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackLevel = value.ackLevel;
      this._disableVerifySsl = value.disableVerifySsl;
      this._uri = value.uri;
      this._useSsl = value.useSsl;
    }
  }

  // ack_level - computed: false, optional: true, required: false
  private _ackLevel?: string; 
  public get ackLevel() {
    return this.getStringAttribute('ack_level');
  }
  public set ackLevel(value: string) {
    this._ackLevel = value;
  }
  public resetAckLevel() {
    this._ackLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackLevelInput() {
    return this._ackLevel;
  }

  // disable_verify_ssl - computed: false, optional: true, required: false
  private _disableVerifySsl?: boolean | cdktf.IResolvable; 
  public get disableVerifySsl() {
    return this.getBooleanAttribute('disable_verify_ssl');
  }
  public set disableVerifySsl(value: boolean | cdktf.IResolvable) {
    this._disableVerifySsl = value;
  }
  public resetDisableVerifySsl() {
    this._disableVerifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifySslInput() {
    return this._disableVerifySsl;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }
}
export interface DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint {
  /**
  * Spec of AMQP endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#amqp DataK8SCephRookIoCephBucketTopicV1Manifest#amqp}
  */
  readonly amqp?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp;
  /**
  * Spec of HTTP endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#http DataK8SCephRookIoCephBucketTopicV1Manifest#http}
  */
  readonly http?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp;
  /**
  * Spec of Kafka endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#kafka DataK8SCephRookIoCephBucketTopicV1Manifest#kafka}
  */
  readonly kafka?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka;
}

export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointToTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amqp: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqpToTerraform(struct!.amqp),
    http: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttpToTerraform(struct!.http),
    kafka: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafkaToTerraform(struct!.kafka),
  }
}


export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointToHclTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amqp: {
      value: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqpToHclTerraform(struct!.amqp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp",
    },
    http: {
      value: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp",
    },
    kafka: {
      value: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amqp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amqp = this._amqp?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amqp.internalValue = undefined;
      this._http.internalValue = undefined;
      this._kafka.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amqp.internalValue = value.amqp;
      this._http.internalValue = value.http;
      this._kafka.internalValue = value.kafka;
    }
  }

  // amqp - computed: false, optional: true, required: false
  private _amqp = new DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqpOutputReference(this, "amqp");
  public get amqp() {
    return this._amqp;
  }
  public putAmqp(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointAmqp) {
    this._amqp.internalValue = value;
  }
  public resetAmqp() {
    this._amqp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amqpInput() {
    return this._amqp.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }
}
export interface DataK8SCephRookIoCephBucketTopicV1ManifestSpec {
  /**
  * Contains the endpoint spec of the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#endpoint DataK8SCephRookIoCephBucketTopicV1Manifest#endpoint}
  */
  readonly endpoint: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint;
  /**
  * The name of the object store on which to define the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#object_store_name DataK8SCephRookIoCephBucketTopicV1Manifest#object_store_name}
  */
  readonly objectStoreName: string;
  /**
  * The namespace of the object store on which to define the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#object_store_namespace DataK8SCephRookIoCephBucketTopicV1Manifest#object_store_namespace}
  */
  readonly objectStoreNamespace: string;
  /**
  * Data which is sent in each event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#opaque_data DataK8SCephRookIoCephBucketTopicV1Manifest#opaque_data}
  */
  readonly opaqueData?: string;
  /**
  * Indication whether notifications to this endpoint are persistent or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#persistent DataK8SCephRookIoCephBucketTopicV1Manifest#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointToTerraform(struct!.endpoint),
    object_store_name: cdktf.stringToTerraform(struct!.objectStoreName),
    object_store_namespace: cdktf.stringToTerraform(struct!.objectStoreNamespace),
    opaque_data: cdktf.stringToTerraform(struct!.opaqueData),
    persistent: cdktf.booleanToTerraform(struct!.persistent),
  }
}


export function dataK8SCephRookIoCephBucketTopicV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephBucketTopicV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: dataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint",
    },
    object_store_name: {
      value: cdktf.stringToHclTerraform(struct!.objectStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_store_namespace: {
      value: cdktf.stringToHclTerraform(struct!.objectStoreNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opaque_data: {
      value: cdktf.stringToHclTerraform(struct!.opaqueData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent: {
      value: cdktf.booleanToHclTerraform(struct!.persistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBucketTopicV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBucketTopicV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._objectStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStoreName = this._objectStoreName;
    }
    if (this._objectStoreNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStoreNamespace = this._objectStoreNamespace;
    }
    if (this._opaqueData !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaqueData = this._opaqueData;
    }
    if (this._persistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistent = this._persistent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = undefined;
      this._objectStoreName = undefined;
      this._objectStoreNamespace = undefined;
      this._opaqueData = undefined;
      this._persistent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = value.endpoint;
      this._objectStoreName = value.objectStoreName;
      this._objectStoreNamespace = value.objectStoreNamespace;
      this._opaqueData = value.opaqueData;
      this._persistent = value.persistent;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpecEndpoint) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // object_store_name - computed: false, optional: false, required: true
  private _objectStoreName?: string; 
  public get objectStoreName() {
    return this.getStringAttribute('object_store_name');
  }
  public set objectStoreName(value: string) {
    this._objectStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStoreNameInput() {
    return this._objectStoreName;
  }

  // object_store_namespace - computed: false, optional: false, required: true
  private _objectStoreNamespace?: string; 
  public get objectStoreNamespace() {
    return this.getStringAttribute('object_store_namespace');
  }
  public set objectStoreNamespace(value: string) {
    this._objectStoreNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStoreNamespaceInput() {
    return this._objectStoreNamespace;
  }

  // opaque_data - computed: false, optional: true, required: false
  private _opaqueData?: string; 
  public get opaqueData() {
    return this.getStringAttribute('opaque_data');
  }
  public set opaqueData(value: string) {
    this._opaqueData = value;
  }
  public resetOpaqueData() {
    this._opaqueData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueDataInput() {
    return this._opaqueData;
  }

  // persistent - computed: false, optional: true, required: false
  private _persistent?: boolean | cdktf.IResolvable; 
  public get persistent() {
    return this.getBooleanAttribute('persistent');
  }
  public set persistent(value: boolean | cdktf.IResolvable) {
    this._persistent = value;
  }
  public resetPersistent() {
    this._persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest k8s_ceph_rook_io_ceph_bucket_topic_v1_manifest}
*/
export class DataK8SCephRookIoCephBucketTopicV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ceph_rook_io_ceph_bucket_topic_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCephRookIoCephBucketTopicV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCephRookIoCephBucketTopicV1Manifest to import
  * @param importFromId The id of the existing DataK8SCephRookIoCephBucketTopicV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCephRookIoCephBucketTopicV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ceph_rook_io_ceph_bucket_topic_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_bucket_topic_v1_manifest k8s_ceph_rook_io_ceph_bucket_topic_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCephRookIoCephBucketTopicV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCephRookIoCephBucketTopicV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ceph_rook_io_ceph_bucket_topic_v1_manifest',
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
  private _metadata = new DataK8SCephRookIoCephBucketTopicV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephBucketTopicV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCephRookIoCephBucketTopicV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephBucketTopicV1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SCephRookIoCephBucketTopicV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCephRookIoCephBucketTopicV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCephRookIoCephBucketTopicV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephBucketTopicV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCephRookIoCephBucketTopicV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephBucketTopicV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
