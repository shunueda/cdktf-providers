// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#metadata DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata;
  /**
  * BucketSpec defines the desired state of Bucket. In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally unique, and the namespace is shared by all Amazon Web Services accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#spec DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec;
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#annotations DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#labels DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#namespace DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerateToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerateToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags | cdktf.IResolvable | undefined) {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tags DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._tags.internalValue = value.tags;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndTags[] | cdktf.IResolvable) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTagToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTagToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter {
  /**
  * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#and DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#and}
  */
  readonly and?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * A container of a key value name pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tag DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tag}
  */
  readonly tag?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndToTerraform(struct!.and),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTagToTerraform(struct!.tag),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#bucket DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#bucket_account_id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#bucket_account_id}
  */
  readonly bucketAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#format DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    bucket_account_id: cdktf.stringToTerraform(struct!.bucketAccountId),
    format: cdktf.stringToTerraform(struct!.format),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_account_id: {
      value: cdktf.stringToHclTerraform(struct!.bucketAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAccountId = this._bucketAccountId;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketAccountId = undefined;
      this._format = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketAccountId = value.bucketAccountId;
      this._format = value.format;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_account_id - computed: false, optional: true, required: false
  private _bucketAccountId?: string; 
  public get bucketAccountId() {
    return this.getStringAttribute('bucket_account_id');
  }
  public set bucketAccountId(value: string) {
    this._bucketAccountId = value;
  }
  public resetBucketAccountId() {
    this._bucketAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAccountIdInput() {
    return this._bucketAccountId;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination {
  /**
  * Contains information about where to publish the analytics results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#s3_bucket_destination DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#s3_bucket_destination}
  */
  readonly s3BucketDestination?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_destination: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct!.s3BucketDestination),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket_destination: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestinationToHclTerraform(struct!.s3BucketDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketDestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
    }
  }

  // s3_bucket_destination - computed: false, optional: true, required: false
  private _s3BucketDestination = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestinationOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationS3BucketDestination) {
    this._s3BucketDestination.internalValue = value;
  }
  public resetS3BucketDestination() {
    this._s3BucketDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport {
  /**
  * Where to publish the analytics results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#destination DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#destination}
  */
  readonly destination?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#output_schema_version DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#output_schema_version}
  */
  readonly outputSchemaVersion?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationToTerraform(struct!.destination),
    output_schema_version: cdktf.stringToTerraform(struct!.outputSchemaVersion),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination",
    },
    output_schema_version: {
      value: cdktf.stringToHclTerraform(struct!.outputSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._outputSchemaVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._outputSchemaVersion = value.outputSchemaVersion;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // output_schema_version - computed: false, optional: true, required: false
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  public resetOutputSchemaVersion() {
    this._outputSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis {
  /**
  * Container for data related to the storage class analysis for an Amazon S3 bucket for export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#data_export DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#data_export}
  */
  readonly dataExport?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_export: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportToTerraform(struct!.dataExport),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_export: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportToHclTerraform(struct!.dataExport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExport = this._dataExport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataExport.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataExport.internalValue = value.dataExport;
    }
  }

  // data_export - computed: false, optional: true, required: false
  private _dataExport = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExportOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }
  public putDataExport(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisDataExport) {
    this._dataExport.internalValue = value;
  }
  public resetDataExport() {
    this._dataExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExportInput() {
    return this._dataExport.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics {
  /**
  * The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#storage_class_analysis DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#storage_class_analysis}
  */
  readonly storageClassAnalysis?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    storage_class_analysis: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisToTerraform(struct!.storageClassAnalysis),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_analysis: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisToHclTerraform(struct!.storageClassAnalysis),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._storageClassAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassAnalysis = this._storageClassAnalysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._storageClassAnalysis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._storageClassAnalysis.internalValue = value.storageClassAnalysis;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // storage_class_analysis - computed: false, optional: true, required: false
  private _storageClassAnalysis = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysisOutputReference(this, "storage_class_analysis");
  public get storageClassAnalysis() {
    return this._storageClassAnalysis;
  }
  public putStorageClassAnalysis(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsStorageClassAnalysis) {
    this._storageClassAnalysis.internalValue = value;
  }
  public resetStorageClassAnalysis() {
    this._storageClassAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassAnalysisInput() {
    return this._storageClassAnalysis.internalValue;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#allowed_headers DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#allowed_methods DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#allowed_origins DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#expose_headers DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#max_age_seconds DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    id: cdktf.stringToTerraform(struct!.id),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposeHeaders = undefined;
      this._id = undefined;
      this._maxAgeSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._id = value.id;
      this._maxAgeSeconds = value.maxAgeSeconds;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#cors_rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#cors_rules}
  */
  readonly corsRules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesToTerraform, false)(struct!.corsRules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cors_rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesToHclTerraform, false)(struct!.corsRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRules = this._corsRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._corsRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._corsRules.internalValue = value.corsRules;
    }
  }

  // cors_rules - computed: false, optional: true, required: false
  private _corsRules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRulesList(this, "cors_rules", false);
  public get corsRules() {
    return this._corsRules;
  }
  public putCorsRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsCorsRules[] | cdktf.IResolvable) {
    this._corsRules.internalValue = value;
  }
  public resetCorsRules() {
    this._corsRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRulesInput() {
    return this._corsRules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#location_constraint DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#location_constraint}
  */
  readonly locationConstraint?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfigurationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_constraint: cdktf.stringToTerraform(struct!.locationConstraint),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfigurationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_constraint: {
      value: cdktf.stringToHclTerraform(struct!.locationConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationConstraint = this._locationConstraint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationConstraint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationConstraint = value.locationConstraint;
    }
  }

  // location_constraint - computed: false, optional: true, required: false
  private _locationConstraint?: string; 
  public get locationConstraint() {
    return this.getStringAttribute('location_constraint');
  }
  public set locationConstraint(value: string) {
    this._locationConstraint = value;
  }
  public resetLocationConstraint() {
    this._locationConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationConstraintInput() {
    return this._locationConstraint;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#kms_master_key_id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#sse_algorithm DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefaultToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefaultToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_master_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsMasterKeyId = undefined;
      this._sseAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._sseAlgorithm = value.sseAlgorithm;
    }
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // sse_algorithm - computed: false, optional: true, required: false
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  public resetSseAlgorithm() {
    this._sseAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules {
  /**
  * Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. If you don't specify a customer managed key at configuration, Amazon S3 automatically creates an Amazon Web Services KMS key in your Amazon Web Services account the first time that you add an object encrypted with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS. For more information, see PUT Bucket encryption (https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html) in the Amazon S3 API Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#apply_server_side_encryption_by_default DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#apply_server_side_encryption_by_default}
  */
  readonly applyServerSideEncryptionByDefault?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#bucket_key_enabled DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_server_side_encryption_by_default: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefaultToTerraform(struct!.applyServerSideEncryptionByDefault),
    bucket_key_enabled: cdktf.booleanToTerraform(struct!.bucketKeyEnabled),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_server_side_encryption_by_default: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefaultToHclTerraform(struct!.applyServerSideEncryptionByDefault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault",
    },
    bucket_key_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bucketKeyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyServerSideEncryptionByDefault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyServerSideEncryptionByDefault = this._applyServerSideEncryptionByDefault?.internalValue;
    }
    if (this._bucketKeyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketKeyEnabled = this._bucketKeyEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyServerSideEncryptionByDefault.internalValue = undefined;
      this._bucketKeyEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyServerSideEncryptionByDefault.internalValue = value.applyServerSideEncryptionByDefault;
      this._bucketKeyEnabled = value.bucketKeyEnabled;
    }
  }

  // apply_server_side_encryption_by_default - computed: false, optional: true, required: false
  private _applyServerSideEncryptionByDefault = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefaultOutputReference(this, "apply_server_side_encryption_by_default");
  public get applyServerSideEncryptionByDefault() {
    return this._applyServerSideEncryptionByDefault;
  }
  public putApplyServerSideEncryptionByDefault(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesApplyServerSideEncryptionByDefault) {
    this._applyServerSideEncryptionByDefault.internalValue = value;
  }
  public resetApplyServerSideEncryptionByDefault() {
    this._applyServerSideEncryptionByDefault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyServerSideEncryptionByDefaultInput() {
    return this._applyServerSideEncryptionByDefault.internalValue;
  }

  // bucket_key_enabled - computed: false, optional: true, required: false
  private _bucketKeyEnabled?: boolean | cdktf.IResolvable; 
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }
  public set bucketKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._bucketKeyEnabled = value;
  }
  public resetBucketKeyEnabled() {
    this._bucketKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketKeyEnabledInput() {
    return this._bucketKeyEnabled;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags | cdktf.IResolvable | undefined) {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tags DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._tags.internalValue = value.tags;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndTags[] | cdktf.IResolvable) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTagToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTagToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter {
  /**
  * A container for specifying S3 Intelligent-Tiering filters. The filters determine the subset of objects to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#and DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#and}
  */
  readonly and?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * A container of a key value name pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tag DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tag}
  */
  readonly tag?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndToTerraform(struct!.and),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTagToTerraform(struct!.tag),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#access_tier DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#days DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#days}
  */
  readonly days?: number;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_tier: cdktf.stringToTerraform(struct!.accessTier),
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_tier: {
      value: cdktf.stringToHclTerraform(struct!.accessTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTier = this._accessTier;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTier = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTier = value.accessTier;
      this._days = value.days;
    }
  }

  // access_tier - computed: false, optional: true, required: false
  private _accessTier?: string; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering {
  /**
  * The Filter is used to identify objects that the S3 Intelligent-Tiering configuration applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tierings DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tierings}
  */
  readonly tierings?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
    tierings: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsToTerraform, false)(struct!.tierings),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tierings: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsToHclTerraform, false)(struct!.tierings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tierings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierings = this._tierings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._status = undefined;
      this._tierings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._status = value.status;
      this._tierings.internalValue = value.tierings;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // tierings - computed: false, optional: true, required: false
  private _tierings = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTieringsList(this, "tierings", false);
  public get tierings() {
    return this._tierings;
  }
  public putTierings(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringTierings[] | cdktf.IResolvable) {
    this._tierings.internalValue = value;
  }
  public resetTierings() {
    this._tierings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringsInput() {
    return this._tierings.internalValue;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key_id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key_id}
  */
  readonly keyId?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKmsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKmsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption {
  /**
  * Specifies the use of SSE-KMS to encrypt delivered inventory reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#sse_kms DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#sse_kms}
  */
  readonly sseKms?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_kms: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKmsToTerraform(struct!.sseKms),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sse_kms: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKmsToHclTerraform(struct!.sseKms),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKms = this._sseKms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sseKms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sseKms.internalValue = value.sseKms;
    }
  }

  // sse_kms - computed: false, optional: true, required: false
  private _sseKms = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKmsOutputReference(this, "sse_kms");
  public get sseKms() {
    return this._sseKms;
  }
  public putSseKms(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionSseKms) {
    this._sseKms.internalValue = value;
  }
  public resetSseKms() {
    this._sseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsInput() {
    return this._sseKms.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#account_id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#bucket DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Contains the type of server-side encryption used to encrypt the inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#encryption DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#encryption}
  */
  readonly encryption?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#format DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    encryption: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionToTerraform(struct!.encryption),
    format: cdktf.stringToTerraform(struct!.format),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._bucket = undefined;
      this._encryption.internalValue = undefined;
      this._format = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._bucket = value.bucket;
      this._encryption.internalValue = value.encryption;
      this._format = value.format;
      this._prefix = value.prefix;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination {
  /**
  * Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#s3_bucket_destination DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#s3_bucket_destination}
  */
  readonly s3BucketDestination?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_destination: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationToTerraform(struct!.s3BucketDestination),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket_destination: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationToHclTerraform(struct!.s3BucketDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketDestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
    }
  }

  // s3_bucket_destination - computed: false, optional: true, required: false
  private _s3BucketDestination = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestinationOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationS3BucketDestination) {
    this._s3BucketDestination.internalValue = value;
  }
  public resetS3BucketDestination() {
    this._s3BucketDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#frequency DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#frequency}
  */
  readonly frequency?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryScheduleToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryScheduleToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory {
  /**
  * Specifies the inventory configuration for an Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#destination DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#destination}
  */
  readonly destination?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination;
  /**
  * Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#included_object_versions DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#included_object_versions}
  */
  readonly includedObjectVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#is_enabled DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#optional_fields DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#optional_fields}
  */
  readonly optionalFields?: string[];
  /**
  * Specifies the schedule for generating inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#schedule DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#schedule}
  */
  readonly schedule?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationToTerraform(struct!.destination),
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    included_object_versions: cdktf.stringToTerraform(struct!.includedObjectVersions),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    optional_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionalFields),
    schedule: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryScheduleToTerraform(struct!.schedule),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination",
    },
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    included_object_versions: {
      value: cdktf.stringToHclTerraform(struct!.includedObjectVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optional_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionalFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includedObjectVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedObjectVersions = this._includedObjectVersions;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._optionalFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalFields = this._optionalFields;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._includedObjectVersions = undefined;
      this._isEnabled = undefined;
      this._optionalFields = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._includedObjectVersions = value.includedObjectVersions;
      this._isEnabled = value.isEnabled;
      this._optionalFields = value.optionalFields;
      this._schedule.internalValue = value.schedule;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // included_object_versions - computed: false, optional: true, required: false
  private _includedObjectVersions?: string; 
  public get includedObjectVersions() {
    return this.getStringAttribute('included_object_versions');
  }
  public set includedObjectVersions(value: string) {
    this._includedObjectVersions = value;
  }
  public resetIncludedObjectVersions() {
    this._includedObjectVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectVersionsInput() {
    return this._includedObjectVersions;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // optional_fields - computed: false, optional: true, required: false
  private _optionalFields?: string[]; 
  public get optionalFields() {
    return this.getListAttribute('optional_fields');
  }
  public set optionalFields(value: string[]) {
    this._optionalFields = value;
  }
  public resetOptionalFields() {
    this._optionalFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalFieldsInput() {
    return this._optionalFields;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventorySchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#days_after_initiation DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#days_after_initiation}
  */
  readonly daysAfterInitiation?: number;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUploadToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_after_initiation: {
      value: cdktf.numberToHclTerraform(struct!.daysAfterInitiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: false, optional: true, required: false
  private _daysAfterInitiation?: number; 
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  public resetDaysAfterInitiation() {
    this._daysAfterInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#date DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#days DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#expired_object_delete_marker DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpirationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpirationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expired_object_delete_marker: {
      value: cdktf.booleanToHclTerraform(struct!.expiredObjectDeleteMarker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._expiredObjectDeleteMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._days = undefined;
      this._expiredObjectDeleteMarker = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._days = value.days;
      this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // expired_object_delete_marker - computed: false, optional: true, required: false
  private _expiredObjectDeleteMarker?: boolean | cdktf.IResolvable; 
  public get expiredObjectDeleteMarker() {
    return this.getBooleanAttribute('expired_object_delete_marker');
  }
  public set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable) {
    this._expiredObjectDeleteMarker = value;
  }
  public resetExpiredObjectDeleteMarker() {
    this._expiredObjectDeleteMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredObjectDeleteMarkerInput() {
    return this._expiredObjectDeleteMarker;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags | cdktf.IResolvable | undefined) {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#object_size_greater_than DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#object_size_less_than DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tags DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_greater_than: cdktf.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_size_greater_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size_less_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._tags.internalValue = value.tags;
    }
  }

  // object_size_greater_than - computed: false, optional: true, required: false
  private _objectSizeGreaterThan?: number; 
  public get objectSizeGreaterThan() {
    return this.getNumberAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: number) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: false, optional: true, required: false
  private _objectSizeLessThan?: number; 
  public get objectSizeLessThan() {
    return this.getNumberAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: number) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndTags[] | cdktf.IResolvable) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTagToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTagToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter {
  /**
  * This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#and DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#and}
  */
  readonly and?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#object_size_greater_than DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#object_size_less_than DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * A container of a key value name pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tag DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tag}
  */
  readonly tag?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndToTerraform(struct!.and),
    object_size_greater_than: cdktf.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTagToTerraform(struct!.tag),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd",
    },
    object_size_greater_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_size_less_than: {
      value: cdktf.numberToHclTerraform(struct!.objectSizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // object_size_greater_than - computed: false, optional: true, required: false
  private _objectSizeGreaterThan?: number; 
  public get objectSizeGreaterThan() {
    return this.getNumberAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: number) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: false, optional: true, required: false
  private _objectSizeLessThan?: number; 
  public get objectSizeLessThan() {
    return this.getNumberAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: number) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#newer_noncurrent_versions DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#noncurrent_days DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#noncurrent_days}
  */
  readonly noncurrentDays?: number;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpirationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_noncurrent_versions: cdktf.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktf.numberToTerraform(struct!.noncurrentDays),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpirationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktf.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_days: {
      value: cdktf.numberToHclTerraform(struct!.noncurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
    }
  }

  // newer_noncurrent_versions - computed: false, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: false, optional: true, required: false
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  public resetNoncurrentDays() {
    this._noncurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#newer_noncurrent_versions DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#noncurrent_days DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#noncurrent_days}
  */
  readonly noncurrentDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#storage_class DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_noncurrent_versions: cdktf.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktf.numberToTerraform(struct!.noncurrentDays),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktf.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_days: {
      value: cdktf.numberToHclTerraform(struct!.noncurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
      this._storageClass = value.storageClass;
    }
  }

  // newer_noncurrent_versions - computed: false, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: false, optional: true, required: false
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  public resetNoncurrentDays() {
    this._noncurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#date DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#days DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#storage_class DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._days = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._days = value.days;
      this._storageClass = value.storageClass;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules {
  /**
  * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy (https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the Amazon S3 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#abort_incomplete_multipart_upload DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload;
  /**
  * Container for the expiration for the lifecycle of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#expiration DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#expiration}
  */
  readonly expiration?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration;
  /**
  * The Filter is used to identify objects that a Lifecycle Rule applies to. A Filter must have exactly one of Prefix, Tag, or And specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#noncurrent_version_expiration DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#noncurrent_version_transitions DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#noncurrent_version_transitions}
  */
  readonly noncurrentVersionTransitions?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#transitions DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#transitions}
  */
  readonly transitions?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_incomplete_multipart_upload: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpirationToTerraform(struct!.expiration),
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    noncurrent_version_expiration: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpirationToTerraform(struct!.noncurrentVersionExpiration),
    noncurrent_version_transitions: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsToTerraform, false)(struct!.noncurrentVersionTransitions),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    status: cdktf.stringToTerraform(struct!.status),
    transitions: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsToTerraform, false)(struct!.transitions),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_incomplete_multipart_upload: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUploadToHclTerraform(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload",
    },
    expiration: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpirationToHclTerraform(struct!.expiration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration",
    },
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    noncurrent_version_expiration: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpirationToHclTerraform(struct!.noncurrentVersionExpiration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration",
    },
    noncurrent_version_transitions: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsToHclTerraform, false)(struct!.noncurrentVersionTransitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transitions: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsToHclTerraform, false)(struct!.transitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._expiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._noncurrentVersionExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionExpiration = this._noncurrentVersionExpiration?.internalValue;
    }
    if (this._noncurrentVersionTransitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionTransitions = this._noncurrentVersionTransitions?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._transitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitions = this._transitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expiration.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._noncurrentVersionExpiration.internalValue = undefined;
      this._noncurrentVersionTransitions.internalValue = undefined;
      this._prefix = undefined;
      this._status = undefined;
      this._transitions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expiration.internalValue = value.expiration;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
      this._noncurrentVersionTransitions.internalValue = value.noncurrentVersionTransitions;
      this._prefix = value.prefix;
      this._status = value.status;
      this._transitions.internalValue = value.transitions;
    }
  }

  // abort_incomplete_multipart_upload - computed: false, optional: true, required: false
  private _abortIncompleteMultipartUpload = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesAbortIncompleteMultipartUpload) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesExpiration) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // noncurrent_version_expiration - computed: false, optional: true, required: false
  private _noncurrentVersionExpiration = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpirationOutputReference(this, "noncurrent_version_expiration");
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }
  public putNoncurrentVersionExpiration(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionExpiration) {
    this._noncurrentVersionExpiration.internalValue = value;
  }
  public resetNoncurrentVersionExpiration() {
    this._noncurrentVersionExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionExpirationInput() {
    return this._noncurrentVersionExpiration.internalValue;
  }

  // noncurrent_version_transitions - computed: false, optional: true, required: false
  private _noncurrentVersionTransitions = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitionsList(this, "noncurrent_version_transitions", false);
  public get noncurrentVersionTransitions() {
    return this._noncurrentVersionTransitions;
  }
  public putNoncurrentVersionTransitions(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesNoncurrentVersionTransitions[] | cdktf.IResolvable) {
    this._noncurrentVersionTransitions.internalValue = value;
  }
  public resetNoncurrentVersionTransitions() {
    this._noncurrentVersionTransitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionTransitionsInput() {
    return this._noncurrentVersionTransitions.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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

  // transitions - computed: false, optional: true, required: false
  private _transitions = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitionsList(this, "transitions", false);
  public get transitions() {
    return this._transitions;
  }
  public putTransitions(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesTransitions[] | cdktf.IResolvable) {
    this._transitions.internalValue = value;
  }
  public resetTransitions() {
    this._transitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionsInput() {
    return this._transitions.internalValue;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#display_name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#email_address DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#type_ DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#u_ri DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#u_ri}
  */
  readonly uRi?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGranteeToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    id: cdktf.stringToTerraform(struct!.id),
    type_: cdktf.stringToTerraform(struct!.type),
    u_ri: cdktf.stringToTerraform(struct!.uRi),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGranteeToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGranteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._emailAddress = undefined;
      this._id = undefined;
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
      this._displayName = value.displayName;
      this._emailAddress = value.emailAddress;
      this._id = value.id;
      this._type = value.type;
      this._uRi = value.uRi;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants {
  /**
  * Container for the person being granted permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#grantee DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#grantee}
  */
  readonly grantee?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#permission DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#permission}
  */
  readonly permission?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grantee: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGranteeToTerraform(struct!.grantee),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grantee: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGranteeToHclTerraform(struct!.grantee),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grantee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantee = this._grantee?.internalValue;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grantee.internalValue = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grantee.internalValue = value.grantee;
      this._permission = value.permission;
    }
  }

  // grantee - computed: false, optional: true, required: false
  private _grantee = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGranteeOutputReference(this, "grantee");
  public get grantee() {
    return this._grantee;
  }
  public putGrantee(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsGrantee) {
    this._grantee.internalValue = value;
  }
  public resetGrantee() {
    this._grantee.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee.internalValue;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#target_bucket DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#target_bucket}
  */
  readonly targetBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#target_grants DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#target_grants}
  */
  readonly targetGrants?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#target_prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#target_prefix}
  */
  readonly targetPrefix?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_grants: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsToTerraform, false)(struct!.targetGrants),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_bucket: {
      value: cdktf.stringToHclTerraform(struct!.targetBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_grants: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsToHclTerraform, false)(struct!.targetGrants),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsList",
    },
    target_prefix: {
      value: cdktf.stringToHclTerraform(struct!.targetPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBucket = this._targetBucket;
    }
    if (this._targetGrants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGrants = this._targetGrants?.internalValue;
    }
    if (this._targetPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPrefix = this._targetPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetBucket = undefined;
      this._targetGrants.internalValue = undefined;
      this._targetPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetBucket = value.targetBucket;
      this._targetGrants.internalValue = value.targetGrants;
      this._targetPrefix = value.targetPrefix;
    }
  }

  // target_bucket - computed: false, optional: true, required: false
  private _targetBucket?: string; 
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }
  public set targetBucket(value: string) {
    this._targetBucket = value;
  }
  public resetTargetBucket() {
    this._targetBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBucketInput() {
    return this._targetBucket;
  }

  // target_grants - computed: false, optional: true, required: false
  private _targetGrants = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrantsList(this, "target_grants", false);
  public get targetGrants() {
    return this._targetGrants;
  }
  public putTargetGrants(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledTargetGrants[] | cdktf.IResolvable) {
    this._targetGrants.internalValue = value;
  }
  public resetTargetGrants() {
    this._targetGrants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGrantsInput() {
    return this._targetGrants.internalValue;
  }

  // target_prefix - computed: false, optional: true, required: false
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  public resetTargetPrefix() {
    this._targetPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging {
  /**
  * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket. For more information, see PUT Bucket logging (https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html) in the Amazon S3 API Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#logging_enabled DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#logging_enabled}
  */
  readonly loggingEnabled?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging_enabled: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledToTerraform(struct!.loggingEnabled),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging_enabled: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledToHclTerraform(struct!.loggingEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingEnabled = this._loggingEnabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loggingEnabled.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loggingEnabled.internalValue = value.loggingEnabled;
    }
  }

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabledOutputReference(this, "logging_enabled");
  public get loggingEnabled() {
    return this._loggingEnabled;
  }
  public putLoggingEnabled(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingLoggingEnabled) {
    this._loggingEnabled.internalValue = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags | cdktf.IResolvable | undefined) {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#access_point_arn DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tags DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_arn: cdktf.stringToTerraform(struct!.accessPointArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point_arn: {
      value: cdktf.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._prefix = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._prefix = value.prefix;
      this._tags.internalValue = value.tags;
    }
  }

  // access_point_arn - computed: false, optional: true, required: false
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndTags[] | cdktf.IResolvable) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTagToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTagToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#access_point_arn DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#and DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#and}
  */
  readonly and?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * A container of a key value name pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tag DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tag}
  */
  readonly tag?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_arn: cdktf.stringToTerraform(struct!.accessPointArn),
    and: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndToTerraform(struct!.and),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTagToTerraform(struct!.tag),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point_arn: {
      value: cdktf.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    and: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._and.internalValue = undefined;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._and.internalValue = value.and;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
    }
  }

  // access_point_arn - computed: false, optional: true, required: false
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // and - computed: false, optional: true, required: false
  private _and = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics {
  /**
  * Specifies a metrics configuration filter. The metrics configuration only includes objects that meet the filter's criteria. A filter must be a prefix, an object tag, an access point ARN, or a conjunction (MetricsAndOperator). For more information, see PutBucketMetricsConfiguration (https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter.internalValue = value.filter;
      this._id = value.id;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey {
  /**
  * A list of containers for the key-value pair that defines the criteria for the filter rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter_rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter_rules}
  */
  readonly filterRules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesToTerraform, false)(struct!.filterRules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesToHclTerraform, false)(struct!.filterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterRules = this._filterRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterRules.internalValue = value.filterRules;
    }
  }

  // filter_rules - computed: false, optional: true, required: false
  private _filterRules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRulesList(this, "filter_rules", false);
  public get filterRules() {
    return this._filterRules;
  }
  public putFilterRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable) {
    this._filterRules.internalValue = value;
  }
  public resetFilterRules() {
    this._filterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRulesInput() {
    return this._filterRules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter {
  /**
  * A container for object key name prefix and suffix filtering rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyToTerraform(struct!.key),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key.internalValue = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#events DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#events}
  */
  readonly events?: string[];
  /**
  * Specifies object key name filtering rules. For information about key name filtering, see Configuring Event Notifications (https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the Amazon S3 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter;
  /**
  * An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#lambda_function_arn DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_function_arn: {
      value: cdktf.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lambda_function_arn - computed: false, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey {
  /**
  * A list of containers for the key-value pair that defines the criteria for the filter rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter_rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter_rules}
  */
  readonly filterRules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesToTerraform, false)(struct!.filterRules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesToHclTerraform, false)(struct!.filterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterRules = this._filterRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterRules.internalValue = value.filterRules;
    }
  }

  // filter_rules - computed: false, optional: true, required: false
  private _filterRules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRulesList(this, "filter_rules", false);
  public get filterRules() {
    return this._filterRules;
  }
  public putFilterRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable) {
    this._filterRules.internalValue = value;
  }
  public resetFilterRules() {
    this._filterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRulesInput() {
    return this._filterRules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter {
  /**
  * A container for object key name prefix and suffix filtering rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyToTerraform(struct!.key),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key.internalValue = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#events DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#events}
  */
  readonly events?: string[];
  /**
  * Specifies object key name filtering rules. For information about key name filtering, see Configuring Event Notifications (https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the Amazon S3 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter;
  /**
  * An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#queue_arn DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#queue_arn}
  */
  readonly queueArn?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_arn: {
      value: cdktf.stringToHclTerraform(struct!.queueArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._queueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueArn = this._queueArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._queueArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._queueArn = value.queueArn;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // queue_arn - computed: false, optional: true, required: false
  private _queueArn?: string; 
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }
  public set queueArn(value: string) {
    this._queueArn = value;
  }
  public resetQueueArn() {
    this._queueArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueArnInput() {
    return this._queueArn;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey {
  /**
  * A list of containers for the key-value pair that defines the criteria for the filter rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter_rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter_rules}
  */
  readonly filterRules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesToTerraform, false)(struct!.filterRules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesToHclTerraform, false)(struct!.filterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterRules = this._filterRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterRules.internalValue = value.filterRules;
    }
  }

  // filter_rules - computed: false, optional: true, required: false
  private _filterRules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRulesList(this, "filter_rules", false);
  public get filterRules() {
    return this._filterRules;
  }
  public putFilterRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyFilterRules[] | cdktf.IResolvable) {
    this._filterRules.internalValue = value;
  }
  public resetFilterRules() {
    this._filterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRulesInput() {
    return this._filterRules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter {
  /**
  * A container for object key name prefix and suffix filtering rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyToTerraform(struct!.key),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key.internalValue = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#events DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#events}
  */
  readonly events?: string[];
  /**
  * Specifies object key name filtering rules. For information about key name filtering, see Configuring Event Notifications (https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the Amazon S3 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter;
  /**
  * An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#topic_arn DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#topic_arn}
  */
  readonly topicArn?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._topicArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._topicArn = value.topicArn;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#lambda_function_configurations DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#lambda_function_configurations}
  */
  readonly lambdaFunctionConfigurations?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#queue_configurations DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#queue_configurations}
  */
  readonly queueConfigurations?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#topic_configurations DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#topic_configurations}
  */
  readonly topicConfigurations?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_function_configurations: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsToTerraform, false)(struct!.lambdaFunctionConfigurations),
    queue_configurations: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsToTerraform, false)(struct!.queueConfigurations),
    topic_configurations: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsToTerraform, false)(struct!.topicConfigurations),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lambda_function_configurations: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsToHclTerraform, false)(struct!.lambdaFunctionConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsList",
    },
    queue_configurations: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsToHclTerraform, false)(struct!.queueConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsList",
    },
    topic_configurations: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsToHclTerraform, false)(struct!.topicConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaFunctionConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionConfigurations = this._lambdaFunctionConfigurations?.internalValue;
    }
    if (this._queueConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueConfigurations = this._queueConfigurations?.internalValue;
    }
    if (this._topicConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicConfigurations = this._topicConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaFunctionConfigurations.internalValue = undefined;
      this._queueConfigurations.internalValue = undefined;
      this._topicConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaFunctionConfigurations.internalValue = value.lambdaFunctionConfigurations;
      this._queueConfigurations.internalValue = value.queueConfigurations;
      this._topicConfigurations.internalValue = value.topicConfigurations;
    }
  }

  // lambda_function_configurations - computed: false, optional: true, required: false
  private _lambdaFunctionConfigurations = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurationsList(this, "lambda_function_configurations", false);
  public get lambdaFunctionConfigurations() {
    return this._lambdaFunctionConfigurations;
  }
  public putLambdaFunctionConfigurations(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationLambdaFunctionConfigurations[] | cdktf.IResolvable) {
    this._lambdaFunctionConfigurations.internalValue = value;
  }
  public resetLambdaFunctionConfigurations() {
    this._lambdaFunctionConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionConfigurationsInput() {
    return this._lambdaFunctionConfigurations.internalValue;
  }

  // queue_configurations - computed: false, optional: true, required: false
  private _queueConfigurations = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurationsList(this, "queue_configurations", false);
  public get queueConfigurations() {
    return this._queueConfigurations;
  }
  public putQueueConfigurations(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationQueueConfigurations[] | cdktf.IResolvable) {
    this._queueConfigurations.internalValue = value;
  }
  public resetQueueConfigurations() {
    this._queueConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueConfigurationsInput() {
    return this._queueConfigurations.internalValue;
  }

  // topic_configurations - computed: false, optional: true, required: false
  private _topicConfigurations = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurationsList(this, "topic_configurations", false);
  public get topicConfigurations() {
    return this._topicConfigurations;
  }
  public putTopicConfigurations(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationTopicConfigurations[] | cdktf.IResolvable) {
    this._topicConfigurations.internalValue = value;
  }
  public resetTopicConfigurations() {
    this._topicConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicConfigurationsInput() {
    return this._topicConfigurations.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules {
  /**
  * The container element for object ownership for a bucket's ownership controls. BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the bucket-owner-full-control canned ACL. ObjectWriter - The uploading account will own the object if the object is uploaded with the bucket-owner-full-control canned ACL. BucketOwnerEnforced - Access control lists (ACLs) are disabled and no longer affect permissions. The bucket owner automatically owns and has full control over every object in the bucket. The bucket only accepts PUT requests that don't specify an ACL or bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#object_ownership DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#object_ownership}
  */
  readonly objectOwnership?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_ownership: cdktf.stringToTerraform(struct!.objectOwnership),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_ownership: {
      value: cdktf.stringToHclTerraform(struct!.objectOwnership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectOwnership !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectOwnership = this._objectOwnership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectOwnership = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectOwnership = value.objectOwnership;
    }
  }

  // object_ownership - computed: false, optional: true, required: false
  private _objectOwnership?: string; 
  public get objectOwnership() {
    return this.getStringAttribute('object_ownership');
  }
  public set objectOwnership(value: string) {
    this._objectOwnership = value;
  }
  public resetObjectOwnership() {
    this._objectOwnership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectOwnershipInput() {
    return this._objectOwnership;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#block_public_ac_ls DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#block_public_ac_ls}
  */
  readonly blockPublicAcLs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#block_public_policy DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#ignore_public_ac_ls DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#ignore_public_ac_ls}
  */
  readonly ignorePublicAcLs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#restrict_public_buckets DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlockToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_public_ac_ls: cdktf.booleanToTerraform(struct!.blockPublicAcLs),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_ac_ls: cdktf.booleanToTerraform(struct!.ignorePublicAcLs),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlockToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_public_ac_ls: {
      value: cdktf.booleanToHclTerraform(struct!.blockPublicAcLs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_public_policy: {
      value: cdktf.booleanToHclTerraform(struct!.blockPublicPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_public_ac_ls: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePublicAcLs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_public_buckets: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPublicBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockPublicAcLs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicAcLs = this._blockPublicAcLs;
    }
    if (this._blockPublicPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicPolicy = this._blockPublicPolicy;
    }
    if (this._ignorePublicAcLs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePublicAcLs = this._ignorePublicAcLs;
    }
    if (this._restrictPublicBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPublicBuckets = this._restrictPublicBuckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockPublicAcLs = undefined;
      this._blockPublicPolicy = undefined;
      this._ignorePublicAcLs = undefined;
      this._restrictPublicBuckets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockPublicAcLs = value.blockPublicAcLs;
      this._blockPublicPolicy = value.blockPublicPolicy;
      this._ignorePublicAcLs = value.ignorePublicAcLs;
      this._restrictPublicBuckets = value.restrictPublicBuckets;
    }
  }

  // block_public_ac_ls - computed: false, optional: true, required: false
  private _blockPublicAcLs?: boolean | cdktf.IResolvable; 
  public get blockPublicAcLs() {
    return this.getBooleanAttribute('block_public_ac_ls');
  }
  public set blockPublicAcLs(value: boolean | cdktf.IResolvable) {
    this._blockPublicAcLs = value;
  }
  public resetBlockPublicAcLs() {
    this._blockPublicAcLs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAcLsInput() {
    return this._blockPublicAcLs;
  }

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktf.IResolvable; 
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean | cdktf.IResolvable) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy;
  }

  // ignore_public_ac_ls - computed: false, optional: true, required: false
  private _ignorePublicAcLs?: boolean | cdktf.IResolvable; 
  public get ignorePublicAcLs() {
    return this.getBooleanAttribute('ignore_public_ac_ls');
  }
  public set ignorePublicAcLs(value: boolean | cdktf.IResolvable) {
    this._ignorePublicAcLs = value;
  }
  public resetIgnorePublicAcLs() {
    this._ignorePublicAcLs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAcLsInput() {
    return this._ignorePublicAcLs;
  }

  // restrict_public_buckets - computed: false, optional: true, required: false
  private _restrictPublicBuckets?: boolean | cdktf.IResolvable; 
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
  public set restrictPublicBuckets(value: boolean | cdktf.IResolvable) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplicationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplicationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#owner DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#owner}
  */
  readonly owner?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner = value.owner;
    }
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#replica_kms_key_id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#replica_kms_key_id}
  */
  readonly replicaKmsKeyId?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfigurationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_kms_key_id: cdktf.stringToTerraform(struct!.replicaKmsKeyId),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfigurationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replica_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.replicaKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaKmsKeyId = this._replicaKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaKmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaKmsKeyId = value.replicaKmsKeyId;
    }
  }

  // replica_kms_key_id - computed: false, optional: true, required: false
  private _replicaKmsKeyId?: string; 
  public get replicaKmsKeyId() {
    return this.getStringAttribute('replica_kms_key_id');
  }
  public set replicaKmsKeyId(value: string) {
    this._replicaKmsKeyId = value;
  }
  public resetReplicaKmsKeyId() {
    this._replicaKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaKmsKeyIdInput() {
    return this._replicaKmsKeyId;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#minutes DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#minutes}
  */
  readonly minutes?: number;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThresholdToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThresholdToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minutes = value.minutes;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics {
  /**
  * A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics EventThreshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#event_threshold DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#event_threshold}
  */
  readonly eventThreshold?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_threshold: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThresholdToTerraform(struct!.eventThreshold),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_threshold: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThresholdToHclTerraform(struct!.eventThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold",
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThreshold = this._eventThreshold?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventThreshold.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventThreshold.internalValue = value.eventThreshold;
      this._status = value.status;
    }
  }

  // event_threshold - computed: false, optional: true, required: false
  private _eventThreshold = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThresholdOutputReference(this, "event_threshold");
  public get eventThreshold() {
    return this._eventThreshold;
  }
  public putEventThreshold(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsEventThreshold) {
    this._eventThreshold.internalValue = value;
  }
  public resetEventThreshold() {
    this._eventThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdInput() {
    return this._eventThreshold.internalValue;
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#minutes DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#minutes}
  */
  readonly minutes?: number;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTimeToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTimeToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minutes = value.minutes;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
  /**
  * A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics EventThreshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#time DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#time}
  */
  readonly time?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    time: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTimeToTerraform(struct!.time),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._time.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._time.internalValue = value.time;
    }
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

  // time - computed: false, optional: true, required: false
  private _time = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeTime) {
    this._time.internalValue = value;
  }
  public resetTime() {
    this._time.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination {
  /**
  * A container for information about access control for replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#access_control_translation DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#access_control_translation}
  */
  readonly accessControlTranslation?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#account DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#bucket DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#encryption_configuration DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#encryption_configuration}
  */
  readonly encryptionConfiguration?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration;
  /**
  * A container specifying replication metrics-related settings enabling replication metrics and events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#metrics DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics;
  /**
  * A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a Metrics block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#replication_time DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#replication_time}
  */
  readonly replicationTime?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#storage_class DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_translation: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslationToTerraform(struct!.accessControlTranslation),
    account: cdktf.stringToTerraform(struct!.account),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    encryption_configuration: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    metrics: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsToTerraform(struct!.metrics),
    replication_time: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeToTerraform(struct!.replicationTime),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control_translation: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslationToHclTerraform(struct!.accessControlTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation",
    },
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_configuration: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration",
    },
    metrics: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics",
    },
    replication_time: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeToHclTerraform(struct!.replicationTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlTranslation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlTranslation = this._accessControlTranslation?.internalValue;
    }
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._replicationTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationTime = this._replicationTime?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlTranslation.internalValue = undefined;
      this._account = undefined;
      this._bucket = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._replicationTime.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlTranslation.internalValue = value.accessControlTranslation;
      this._account = value.account;
      this._bucket = value.bucket;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._metrics.internalValue = value.metrics;
      this._replicationTime.internalValue = value.replicationTime;
      this._storageClass = value.storageClass;
    }
  }

  // access_control_translation - computed: false, optional: true, required: false
  private _accessControlTranslation = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslationOutputReference(this, "access_control_translation");
  public get accessControlTranslation() {
    return this._accessControlTranslation;
  }
  public putAccessControlTranslation(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationAccessControlTranslation) {
    this._accessControlTranslation.internalValue = value;
  }
  public resetAccessControlTranslation() {
    this._accessControlTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlTranslationInput() {
    return this._accessControlTranslation.internalValue;
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // replication_time - computed: false, optional: true, required: false
  private _replicationTime = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTimeOutputReference(this, "replication_time");
  public get replicationTime() {
    return this._replicationTime;
  }
  public putReplicationTime(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationReplicationTime) {
    this._replicationTime.internalValue = value;
  }
  public resetReplicationTime() {
    this._replicationTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTimeInput() {
    return this._replicationTime.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplicationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplicationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags | cdktf.IResolvable | undefined) {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tags DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._tags.internalValue = value.tags;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndTags[] | cdktf.IResolvable) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTagToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTagToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag | cdktf.IResolvable | undefined) {
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter {
  /**
  * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example: * If you specify both a Prefix and a Tag filter, wrap these filters in an And tag. * If you specify a filter based on multiple tags, wrap the Tag elements in an And tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#and DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#and}
  */
  readonly and?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * A container of a key value name pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tag DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tag}
  */
  readonly tag?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndToTerraform(struct!.and),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTagToTerraform(struct!.tag),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._prefix = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._prefix = value.prefix;
      this._tag.internalValue = value.tag;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModificationsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria {
  /**
  * A filter that you can specify for selection for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when Filter is specified), you can specify this element and set the status to Enabled to replicate modifications on replicas. If you don't specify the Filter element, Amazon S3 assumes that the replication configuration is the earlier version, V1. In the earlier version, this element is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#replica_modifications DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#replica_modifications}
  */
  readonly replicaModifications?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications;
  /**
  * A container for filter information for the selection of S3 objects encrypted with Amazon Web Services KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#sse_kms_encrypted_objects DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#sse_kms_encrypted_objects}
  */
  readonly sseKmsEncryptedObjects?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_modifications: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModificationsToTerraform(struct!.replicaModifications),
    sse_kms_encrypted_objects: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct!.sseKmsEncryptedObjects),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replica_modifications: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct!.replicaModifications),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications",
    },
    sse_kms_encrypted_objects: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct!.sseKmsEncryptedObjects),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaModifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaModifications = this._replicaModifications?.internalValue;
    }
    if (this._sseKmsEncryptedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKmsEncryptedObjects = this._sseKmsEncryptedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaModifications.internalValue = undefined;
      this._sseKmsEncryptedObjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaModifications.internalValue = value.replicaModifications;
      this._sseKmsEncryptedObjects.internalValue = value.sseKmsEncryptedObjects;
    }
  }

  // replica_modifications - computed: false, optional: true, required: false
  private _replicaModifications = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModificationsOutputReference(this, "replica_modifications");
  public get replicaModifications() {
    return this._replicaModifications;
  }
  public putReplicaModifications(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaReplicaModifications) {
    this._replicaModifications.internalValue = value;
  }
  public resetReplicaModifications() {
    this._replicaModifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaModificationsInput() {
    return this._replicaModifications.internalValue;
  }

  // sse_kms_encrypted_objects - computed: false, optional: true, required: false
  private _sseKmsEncryptedObjects = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this, "sse_kms_encrypted_objects");
  public get sseKmsEncryptedObjects() {
    return this._sseKmsEncryptedObjects;
  }
  public putSseKmsEncryptedObjects(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaSseKmsEncryptedObjects) {
    this._sseKmsEncryptedObjects.internalValue = value;
  }
  public resetSseKmsEncryptedObjects() {
    this._sseKmsEncryptedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsEncryptedObjectsInput() {
    return this._sseKmsEncryptedObjects.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules {
  /**
  * Specifies whether Amazon S3 replicates delete markers. If you specify a Filter in your replication configuration, you must also include a DeleteMarkerReplication element. If your Filter includes a Tag element, the DeleteMarkerReplication Status must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see Basic Rule Configuration (https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config). For more information about delete marker replication, see Basic Rule Configuration (https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html). If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility (https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#delete_marker_replication DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#delete_marker_replication}
  */
  readonly deleteMarkerReplication?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication;
  /**
  * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket and S3 Replication Time Control (S3 RTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#destination DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#destination}
  */
  readonly destination?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination;
  /**
  * Optional configuration to replicate existing source bucket objects. For more information, see Replicating Existing Objects (https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication) in the Amazon S3 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#existing_object_replication DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#existing_object_replication}
  */
  readonly existingObjectReplication?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication;
  /**
  * A filter that identifies the subset of objects to which the replication rule applies. A Filter must specify exactly one Prefix, Tag, or an And child element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#filter DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#filter}
  */
  readonly filter?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#id DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#prefix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#priority DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using a customer managed key stored in Amazon Web Services Key Management Service (SSE-KMS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#source_selection_criteria DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#source_selection_criteria}
  */
  readonly sourceSelectionCriteria?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_marker_replication: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplicationToTerraform(struct!.deleteMarkerReplication),
    destination: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationToTerraform(struct!.destination),
    existing_object_replication: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplicationToTerraform(struct!.existingObjectReplication),
    filter: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    source_selection_criteria: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaToTerraform(struct!.sourceSelectionCriteria),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_marker_replication: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplicationToHclTerraform(struct!.deleteMarkerReplication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication",
    },
    destination: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination",
    },
    existing_object_replication: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplicationToHclTerraform(struct!.existingObjectReplication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication",
    },
    filter: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_selection_criteria: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaToHclTerraform(struct!.sourceSelectionCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria",
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMarkerReplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMarkerReplication = this._deleteMarkerReplication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._existingObjectReplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingObjectReplication = this._existingObjectReplication?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sourceSelectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSelectionCriteria = this._sourceSelectionCriteria?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMarkerReplication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._existingObjectReplication.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._priority = undefined;
      this._sourceSelectionCriteria.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMarkerReplication.internalValue = value.deleteMarkerReplication;
      this._destination.internalValue = value.destination;
      this._existingObjectReplication.internalValue = value.existingObjectReplication;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._prefix = value.prefix;
      this._priority = value.priority;
      this._sourceSelectionCriteria.internalValue = value.sourceSelectionCriteria;
      this._status = value.status;
    }
  }

  // delete_marker_replication - computed: false, optional: true, required: false
  private _deleteMarkerReplication = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplicationOutputReference(this, "delete_marker_replication");
  public get deleteMarkerReplication() {
    return this._deleteMarkerReplication;
  }
  public putDeleteMarkerReplication(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDeleteMarkerReplication) {
    this._deleteMarkerReplication.internalValue = value;
  }
  public resetDeleteMarkerReplication() {
    this._deleteMarkerReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMarkerReplicationInput() {
    return this._deleteMarkerReplication.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // existing_object_replication - computed: false, optional: true, required: false
  private _existingObjectReplication = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplicationOutputReference(this, "existing_object_replication");
  public get existingObjectReplication() {
    return this._existingObjectReplication;
  }
  public putExistingObjectReplication(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesExistingObjectReplication) {
    this._existingObjectReplication.internalValue = value;
  }
  public resetExistingObjectReplication() {
    this._existingObjectReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingObjectReplicationInput() {
    return this._existingObjectReplication.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // source_selection_criteria - computed: false, optional: true, required: false
  private _sourceSelectionCriteria = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteriaOutputReference(this, "source_selection_criteria");
  public get sourceSelectionCriteria() {
    return this._sourceSelectionCriteria;
  }
  public putSourceSelectionCriteria(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesSourceSelectionCriteria) {
    this._sourceSelectionCriteria.internalValue = value;
  }
  public resetSourceSelectionCriteria() {
    this._sourceSelectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSelectionCriteriaInput() {
    return this._sourceSelectionCriteria.internalValue;
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#role DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._rules.internalValue = value.rules;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#payer DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#payer}
  */
  readonly payer?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPaymentToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payer: cdktf.stringToTerraform(struct!.payer),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPaymentToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payer: {
      value: cdktf.stringToHclTerraform(struct!.payer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPaymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payer !== undefined) {
      hasAnyValues = true;
      internalValueResult.payer = this._payer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payer = value.payer;
    }
  }

  // payer - computed: false, optional: true, required: false
  private _payer?: string; 
  public get payer() {
    return this.getStringAttribute('payer');
  }
  public set payer(value: string) {
    this._payer = value;
  }
  public resetPayer() {
    this._payer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payerInput() {
    return this._payer;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#value DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet | cdktf.IResolvable): any {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet | cdktf.IResolvable | undefined) {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tag_set DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tag_set}
  */
  readonly tagSet?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_set: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetToTerraform, false)(struct!.tagSet),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_set: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetToHclTerraform, false)(struct!.tagSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSet = this._tagSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagSet.internalValue = value.tagSet;
    }
  }

  // tag_set - computed: false, optional: true, required: false
  private _tagSet = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSetList(this, "tag_set", false);
  public get tagSet() {
    return this._tagSet;
  }
  public putTagSet(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingTagSet[] | cdktf.IResolvable) {
    this._tagSet.internalValue = value;
  }
  public resetTagSet() {
    this._tagSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSetInput() {
    return this._tagSet.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#status DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioningToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioningToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key}
  */
  readonly key?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocumentToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocumentToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#suffix DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocumentToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocumentToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suffix = value.suffix;
    }
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#host_name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#protocol DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsToToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsToToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._protocol = value.protocol;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#http_error_code_returned_equals DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#http_error_code_returned_equals}
  */
  readonly httpErrorCodeReturnedEquals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#key_prefix_equals DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#key_prefix_equals}
  */
  readonly keyPrefixEquals?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesConditionToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_error_code_returned_equals: cdktf.stringToTerraform(struct!.httpErrorCodeReturnedEquals),
    key_prefix_equals: cdktf.stringToTerraform(struct!.keyPrefixEquals),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesConditionToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_error_code_returned_equals: {
      value: cdktf.stringToHclTerraform(struct!.httpErrorCodeReturnedEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix_equals: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefixEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpErrorCodeReturnedEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCodeReturnedEquals = this._httpErrorCodeReturnedEquals;
    }
    if (this._keyPrefixEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefixEquals = this._keyPrefixEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpErrorCodeReturnedEquals = undefined;
      this._keyPrefixEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpErrorCodeReturnedEquals = value.httpErrorCodeReturnedEquals;
      this._keyPrefixEquals = value.keyPrefixEquals;
    }
  }

  // http_error_code_returned_equals - computed: false, optional: true, required: false
  private _httpErrorCodeReturnedEquals?: string; 
  public get httpErrorCodeReturnedEquals() {
    return this.getStringAttribute('http_error_code_returned_equals');
  }
  public set httpErrorCodeReturnedEquals(value: string) {
    this._httpErrorCodeReturnedEquals = value;
  }
  public resetHttpErrorCodeReturnedEquals() {
    this._httpErrorCodeReturnedEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeReturnedEqualsInput() {
    return this._httpErrorCodeReturnedEquals;
  }

  // key_prefix_equals - computed: false, optional: true, required: false
  private _keyPrefixEquals?: string; 
  public get keyPrefixEquals() {
    return this.getStringAttribute('key_prefix_equals');
  }
  public set keyPrefixEquals(value: string) {
    this._keyPrefixEquals = value;
  }
  public resetKeyPrefixEquals() {
    this._keyPrefixEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixEqualsInput() {
    return this._keyPrefixEquals;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#host_name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#http_redirect_code DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#http_redirect_code}
  */
  readonly httpRedirectCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#protocol DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#replace_key_prefix_with DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#replace_key_prefix_with}
  */
  readonly replaceKeyPrefixWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#replace_key_with DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#replace_key_with}
  */
  readonly replaceKeyWith?: string;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirectToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    http_redirect_code: cdktf.stringToTerraform(struct!.httpRedirectCode),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    replace_key_prefix_with: cdktf.stringToTerraform(struct!.replaceKeyPrefixWith),
    replace_key_with: cdktf.stringToTerraform(struct!.replaceKeyWith),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirectToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_redirect_code: {
      value: cdktf.stringToHclTerraform(struct!.httpRedirectCode),
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
    replace_key_prefix_with: {
      value: cdktf.stringToHclTerraform(struct!.replaceKeyPrefixWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_key_with: {
      value: cdktf.stringToHclTerraform(struct!.replaceKeyWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirectCode = this._httpRedirectCode;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._replaceKeyPrefixWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyPrefixWith = this._replaceKeyPrefixWith;
    }
    if (this._replaceKeyWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyWith = this._replaceKeyWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._httpRedirectCode = undefined;
      this._protocol = undefined;
      this._replaceKeyPrefixWith = undefined;
      this._replaceKeyWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._httpRedirectCode = value.httpRedirectCode;
      this._protocol = value.protocol;
      this._replaceKeyPrefixWith = value.replaceKeyPrefixWith;
      this._replaceKeyWith = value.replaceKeyWith;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_redirect_code - computed: false, optional: true, required: false
  private _httpRedirectCode?: string; 
  public get httpRedirectCode() {
    return this.getStringAttribute('http_redirect_code');
  }
  public set httpRedirectCode(value: string) {
    this._httpRedirectCode = value;
  }
  public resetHttpRedirectCode() {
    this._httpRedirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectCodeInput() {
    return this._httpRedirectCode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replace_key_prefix_with - computed: false, optional: true, required: false
  private _replaceKeyPrefixWith?: string; 
  public get replaceKeyPrefixWith() {
    return this.getStringAttribute('replace_key_prefix_with');
  }
  public set replaceKeyPrefixWith(value: string) {
    this._replaceKeyPrefixWith = value;
  }
  public resetReplaceKeyPrefixWith() {
    this._replaceKeyPrefixWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyPrefixWithInput() {
    return this._replaceKeyPrefixWith;
  }

  // replace_key_with - computed: false, optional: true, required: false
  private _replaceKeyWith?: string; 
  public get replaceKeyWith() {
    return this.getStringAttribute('replace_key_with');
  }
  public set replaceKeyWith(value: string) {
    this._replaceKeyWith = value;
  }
  public resetReplaceKeyWith() {
    this._replaceKeyWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyWithInput() {
    return this._replaceKeyWith;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules {
  /**
  * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the /docs folder, redirect to the /documents folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#condition DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#condition}
  */
  readonly condition?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition;
  /**
  * Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#redirect DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#redirect}
  */
  readonly redirect?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesConditionToTerraform(struct!.condition),
    redirect: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirectToTerraform(struct!.redirect),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition",
    },
    redirect: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._redirect.internalValue = value.redirect;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesOutputReference {
    return new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite {
  /**
  * The error information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#error_document DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#error_document}
  */
  readonly errorDocument?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument;
  /**
  * Container for the Suffix element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#index_document DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#index_document}
  */
  readonly indexDocument?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument;
  /**
  * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#redirect_all_requests_to DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#routing_rules DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#routing_rules}
  */
  readonly routingRules?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules[] | cdktf.IResolvable;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_document: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocumentToTerraform(struct!.errorDocument),
    index_document: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocumentToTerraform(struct!.indexDocument),
    redirect_all_requests_to: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsToToTerraform(struct!.redirectAllRequestsTo),
    routing_rules: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesToTerraform, false)(struct!.routingRules),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_document: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocumentToHclTerraform(struct!.errorDocument),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument",
    },
    index_document: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocumentToHclTerraform(struct!.indexDocument),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument",
    },
    redirect_all_requests_to: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsToToHclTerraform(struct!.redirectAllRequestsTo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo",
    },
    routing_rules: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesToHclTerraform, false)(struct!.routingRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorDocument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorDocument = this._errorDocument?.internalValue;
    }
    if (this._indexDocument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDocument = this._indexDocument?.internalValue;
    }
    if (this._redirectAllRequestsTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAllRequestsTo = this._redirectAllRequestsTo?.internalValue;
    }
    if (this._routingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRules = this._routingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorDocument.internalValue = undefined;
      this._indexDocument.internalValue = undefined;
      this._redirectAllRequestsTo.internalValue = undefined;
      this._routingRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorDocument.internalValue = value.errorDocument;
      this._indexDocument.internalValue = value.indexDocument;
      this._redirectAllRequestsTo.internalValue = value.redirectAllRequestsTo;
      this._routingRules.internalValue = value.routingRules;
    }
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocumentOutputReference(this, "error_document");
  public get errorDocument() {
    return this._errorDocument;
  }
  public putErrorDocument(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteErrorDocument) {
    this._errorDocument.internalValue = value;
  }
  public resetErrorDocument() {
    this._errorDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument.internalValue;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocumentOutputReference(this, "index_document");
  public get indexDocument() {
    return this._indexDocument;
  }
  public putIndexDocument(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteIndexDocument) {
    this._indexDocument.internalValue = value;
  }
  public resetIndexDocument() {
    this._indexDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument.internalValue;
  }

  // redirect_all_requests_to - computed: false, optional: true, required: false
  private _redirectAllRequestsTo = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsToOutputReference(this, "redirect_all_requests_to");
  public get redirectAllRequestsTo() {
    return this._redirectAllRequestsTo;
  }
  public putRedirectAllRequestsTo(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRedirectAllRequestsTo) {
    this._redirectAllRequestsTo.internalValue = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo.internalValue;
  }

  // routing_rules - computed: false, optional: true, required: false
  private _routingRules = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRulesList(this, "routing_rules", false);
  public get routingRules() {
    return this._routingRules;
  }
  public putRoutingRules(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteRoutingRules[] | cdktf.IResolvable) {
    this._routingRules.internalValue = value;
  }
  public resetRoutingRules() {
    this._routingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules.internalValue;
  }
}
export interface DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec {
  /**
  * Container for setting the transfer acceleration state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#accelerate DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#accelerate}
  */
  readonly accelerate?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate;
  /**
  * The canned ACL to apply to the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#acl DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#analytics DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#analytics}
  */
  readonly analytics?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics[] | cdktf.IResolvable;
  /**
  * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see Enabling Cross-Origin Resource Sharing (https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the Amazon S3 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#cors DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#cors}
  */
  readonly cors?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors;
  /**
  * The configuration information for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#create_bucket_configuration DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#create_bucket_configuration}
  */
  readonly createBucketConfiguration?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration;
  /**
  * Specifies the default server-side-encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#encryption DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#encryption}
  */
  readonly encryption?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption;
  /**
  * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#grant_full_control DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#grant_full_control}
  */
  readonly grantFullControl?: string;
  /**
  * Allows grantee to list the objects in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#grant_read DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#grant_read}
  */
  readonly grantRead?: string;
  /**
  * Allows grantee to read the bucket ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#grant_read_acp DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#grant_read_acp}
  */
  readonly grantReadAcp?: string;
  /**
  * Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#grant_write DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#grant_write}
  */
  readonly grantWrite?: string;
  /**
  * Allows grantee to write the ACL for the applicable bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#grant_write_acp DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#grant_write_acp}
  */
  readonly grantWriteAcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#intelligent_tiering DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#intelligent_tiering}
  */
  readonly intelligentTiering?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#inventory DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#inventory}
  */
  readonly inventory?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory[] | cdktf.IResolvable;
  /**
  * Container for lifecycle rules. You can add as many as 1,000 rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#lifecycle DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle;
  /**
  * Container for logging status information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#logging DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#metrics DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable;
  /**
  * The name of the bucket to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#name DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#notification DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#notification}
  */
  readonly notification?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification;
  /**
  * Specifies whether you want S3 Object Lock to be enabled for the new bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#object_lock_enabled_for_bucket DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#object_lock_enabled_for_bucket}
  */
  readonly objectLockEnabledForBucket?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#object_ownership DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#object_ownership}
  */
  readonly objectOwnership?: string;
  /**
  * The OwnershipControls (BucketOwnerEnforced, BucketOwnerPreferred, or ObjectWriter) that you want to apply to this Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#ownership_controls DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#ownership_controls}
  */
  readonly ownershipControls?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls;
  /**
  * The bucket policy as a JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#policy DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of 'Public' (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the Amazon S3 User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#public_access_block DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#public_access_block}
  */
  readonly publicAccessBlock?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock;
  /**
  * A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#replication DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#replication}
  */
  readonly replication?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication;
  /**
  * Container for Payer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#request_payment DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#request_payment}
  */
  readonly requestPayment?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment;
  /**
  * Container for the TagSet and Tag elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#tagging DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#tagging}
  */
  readonly tagging?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging;
  /**
  * Container for setting the versioning state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#versioning DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#versioning}
  */
  readonly versioning?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning;
  /**
  * Container for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#website DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest#website}
  */
  readonly website?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite;
}

export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecToTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerate: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerateToTerraform(struct!.accelerate),
    acl: cdktf.stringToTerraform(struct!.acl),
    analytics: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsToTerraform, false)(struct!.analytics),
    cors: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsToTerraform(struct!.cors),
    create_bucket_configuration: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfigurationToTerraform(struct!.createBucketConfiguration),
    encryption: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionToTerraform(struct!.encryption),
    grant_full_control: cdktf.stringToTerraform(struct!.grantFullControl),
    grant_read: cdktf.stringToTerraform(struct!.grantRead),
    grant_read_acp: cdktf.stringToTerraform(struct!.grantReadAcp),
    grant_write: cdktf.stringToTerraform(struct!.grantWrite),
    grant_write_acp: cdktf.stringToTerraform(struct!.grantWriteAcp),
    intelligent_tiering: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringToTerraform, false)(struct!.intelligentTiering),
    inventory: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryToTerraform, false)(struct!.inventory),
    lifecycle: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleToTerraform(struct!.lifecycle),
    logging: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingToTerraform(struct!.logging),
    metrics: cdktf.listMapper(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsToTerraform, false)(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
    notification: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationToTerraform(struct!.notification),
    object_lock_enabled_for_bucket: cdktf.booleanToTerraform(struct!.objectLockEnabledForBucket),
    object_ownership: cdktf.stringToTerraform(struct!.objectOwnership),
    ownership_controls: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsToTerraform(struct!.ownershipControls),
    policy: cdktf.stringToTerraform(struct!.policy),
    public_access_block: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlockToTerraform(struct!.publicAccessBlock),
    replication: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationToTerraform(struct!.replication),
    request_payment: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPaymentToTerraform(struct!.requestPayment),
    tagging: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingToTerraform(struct!.tagging),
    versioning: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioningToTerraform(struct!.versioning),
    website: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteToTerraform(struct!.website),
  }
}


export function dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerate: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerateToHclTerraform(struct!.accelerate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analytics: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsToHclTerraform, false)(struct!.analytics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsList",
    },
    cors: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors",
    },
    create_bucket_configuration: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfigurationToHclTerraform(struct!.createBucketConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration",
    },
    encryption: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption",
    },
    grant_full_control: {
      value: cdktf.stringToHclTerraform(struct!.grantFullControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_read: {
      value: cdktf.stringToHclTerraform(struct!.grantRead),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_read_acp: {
      value: cdktf.stringToHclTerraform(struct!.grantReadAcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_write: {
      value: cdktf.stringToHclTerraform(struct!.grantWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_write_acp: {
      value: cdktf.stringToHclTerraform(struct!.grantWriteAcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intelligent_tiering: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringToHclTerraform, false)(struct!.intelligentTiering),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringList",
    },
    inventory: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryToHclTerraform, false)(struct!.inventory),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryList",
    },
    lifecycle: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle",
    },
    logging: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification",
    },
    object_lock_enabled_for_bucket: {
      value: cdktf.booleanToHclTerraform(struct!.objectLockEnabledForBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_ownership: {
      value: cdktf.stringToHclTerraform(struct!.objectOwnership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ownership_controls: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsToHclTerraform(struct!.ownershipControls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_access_block: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlockToHclTerraform(struct!.publicAccessBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock",
    },
    replication: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationToHclTerraform(struct!.replication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication",
    },
    request_payment: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPaymentToHclTerraform(struct!.requestPayment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment",
    },
    tagging: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingToHclTerraform(struct!.tagging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging",
    },
    versioning: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioningToHclTerraform(struct!.versioning),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning",
    },
    website: {
      value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteToHclTerraform(struct!.website),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerate = this._accelerate?.internalValue;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._analytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analytics = this._analytics?.internalValue;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._createBucketConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createBucketConfiguration = this._createBucketConfiguration?.internalValue;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._grantFullControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantFullControl = this._grantFullControl;
    }
    if (this._grantRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantRead = this._grantRead;
    }
    if (this._grantReadAcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantReadAcp = this._grantReadAcp;
    }
    if (this._grantWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantWrite = this._grantWrite;
    }
    if (this._grantWriteAcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantWriteAcp = this._grantWriteAcp;
    }
    if (this._intelligentTiering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelligentTiering = this._intelligentTiering?.internalValue;
    }
    if (this._inventory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventory = this._inventory?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    if (this._objectLockEnabledForBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLockEnabledForBucket = this._objectLockEnabledForBucket;
    }
    if (this._objectOwnership !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectOwnership = this._objectOwnership;
    }
    if (this._ownershipControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownershipControls = this._ownershipControls?.internalValue;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._publicAccessBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessBlock = this._publicAccessBlock?.internalValue;
    }
    if (this._replication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replication = this._replication?.internalValue;
    }
    if (this._requestPayment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPayment = this._requestPayment?.internalValue;
    }
    if (this._tagging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagging = this._tagging?.internalValue;
    }
    if (this._versioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versioning = this._versioning?.internalValue;
    }
    if (this._website?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.website = this._website?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accelerate.internalValue = undefined;
      this._acl = undefined;
      this._analytics.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._createBucketConfiguration.internalValue = undefined;
      this._encryption.internalValue = undefined;
      this._grantFullControl = undefined;
      this._grantRead = undefined;
      this._grantReadAcp = undefined;
      this._grantWrite = undefined;
      this._grantWriteAcp = undefined;
      this._intelligentTiering.internalValue = undefined;
      this._inventory.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._name = undefined;
      this._notification.internalValue = undefined;
      this._objectLockEnabledForBucket = undefined;
      this._objectOwnership = undefined;
      this._ownershipControls.internalValue = undefined;
      this._policy = undefined;
      this._publicAccessBlock.internalValue = undefined;
      this._replication.internalValue = undefined;
      this._requestPayment.internalValue = undefined;
      this._tagging.internalValue = undefined;
      this._versioning.internalValue = undefined;
      this._website.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accelerate.internalValue = value.accelerate;
      this._acl = value.acl;
      this._analytics.internalValue = value.analytics;
      this._cors.internalValue = value.cors;
      this._createBucketConfiguration.internalValue = value.createBucketConfiguration;
      this._encryption.internalValue = value.encryption;
      this._grantFullControl = value.grantFullControl;
      this._grantRead = value.grantRead;
      this._grantReadAcp = value.grantReadAcp;
      this._grantWrite = value.grantWrite;
      this._grantWriteAcp = value.grantWriteAcp;
      this._intelligentTiering.internalValue = value.intelligentTiering;
      this._inventory.internalValue = value.inventory;
      this._lifecycle.internalValue = value.lifecycle;
      this._logging.internalValue = value.logging;
      this._metrics.internalValue = value.metrics;
      this._name = value.name;
      this._notification.internalValue = value.notification;
      this._objectLockEnabledForBucket = value.objectLockEnabledForBucket;
      this._objectOwnership = value.objectOwnership;
      this._ownershipControls.internalValue = value.ownershipControls;
      this._policy = value.policy;
      this._publicAccessBlock.internalValue = value.publicAccessBlock;
      this._replication.internalValue = value.replication;
      this._requestPayment.internalValue = value.requestPayment;
      this._tagging.internalValue = value.tagging;
      this._versioning.internalValue = value.versioning;
      this._website.internalValue = value.website;
    }
  }

  // accelerate - computed: false, optional: true, required: false
  private _accelerate = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerateOutputReference(this, "accelerate");
  public get accelerate() {
    return this._accelerate;
  }
  public putAccelerate(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAccelerate) {
    this._accelerate.internalValue = value;
  }
  public resetAccelerate() {
    this._accelerate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateInput() {
    return this._accelerate.internalValue;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // analytics - computed: false, optional: true, required: false
  private _analytics = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalyticsList(this, "analytics", false);
  public get analytics() {
    return this._analytics;
  }
  public putAnalytics(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecAnalytics[] | cdktf.IResolvable) {
    this._analytics.internalValue = value;
  }
  public resetAnalytics() {
    this._analytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsInput() {
    return this._analytics.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // create_bucket_configuration - computed: false, optional: true, required: false
  private _createBucketConfiguration = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfigurationOutputReference(this, "create_bucket_configuration");
  public get createBucketConfiguration() {
    return this._createBucketConfiguration;
  }
  public putCreateBucketConfiguration(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecCreateBucketConfiguration) {
    this._createBucketConfiguration.internalValue = value;
  }
  public resetCreateBucketConfiguration() {
    this._createBucketConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createBucketConfigurationInput() {
    return this._createBucketConfiguration.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // grant_full_control - computed: false, optional: true, required: false
  private _grantFullControl?: string; 
  public get grantFullControl() {
    return this.getStringAttribute('grant_full_control');
  }
  public set grantFullControl(value: string) {
    this._grantFullControl = value;
  }
  public resetGrantFullControl() {
    this._grantFullControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantFullControlInput() {
    return this._grantFullControl;
  }

  // grant_read - computed: false, optional: true, required: false
  private _grantRead?: string; 
  public get grantRead() {
    return this.getStringAttribute('grant_read');
  }
  public set grantRead(value: string) {
    this._grantRead = value;
  }
  public resetGrantRead() {
    this._grantRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantReadInput() {
    return this._grantRead;
  }

  // grant_read_acp - computed: false, optional: true, required: false
  private _grantReadAcp?: string; 
  public get grantReadAcp() {
    return this.getStringAttribute('grant_read_acp');
  }
  public set grantReadAcp(value: string) {
    this._grantReadAcp = value;
  }
  public resetGrantReadAcp() {
    this._grantReadAcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantReadAcpInput() {
    return this._grantReadAcp;
  }

  // grant_write - computed: false, optional: true, required: false
  private _grantWrite?: string; 
  public get grantWrite() {
    return this.getStringAttribute('grant_write');
  }
  public set grantWrite(value: string) {
    this._grantWrite = value;
  }
  public resetGrantWrite() {
    this._grantWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantWriteInput() {
    return this._grantWrite;
  }

  // grant_write_acp - computed: false, optional: true, required: false
  private _grantWriteAcp?: string; 
  public get grantWriteAcp() {
    return this.getStringAttribute('grant_write_acp');
  }
  public set grantWriteAcp(value: string) {
    this._grantWriteAcp = value;
  }
  public resetGrantWriteAcp() {
    this._grantWriteAcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantWriteAcpInput() {
    return this._grantWriteAcp;
  }

  // intelligent_tiering - computed: false, optional: true, required: false
  private _intelligentTiering = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTieringList(this, "intelligent_tiering", false);
  public get intelligentTiering() {
    return this._intelligentTiering;
  }
  public putIntelligentTiering(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecIntelligentTiering[] | cdktf.IResolvable) {
    this._intelligentTiering.internalValue = value;
  }
  public resetIntelligentTiering() {
    this._intelligentTiering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentTieringInput() {
    return this._intelligentTiering.internalValue;
  }

  // inventory - computed: false, optional: true, required: false
  private _inventory = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventoryList(this, "inventory", false);
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecInventory[] | cdktf.IResolvable) {
    this._inventory.internalValue = value;
  }
  public resetInventory() {
    this._inventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // notification - computed: false, optional: true, required: false
  private _notification = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // object_lock_enabled_for_bucket - computed: false, optional: true, required: false
  private _objectLockEnabledForBucket?: boolean | cdktf.IResolvable; 
  public get objectLockEnabledForBucket() {
    return this.getBooleanAttribute('object_lock_enabled_for_bucket');
  }
  public set objectLockEnabledForBucket(value: boolean | cdktf.IResolvable) {
    this._objectLockEnabledForBucket = value;
  }
  public resetObjectLockEnabledForBucket() {
    this._objectLockEnabledForBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledForBucketInput() {
    return this._objectLockEnabledForBucket;
  }

  // object_ownership - computed: false, optional: true, required: false
  private _objectOwnership?: string; 
  public get objectOwnership() {
    return this.getStringAttribute('object_ownership');
  }
  public set objectOwnership(value: string) {
    this._objectOwnership = value;
  }
  public resetObjectOwnership() {
    this._objectOwnership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectOwnershipInput() {
    return this._objectOwnership;
  }

  // ownership_controls - computed: false, optional: true, required: false
  private _ownershipControls = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControlsOutputReference(this, "ownership_controls");
  public get ownershipControls() {
    return this._ownershipControls;
  }
  public putOwnershipControls(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOwnershipControls) {
    this._ownershipControls.internalValue = value;
  }
  public resetOwnershipControls() {
    this._ownershipControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipControlsInput() {
    return this._ownershipControls.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // public_access_block - computed: false, optional: true, required: false
  private _publicAccessBlock = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlockOutputReference(this, "public_access_block");
  public get publicAccessBlock() {
    return this._publicAccessBlock;
  }
  public putPublicAccessBlock(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecPublicAccessBlock) {
    this._publicAccessBlock.internalValue = value;
  }
  public resetPublicAccessBlock() {
    this._publicAccessBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockInput() {
    return this._publicAccessBlock.internalValue;
  }

  // replication - computed: false, optional: true, required: false
  private _replication = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplicationOutputReference(this, "replication");
  public get replication() {
    return this._replication;
  }
  public putReplication(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecReplication) {
    this._replication.internalValue = value;
  }
  public resetReplication() {
    this._replication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication.internalValue;
  }

  // request_payment - computed: false, optional: true, required: false
  private _requestPayment = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPaymentOutputReference(this, "request_payment");
  public get requestPayment() {
    return this._requestPayment;
  }
  public putRequestPayment(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecRequestPayment) {
    this._requestPayment.internalValue = value;
  }
  public resetRequestPayment() {
    this._requestPayment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPaymentInput() {
    return this._requestPayment.internalValue;
  }

  // tagging - computed: false, optional: true, required: false
  private _tagging = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTaggingOutputReference(this, "tagging");
  public get tagging() {
    return this._tagging;
  }
  public putTagging(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecTagging) {
    this._tagging.internalValue = value;
  }
  public resetTagging() {
    this._tagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingInput() {
    return this._tagging.internalValue;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioningOutputReference(this, "versioning");
  public get versioning() {
    return this._versioning;
  }
  public putVersioning(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecVersioning) {
    this._versioning.internalValue = value;
  }
  public resetVersioning() {
    this._versioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsiteOutputReference(this, "website");
  public get website() {
    return this._website;
  }
  public putWebsite(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecWebsite) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest k8s_s3_services_k8s_aws_bucket_v1alpha1_manifest}
*/
export class DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_s3_services_k8s_aws_bucket_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SS3ServicesK8SAwsBucketV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_s3_services_k8s_aws_bucket_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/s3_services_k8s_aws_bucket_v1alpha1_manifest k8s_s3_services_k8s_aws_bucket_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_s3_services_k8s_aws_bucket_v1alpha1_manifest',
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
  private _metadata = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec) {
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
      metadata: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SS3ServicesK8SAwsBucketV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
