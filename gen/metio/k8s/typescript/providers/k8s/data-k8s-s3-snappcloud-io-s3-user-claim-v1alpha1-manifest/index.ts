// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#metadata DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata;
  /**
  * S3UserClaimSpec defines the desired state of S3UserClaim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#spec DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec;
}
export interface DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#annotations DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#labels DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#name DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#namespace DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota {
  /**
  * max number of buckets the user can create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#max_buckets DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#max_buckets}
  */
  readonly maxBuckets?: number;
  /**
  * max number of objects the user can store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#max_objects DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#max_objects}
  */
  readonly maxObjects?: string;
  /**
  * max number of bytes the user can store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#max_size DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuotaToTerraform(struct?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_buckets: cdktf.numberToTerraform(struct!.maxBuckets),
    max_objects: cdktf.stringToTerraform(struct!.maxObjects),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
  }
}


export function dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuotaToHclTerraform(struct?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_buckets: {
      value: cdktf.numberToHclTerraform(struct!.maxBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_objects: {
      value: cdktf.stringToHclTerraform(struct!.maxObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBuckets = this._maxBuckets;
    }
    if (this._maxObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjects = this._maxObjects;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBuckets = undefined;
      this._maxObjects = undefined;
      this._maxSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBuckets = value.maxBuckets;
      this._maxObjects = value.maxObjects;
      this._maxSize = value.maxSize;
    }
  }

  // max_buckets - computed: false, optional: true, required: false
  private _maxBuckets?: number; 
  public get maxBuckets() {
    return this.getNumberAttribute('max_buckets');
  }
  public set maxBuckets(value: number) {
    this._maxBuckets = value;
  }
  public resetMaxBuckets() {
    this._maxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBucketsInput() {
    return this._maxBuckets;
  }

  // max_objects - computed: false, optional: true, required: false
  private _maxObjects?: string; 
  public get maxObjects() {
    return this.getStringAttribute('max_objects');
  }
  public set maxObjects(value: string) {
    this._maxObjects = value;
  }
  public resetMaxObjects() {
    this._maxObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectsInput() {
    return this._maxObjects;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }
}
export interface DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#admin_secret DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#admin_secret}
  */
  readonly adminSecret: string;
  /**
  * UserQuota specifies the quota for a user in Ceph
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#quota DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#quota}
  */
  readonly quota?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#readonly_secret DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#readonly_secret}
  */
  readonly readonlySecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#s3_user_class DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#s3_user_class}
  */
  readonly s3UserClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#subusers DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest#subusers}
  */
  readonly subusers?: string[];
}

export function dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecToTerraform(struct?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_secret: cdktf.stringToTerraform(struct!.adminSecret),
    quota: dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuotaToTerraform(struct!.quota),
    readonly_secret: cdktf.stringToTerraform(struct!.readonlySecret),
    s3_user_class: cdktf.stringToTerraform(struct!.s3UserClass),
    subusers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subusers),
  }
}


export function dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_secret: {
      value: cdktf.stringToHclTerraform(struct!.adminSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota: {
      value: dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuotaToHclTerraform(struct!.quota),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota",
    },
    readonly_secret: {
      value: cdktf.stringToHclTerraform(struct!.readonlySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_user_class: {
      value: cdktf.stringToHclTerraform(struct!.s3UserClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subusers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subusers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSecret = this._adminSecret;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    if (this._readonlySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlySecret = this._readonlySecret;
    }
    if (this._s3UserClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UserClass = this._s3UserClass;
    }
    if (this._subusers !== undefined) {
      hasAnyValues = true;
      internalValueResult.subusers = this._subusers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminSecret = undefined;
      this._quota.internalValue = undefined;
      this._readonlySecret = undefined;
      this._s3UserClass = undefined;
      this._subusers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminSecret = value.adminSecret;
      this._quota.internalValue = value.quota;
      this._readonlySecret = value.readonlySecret;
      this._s3UserClass = value.s3UserClass;
      this._subusers = value.subusers;
    }
  }

  // admin_secret - computed: false, optional: false, required: true
  private _adminSecret?: string; 
  public get adminSecret() {
    return this.getStringAttribute('admin_secret');
  }
  public set adminSecret(value: string) {
    this._adminSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretInput() {
    return this._adminSecret;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // readonly_secret - computed: false, optional: false, required: true
  private _readonlySecret?: string; 
  public get readonlySecret() {
    return this.getStringAttribute('readonly_secret');
  }
  public set readonlySecret(value: string) {
    this._readonlySecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlySecretInput() {
    return this._readonlySecret;
  }

  // s3_user_class - computed: false, optional: true, required: false
  private _s3UserClass?: string; 
  public get s3UserClass() {
    return this.getStringAttribute('s3_user_class');
  }
  public set s3UserClass(value: string) {
    this._s3UserClass = value;
  }
  public resetS3UserClass() {
    this._s3UserClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UserClassInput() {
    return this._s3UserClass;
  }

  // subusers - computed: false, optional: true, required: false
  private _subusers?: string[]; 
  public get subusers() {
    return this.getListAttribute('subusers');
  }
  public set subusers(value: string[]) {
    this._subusers = value;
  }
  public resetSubusers() {
    this._subusers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subusersInput() {
    return this._subusers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest k8s_s3_snappcloud_io_s3_user_claim_v1alpha1_manifest}
*/
export class DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_s3_snappcloud_io_s3_user_claim_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SS3SnappcloudIoS3UserClaimV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_s3_snappcloud_io_s3_user_claim_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/s3_snappcloud_io_s3_user_claim_v1alpha1_manifest k8s_s3_snappcloud_io_s3_user_claim_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_s3_snappcloud_io_s3_user_claim_v1alpha1_manifest',
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
  private _metadata = new DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec) {
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
      metadata: dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SS3SnappcloudIoS3UserClaimV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
