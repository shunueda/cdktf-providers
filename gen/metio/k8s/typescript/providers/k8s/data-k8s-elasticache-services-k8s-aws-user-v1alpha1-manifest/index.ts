// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#metadata DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#spec DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec;
}
export interface DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#annotations DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#labels DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#namespace DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#key DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#namespace DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsOutputReference {
    return new DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#key DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#value DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec {
  /**
  * Access permissions string used for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#access_string DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#access_string}
  */
  readonly accessString: string;
  /**
  * The current supported value is Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#engine DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#engine}
  */
  readonly engine: string;
  /**
  * Indicates a password is not required for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#no_password_required DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#no_password_required}
  */
  readonly noPasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * Passwords used for this user. You can create up to two passwords for each user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#passwords DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#passwords}
  */
  readonly passwords?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords[] | cdktf.IResolvable;
  /**
  * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#tags DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#user_id DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#user_id}
  */
  readonly userId: string;
  /**
  * The username of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#user_name DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest#user_name}
  */
  readonly userName: string;
}

export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecToTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_string: cdktf.stringToTerraform(struct!.accessString),
    engine: cdktf.stringToTerraform(struct!.engine),
    no_password_required: cdktf.booleanToTerraform(struct!.noPasswordRequired),
    passwords: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsToTerraform, false)(struct!.passwords),
    tags: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    user_id: cdktf.stringToTerraform(struct!.userId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_string: {
      value: cdktf.stringToHclTerraform(struct!.accessString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_password_required: {
      value: cdktf.booleanToHclTerraform(struct!.noPasswordRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passwords: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsToHclTerraform, false)(struct!.passwords),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsList",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessString !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessString = this._accessString;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._noPasswordRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPasswordRequired = this._noPasswordRequired;
    }
    if (this._passwords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwords = this._passwords?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessString = undefined;
      this._engine = undefined;
      this._noPasswordRequired = undefined;
      this._passwords.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._userId = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessString = value.accessString;
      this._engine = value.engine;
      this._noPasswordRequired = value.noPasswordRequired;
      this._passwords.internalValue = value.passwords;
      this._tags.internalValue = value.tags;
      this._userId = value.userId;
      this._userName = value.userName;
    }
  }

  // access_string - computed: false, optional: false, required: true
  private _accessString?: string; 
  public get accessString() {
    return this.getStringAttribute('access_string');
  }
  public set accessString(value: string) {
    this._accessString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStringInput() {
    return this._accessString;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // no_password_required - computed: false, optional: true, required: false
  private _noPasswordRequired?: boolean | cdktf.IResolvable; 
  public get noPasswordRequired() {
    return this.getBooleanAttribute('no_password_required');
  }
  public set noPasswordRequired(value: boolean | cdktf.IResolvable) {
    this._noPasswordRequired = value;
  }
  public resetNoPasswordRequired() {
    this._noPasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPasswordRequiredInput() {
    return this._noPasswordRequired;
  }

  // passwords - computed: false, optional: true, required: false
  private _passwords = new DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswordsList(this, "passwords", false);
  public get passwords() {
    return this._passwords;
  }
  public putPasswords(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecPasswords[] | cdktf.IResolvable) {
    this._passwords.internalValue = value;
  }
  public resetPasswords() {
    this._passwords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordsInput() {
    return this._passwords.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest k8s_elasticache_services_k8s_aws_user_v1alpha1_manifest}
*/
export class DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_elasticache_services_k8s_aws_user_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SElasticacheServicesK8SAwsUserV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_elasticache_services_k8s_aws_user_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/elasticache_services_k8s_aws_user_v1alpha1_manifest k8s_elasticache_services_k8s_aws_user_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_elasticache_services_k8s_aws_user_v1alpha1_manifest',
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
  private _metadata = new DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec) {
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
      metadata: dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElasticacheServicesK8SAwsUserV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
