// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#metadata DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata;
  /**
  * TrailSpec defines the desired state of Trail. The settings for a trail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#spec DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec;
}
export interface DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#annotations DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#labels DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#name DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#namespace DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#key DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#value DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec {
  /**
  * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#cloud_watch_logs_log_group_arn DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#cloud_watch_logs_log_group_arn}
  */
  readonly cloudWatchLogsLogGroupArn?: string;
  /**
  * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#cloud_watch_logs_role_arn DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#cloud_watch_logs_role_arn}
  */
  readonly cloudWatchLogsRoleArn?: string;
  /**
  * Specifies whether log file integrity validation is enabled. The default is false. When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#enable_log_file_validation DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#enable_log_file_validation}
  */
  readonly enableLogFileValidation?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the trail is publishing events from global services such as IAM to the log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#include_global_service_events DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#include_global_service_events}
  */
  readonly includeGlobalServiceEvents?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the trail is created in the current region or in all regions. The default is false, which creates a trail only in the region where you are signed in. As a best practice, consider creating trails that log events in all regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#is_multi_region_trail DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#is_multi_region_trail}
  */
  readonly isMultiRegionTrail?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account for an organization in Organizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#is_organization_trail DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#is_organization_trail}
  */
  readonly isOrganizationTrail?: boolean | cdktf.IResolvable;
  /**
  * Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see Using multi-Region keys (https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the Key Management Service Developer Guide. Examples: * alias/MyAliasName * arn:aws:kms:us-east-2:123456789012:alias/MyAliasName * arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012 * 12345678-1234-1234-1234-123456789012
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#kms_key_id DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Specifies the name of the trail. The name must meet the following requirements: * Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-) * Start with a letter or number, and end with a letter or number * Be between 3 and 128 characters * Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are not valid. * Not be in IP address format (for example, 192.168.5.4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#name DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements (https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#s3_bucket_name DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files (https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html). The maximum length is 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#s3_key_prefix DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#sns_topic_name DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#sns_topic_name}
  */
  readonly snsTopicName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#tags DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_logs_log_group_arn: cdktf.stringToTerraform(struct!.cloudWatchLogsLogGroupArn),
    cloud_watch_logs_role_arn: cdktf.stringToTerraform(struct!.cloudWatchLogsRoleArn),
    enable_log_file_validation: cdktf.booleanToTerraform(struct!.enableLogFileValidation),
    include_global_service_events: cdktf.booleanToTerraform(struct!.includeGlobalServiceEvents),
    is_multi_region_trail: cdktf.booleanToTerraform(struct!.isMultiRegionTrail),
    is_organization_trail: cdktf.booleanToTerraform(struct!.isOrganizationTrail),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
    sns_topic_name: cdktf.stringToTerraform(struct!.snsTopicName),
    tags: cdktf.listMapper(dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch_logs_log_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.cloudWatchLogsLogGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_watch_logs_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.cloudWatchLogsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_log_file_validation: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogFileValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_global_service_events: {
      value: cdktf.booleanToHclTerraform(struct!.includeGlobalServiceEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_multi_region_trail: {
      value: cdktf.booleanToHclTerraform(struct!.isMultiRegionTrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_organization_trail: {
      value: cdktf.booleanToHclTerraform(struct!.isOrganizationTrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
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
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.s3KeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_topic_name: {
      value: cdktf.stringToHclTerraform(struct!.snsTopicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLogsLogGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsLogGroupArn = this._cloudWatchLogsLogGroupArn;
    }
    if (this._cloudWatchLogsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsRoleArn = this._cloudWatchLogsRoleArn;
    }
    if (this._enableLogFileValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogFileValidation = this._enableLogFileValidation;
    }
    if (this._includeGlobalServiceEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGlobalServiceEvents = this._includeGlobalServiceEvents;
    }
    if (this._isMultiRegionTrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMultiRegionTrail = this._isMultiRegionTrail;
    }
    if (this._isOrganizationTrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOrganizationTrail = this._isOrganizationTrail;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
    }
    if (this._snsTopicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicName = this._snsTopicName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudWatchLogsLogGroupArn = undefined;
      this._cloudWatchLogsRoleArn = undefined;
      this._enableLogFileValidation = undefined;
      this._includeGlobalServiceEvents = undefined;
      this._isMultiRegionTrail = undefined;
      this._isOrganizationTrail = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._s3BucketName = undefined;
      this._s3KeyPrefix = undefined;
      this._snsTopicName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudWatchLogsLogGroupArn = value.cloudWatchLogsLogGroupArn;
      this._cloudWatchLogsRoleArn = value.cloudWatchLogsRoleArn;
      this._enableLogFileValidation = value.enableLogFileValidation;
      this._includeGlobalServiceEvents = value.includeGlobalServiceEvents;
      this._isMultiRegionTrail = value.isMultiRegionTrail;
      this._isOrganizationTrail = value.isOrganizationTrail;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyPrefix = value.s3KeyPrefix;
      this._snsTopicName = value.snsTopicName;
      this._tags.internalValue = value.tags;
    }
  }

  // cloud_watch_logs_log_group_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsLogGroupArn?: string; 
  public get cloudWatchLogsLogGroupArn() {
    return this.getStringAttribute('cloud_watch_logs_log_group_arn');
  }
  public set cloudWatchLogsLogGroupArn(value: string) {
    this._cloudWatchLogsLogGroupArn = value;
  }
  public resetCloudWatchLogsLogGroupArn() {
    this._cloudWatchLogsLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsLogGroupArnInput() {
    return this._cloudWatchLogsLogGroupArn;
  }

  // cloud_watch_logs_role_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsRoleArn?: string; 
  public get cloudWatchLogsRoleArn() {
    return this.getStringAttribute('cloud_watch_logs_role_arn');
  }
  public set cloudWatchLogsRoleArn(value: string) {
    this._cloudWatchLogsRoleArn = value;
  }
  public resetCloudWatchLogsRoleArn() {
    this._cloudWatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsRoleArnInput() {
    return this._cloudWatchLogsRoleArn;
  }

  // enable_log_file_validation - computed: false, optional: true, required: false
  private _enableLogFileValidation?: boolean | cdktf.IResolvable; 
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation');
  }
  public set enableLogFileValidation(value: boolean | cdktf.IResolvable) {
    this._enableLogFileValidation = value;
  }
  public resetEnableLogFileValidation() {
    this._enableLogFileValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogFileValidationInput() {
    return this._enableLogFileValidation;
  }

  // include_global_service_events - computed: false, optional: true, required: false
  private _includeGlobalServiceEvents?: boolean | cdktf.IResolvable; 
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events');
  }
  public set includeGlobalServiceEvents(value: boolean | cdktf.IResolvable) {
    this._includeGlobalServiceEvents = value;
  }
  public resetIncludeGlobalServiceEvents() {
    this._includeGlobalServiceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalServiceEventsInput() {
    return this._includeGlobalServiceEvents;
  }

  // is_multi_region_trail - computed: false, optional: true, required: false
  private _isMultiRegionTrail?: boolean | cdktf.IResolvable; 
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail');
  }
  public set isMultiRegionTrail(value: boolean | cdktf.IResolvable) {
    this._isMultiRegionTrail = value;
  }
  public resetIsMultiRegionTrail() {
    this._isMultiRegionTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiRegionTrailInput() {
    return this._isMultiRegionTrail;
  }

  // is_organization_trail - computed: false, optional: true, required: false
  private _isOrganizationTrail?: boolean | cdktf.IResolvable; 
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }
  public set isOrganizationTrail(value: boolean | cdktf.IResolvable) {
    this._isOrganizationTrail = value;
  }
  public resetIsOrganizationTrail() {
    this._isOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationTrailInput() {
    return this._isOrganizationTrail;
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

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // sns_topic_name - computed: false, optional: true, required: false
  private _snsTopicName?: string; 
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }
  public set snsTopicName(value: string) {
    this._snsTopicName = value;
  }
  public resetSnsTopicName() {
    this._snsTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicNameInput() {
    return this._snsTopicName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest k8s_cloudtrail_services_k8s_aws_trail_v1alpha1_manifest}
*/
export class DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cloudtrail_services_k8s_aws_trail_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cloudtrail_services_k8s_aws_trail_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/cloudtrail_services_k8s_aws_trail_v1alpha1_manifest k8s_cloudtrail_services_k8s_aws_trail_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cloudtrail_services_k8s_aws_trail_v1alpha1_manifest',
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
  private _metadata = new DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudtrailServicesK8SAwsTrailV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
