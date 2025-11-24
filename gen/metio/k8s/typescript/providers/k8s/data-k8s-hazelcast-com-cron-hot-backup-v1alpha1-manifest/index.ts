// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHazelcastComCronHotBackupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#metadata DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata;
  /**
  * CronHotBackupSpec defines the desired state of CronHotBackup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#spec DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec;
}
export interface DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#annotations DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#labels DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#name DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#namespace DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec {
  /**
  * URL of the bucket to download HotBackup folders. AWS S3, GCP Bucket and Azure Blob storage buckets are supported. Example bucket URIs: - AWS S3 -> s3://bucket-name/path/to/folder - GCP Bucket -> gs://bucket-name/path/to/folder - Azure Blob -> azblob://bucket-name/path/to/folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#bucket_uri DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#bucket_uri}
  */
  readonly bucketUri?: string;
  /**
  * HazelcastResourceName defines the name of the Hazelcast resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#hazelcast_resource_name DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#hazelcast_resource_name}
  */
  readonly hazelcastResourceName: string;
  /**
  * secret is a deprecated alias for secretName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#secret DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Name of the secret with credentials for cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#secret_name DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpecToTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_uri: cdktf.stringToTerraform(struct!.bucketUri),
    hazelcast_resource_name: cdktf.stringToTerraform(struct!.hazelcastResourceName),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpecToHclTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hazelcast_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.hazelcastResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._hazelcastResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hazelcastResourceName = this._hazelcastResourceName;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketUri = undefined;
      this._hazelcastResourceName = undefined;
      this._secret = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketUri = value.bucketUri;
      this._hazelcastResourceName = value.hazelcastResourceName;
      this._secret = value.secret;
      this._secretName = value.secretName;
    }
  }

  // bucket_uri - computed: false, optional: true, required: false
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  public resetBucketUri() {
    this._bucketUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // hazelcast_resource_name - computed: false, optional: false, required: true
  private _hazelcastResourceName?: string; 
  public get hazelcastResourceName() {
    return this.getStringAttribute('hazelcast_resource_name');
  }
  public set hazelcastResourceName(value: string) {
    this._hazelcastResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hazelcastResourceNameInput() {
    return this._hazelcastResourceName;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate {
  /**
  * Standard object's metadata of the hot backups created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#metadata DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Specification of the desired behavior of the hot backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#spec DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec;
}

export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateToTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateToHclTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec {
  /**
  * The number of failed finished hot backups to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#failed_hot_backups_history_limit DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#failed_hot_backups_history_limit}
  */
  readonly failedHotBackupsHistoryLimit?: number;
  /**
  * Specifies the hot backup that will be created when executing a CronHotBackup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#hot_backup_template DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#hot_backup_template}
  */
  readonly hotBackupTemplate: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate;
  /**
  * Schedule contains a crontab-like expression that defines the schedule in which HotBackup will be started. If the Schedule is empty the HotBackup will start only once when applied. --- Several pre-defined schedules in place of a cron expression can be used. Entry | Description | Equivalent To ----- | ----------- | ------------- @yearly (or @annually) | Run once a year, midnight, Jan. 1st | 0 0 1 1 * @monthly | Run once a month, midnight, first of month | 0 0 1 * * @weekly | Run once a week, midnight between Sat/Sun | 0 0 * * 0 @daily (or @midnight) | Run once a day, midnight | 0 0 * * * @hourly | Run once an hour, beginning of hour | 0 * * * *
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#schedule DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#schedule}
  */
  readonly schedule: string;
  /**
  * The number of successful finished hot backups to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#successful_hot_backups_history_limit DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#successful_hot_backups_history_limit}
  */
  readonly successfulHotBackupsHistoryLimit?: number;
  /**
  * When true, CronHotBackup will stop creating HotBackup CRs until it is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#suspend DataK8SHazelcastComCronHotBackupV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_hot_backups_history_limit: cdktf.numberToTerraform(struct!.failedHotBackupsHistoryLimit),
    hot_backup_template: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateToTerraform(struct!.hotBackupTemplate),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    successful_hot_backups_history_limit: cdktf.numberToTerraform(struct!.successfulHotBackupsHistoryLimit),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
  }
}


export function dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_hot_backups_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.failedHotBackupsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hot_backup_template: {
      value: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateToHclTerraform(struct!.hotBackupTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successful_hot_backups_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.successfulHotBackupsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedHotBackupsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedHotBackupsHistoryLimit = this._failedHotBackupsHistoryLimit;
    }
    if (this._hotBackupTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotBackupTemplate = this._hotBackupTemplate?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._successfulHotBackupsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulHotBackupsHistoryLimit = this._successfulHotBackupsHistoryLimit;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failedHotBackupsHistoryLimit = undefined;
      this._hotBackupTemplate.internalValue = undefined;
      this._schedule = undefined;
      this._successfulHotBackupsHistoryLimit = undefined;
      this._suspend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failedHotBackupsHistoryLimit = value.failedHotBackupsHistoryLimit;
      this._hotBackupTemplate.internalValue = value.hotBackupTemplate;
      this._schedule = value.schedule;
      this._successfulHotBackupsHistoryLimit = value.successfulHotBackupsHistoryLimit;
      this._suspend = value.suspend;
    }
  }

  // failed_hot_backups_history_limit - computed: false, optional: true, required: false
  private _failedHotBackupsHistoryLimit?: number; 
  public get failedHotBackupsHistoryLimit() {
    return this.getNumberAttribute('failed_hot_backups_history_limit');
  }
  public set failedHotBackupsHistoryLimit(value: number) {
    this._failedHotBackupsHistoryLimit = value;
  }
  public resetFailedHotBackupsHistoryLimit() {
    this._failedHotBackupsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedHotBackupsHistoryLimitInput() {
    return this._failedHotBackupsHistoryLimit;
  }

  // hot_backup_template - computed: false, optional: false, required: true
  private _hotBackupTemplate = new DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplateOutputReference(this, "hot_backup_template");
  public get hotBackupTemplate() {
    return this._hotBackupTemplate;
  }
  public putHotBackupTemplate(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecHotBackupTemplate) {
    this._hotBackupTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotBackupTemplateInput() {
    return this._hotBackupTemplate.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // successful_hot_backups_history_limit - computed: false, optional: true, required: false
  private _successfulHotBackupsHistoryLimit?: number; 
  public get successfulHotBackupsHistoryLimit() {
    return this.getNumberAttribute('successful_hot_backups_history_limit');
  }
  public set successfulHotBackupsHistoryLimit(value: number) {
    this._successfulHotBackupsHistoryLimit = value;
  }
  public resetSuccessfulHotBackupsHistoryLimit() {
    this._successfulHotBackupsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulHotBackupsHistoryLimitInput() {
    return this._successfulHotBackupsHistoryLimit;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest k8s_hazelcast_com_cron_hot_backup_v1alpha1_manifest}
*/
export class DataK8SHazelcastComCronHotBackupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hazelcast_com_cron_hot_backup_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHazelcastComCronHotBackupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHazelcastComCronHotBackupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHazelcastComCronHotBackupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHazelcastComCronHotBackupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hazelcast_com_cron_hot_backup_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_cron_hot_backup_v1alpha1_manifest k8s_hazelcast_com_cron_hot_backup_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHazelcastComCronHotBackupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hazelcast_com_cron_hot_backup_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComCronHotBackupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComCronHotBackupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
