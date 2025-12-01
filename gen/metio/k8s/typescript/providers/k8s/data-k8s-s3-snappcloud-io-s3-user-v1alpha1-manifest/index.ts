// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#metadata DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata;
  /**
  * S3UserSpec defines the desired state of S3User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#spec DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec;
}
export interface DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#annotations DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#labels DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#name DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#api_version DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#field_path DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#kind DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#name DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#namespace DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#resource_version DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#uid DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRefToTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRefToHclTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota {
  /**
  * max number of buckets the user can create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#max_buckets DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#max_buckets}
  */
  readonly maxBuckets?: number;
  /**
  * max number of objects the user can store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#max_objects DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#max_objects}
  */
  readonly maxObjects?: string;
  /**
  * max number of bytes the user can store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#max_size DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuotaToTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota | cdktf.IResolvable): any {
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


export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuotaToHclTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota | cdktf.IResolvable): any {
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

export class DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec {
  /**
  * ObjectReference contains enough information to let you inspect or modify the referred object. --- New uses of this type are discouraged because of difficulty describing its usage when embedded in APIs. 1. Ignored fields. It includes many fields which are not generally honored. For instance, ResourceVersion and FieldPath are both very rarely valid in actual usage. 2. Invalid usage help. It is impossible to add specific help for individual usage. In most embedded usages, there are particular restrictions like, 'must refer only to types A and B' or 'UID not honored' or 'name must be restricted'. Those cannot be well described when embedded. 3. Inconsistent validation. Because the usages are different, the validation rules are different by usage, which makes it hard for users to predict what will happen. 4. The fields are both imprecise and overly precise. Kind is not a precise mapping to a URL. This can produce ambiguity during interpretation and require a REST mapping. In most cases, the dependency is on the group,resource tuple and the version of the actual struct is irrelevant. 5. We cannot easily change it. Because this type is embedded in many locations, updates to this type will affect numerous schemas. Don't make new APIs embed an underspecified API type they do not control. Instead of using this type, create a locally provided and used type that is well-focused on your reference. For example, ServiceReferences for admission registration: https://github.com/kubernetes/api/blob/release-1.17/admissionregistration/v1/types.go#L533 .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#claim_ref DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#claim_ref}
  */
  readonly claimRef?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef;
  /**
  * UserQuota specifies the quota for a user in Ceph
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#quota DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#quota}
  */
  readonly quota?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#s3_user_class DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest#s3_user_class}
  */
  readonly s3UserClass?: string;
}

export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecToTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_ref: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRefToTerraform(struct!.claimRef),
    quota: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuotaToTerraform(struct!.quota),
    s3_user_class: cdktf.stringToTerraform(struct!.s3UserClass),
  }
}


export function dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_ref: {
      value: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRefToHclTerraform(struct!.claimRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef",
    },
    quota: {
      value: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuotaToHclTerraform(struct!.quota),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota",
    },
    s3_user_class: {
      value: cdktf.stringToHclTerraform(struct!.s3UserClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimRef = this._claimRef?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    if (this._s3UserClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UserClass = this._s3UserClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimRef.internalValue = undefined;
      this._quota.internalValue = undefined;
      this._s3UserClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimRef.internalValue = value.claimRef;
      this._quota.internalValue = value.quota;
      this._s3UserClass = value.s3UserClass;
    }
  }

  // claim_ref - computed: false, optional: true, required: false
  private _claimRef = new DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRefOutputReference(this, "claim_ref");
  public get claimRef() {
    return this._claimRef;
  }
  public putClaimRef(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecClaimRef) {
    this._claimRef.internalValue = value;
  }
  public resetClaimRef() {
    this._claimRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimRefInput() {
    return this._claimRef.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest k8s_s3_snappcloud_io_s3_user_v1alpha1_manifest}
*/
export class DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_s3_snappcloud_io_s3_user_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SS3SnappcloudIoS3UserV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_s3_snappcloud_io_s3_user_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/s3_snappcloud_io_s3_user_v1alpha1_manifest k8s_s3_snappcloud_io_s3_user_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_s3_snappcloud_io_s3_user_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec) {
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
      metadata: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SS3SnappcloudIoS3UserV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
