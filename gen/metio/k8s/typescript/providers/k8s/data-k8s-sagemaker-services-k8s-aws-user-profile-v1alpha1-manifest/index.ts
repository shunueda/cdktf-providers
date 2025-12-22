// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata;
  /**
  * UserProfileSpec defines the desired state of UserProfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings {
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#file_system_id DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#file_system_path DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktf.stringToTerraform(struct!.fileSystemPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: false, optional: true, required: false
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  public resetFileSystemPath() {
    this._fileSystemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs {
  /**
  * The settings for assigning a custom Amazon EFS file system to a user profile or space for an Amazon SageMaker Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#efs_file_system_config DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_system_config: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct!.efsFileSystemConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_system_config: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
    }
  }

  // efs_file_system_config - computed: false, optional: true, required: false
  private _efsFileSystemConfig = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsEfsFileSystemConfig) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#gid DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#uid DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#uid}
  */
  readonly uid?: number;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
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
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#app_image_config_name DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#image_name DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#image_version_number DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: true, required: false
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  public resetAppImageConfigName() {
    this._appImageConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#custom_images DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#custom_images}
  */
  readonly customImages?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages[] | cdktf.IResolvable;
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_images: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_images: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customImages.internalValue = value.customImages;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // custom_images - computed: false, optional: true, required: false
  private _customImages = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsCustomImages[] | cdktf.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings {
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#app_image_config_name DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#image_name DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#image_version_number DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: true, required: false
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  public resetAppImageConfigName() {
    this._appImageConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#custom_images DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#custom_images}
  */
  readonly customImages?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktf.IResolvable;
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_images: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_images: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customImages.internalValue = value.customImages;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // custom_images - computed: false, optional: true, required: false
  private _customImages = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktf.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#access_status DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#access_status}
  */
  readonly accessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#user_group DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#user_group}
  */
  readonly userGroup?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_status: cdktf.stringToTerraform(struct!.accessStatus),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_status: {
      value: cdktf.stringToHclTerraform(struct!.accessStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktf.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStatus = this._accessStatus;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStatus = undefined;
      this._userGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStatus = value.accessStatus;
      this._userGroup = value.userGroup;
    }
  }

  // access_status - computed: false, optional: true, required: false
  private _accessStatus?: string; 
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }
  public set accessStatus(value: string) {
    this._accessStatus = value;
  }
  public resetAccessStatus() {
    this._accessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStatusInput() {
    return this._accessStatus;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#notebook_output_option DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#s3_kms_key_id DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_output_option: {
      value: cdktf.stringToHclTerraform(struct!.notebookOutputOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookOutputOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notebookOutputOption = value.notebookOutputOption;
      this._s3KmsKeyId = value.s3KmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // notebook_output_option - computed: false, optional: true, required: false
  private _notebookOutputOption?: string; 
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }
  public set notebookOutputOption(value: string) {
    this._notebookOutputOption = value;
  }
  public resetNotebookOutputOption() {
    this._notebookOutputOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookOutputOptionInput() {
    return this._notebookOutputOption;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_ebs_volume_size_in_gb DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#maximum_ebs_volume_size_in_gb DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: false, optional: true, required: false
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  public resetDefaultEbsVolumeSizeInGb() {
    this._defaultEbsVolumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: false, optional: true, required: false
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  public resetMaximumEbsVolumeSizeInGb() {
    this._maximumEbsVolumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings {
  /**
  * A collection of default EBS storage settings that applies to private spaces created within a domain or user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_ebs_storage_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_storage_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: false, optional: true, required: false
  private _defaultEbsStorageSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings {
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings {
  /**
  * The Code Editor application settings. For more information about Code Editor, see Get started with Code Editor in Amazon SageMaker (https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#code_editor_app_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#custom_file_system_configs DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#custom_file_system_configs}
  */
  readonly customFileSystemConfigs?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs[] | cdktf.IResolvable;
  /**
  * Details about the POSIX identity that is used for file system operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#custom_posix_user_config DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#default_landing_uri DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#execution_role DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The settings for the JupyterLab application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#jupyter_lab_app_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings;
  /**
  * The JupyterServer app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#jupyter_server_app_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings;
  /**
  * The KernelGateway app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#kernel_gateway_app_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings;
  /**
  * A collection of settings that configure user interaction with the RStudioServerPro app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#r_studio_server_pro_app_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#security_groups DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Specifies options for sharing Amazon SageMaker Studio notebooks. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called. When SharingSettings is not specified, notebook sharing isn't allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#sharing_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#sharing_settings}
  */
  readonly sharingSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings;
  /**
  * The default storage settings for a private space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#space_storage_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#space_storage_settings}
  */
  readonly spaceStorageSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#studio_web_portal DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * The TensorBoard app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#tensor_board_app_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_editor_app_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_configs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsToTerraform, false)(struct!.customFileSystemConfigs),
    custom_posix_user_config: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    default_landing_uri: cdktf.stringToTerraform(struct!.defaultLandingUri),
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    jupyter_lab_app_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    r_studio_server_pro_app_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettingsToTerraform(struct!.rStudioServerProAppSettings),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    sharing_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    space_storage_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
    studio_web_portal: cdktf.stringToTerraform(struct!.studioWebPortal),
    tensor_board_app_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_editor_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings",
    },
    custom_file_system_configs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsToHclTerraform, false)(struct!.customFileSystemConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsList",
    },
    custom_posix_user_config: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig",
    },
    default_landing_uri: {
      value: cdktf.stringToHclTerraform(struct!.defaultLandingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jupyter_lab_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings",
    },
    jupyter_server_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings",
    },
    kernel_gateway_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings",
    },
    r_studio_server_pro_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettingsToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sharing_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettingsToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings",
    },
    space_storage_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings",
    },
    studio_web_portal: {
      value: cdktf.stringToHclTerraform(struct!.studioWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tensor_board_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsToHclTerraform(struct!.tensorBoardAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeEditorAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
    }
    if (this._customFileSystemConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfigs = this._customFileSystemConfigs?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._defaultLandingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLandingUri = this._defaultLandingUri;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._sharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    if (this._studioWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortal = this._studioWebPortal;
    }
    if (this._tensorBoardAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeEditorAppSettings.internalValue = undefined;
      this._customFileSystemConfigs.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._defaultLandingUri = undefined;
      this._executionRole = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._rStudioServerProAppSettings.internalValue = undefined;
      this._securityGroups = undefined;
      this._sharingSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
      this._studioWebPortal = undefined;
      this._tensorBoardAppSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
      this._customFileSystemConfigs.internalValue = value.customFileSystemConfigs;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._defaultLandingUri = value.defaultLandingUri;
      this._executionRole = value.executionRole;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
      this._securityGroups = value.securityGroups;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
      this._studioWebPortal = value.studioWebPortal;
      this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
    }
  }

  // code_editor_app_settings - computed: false, optional: true, required: false
  private _codeEditorAppSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCodeEditorAppSettings) {
    this._codeEditorAppSettings.internalValue = value;
  }
  public resetCodeEditorAppSettings() {
    this._codeEditorAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppSettingsInput() {
    return this._codeEditorAppSettings.internalValue;
  }

  // custom_file_system_configs - computed: false, optional: true, required: false
  private _customFileSystemConfigs = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }
  public putCustomFileSystemConfigs(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomFileSystemConfigs[] | cdktf.IResolvable) {
    this._customFileSystemConfigs.internalValue = value;
  }
  public resetCustomFileSystemConfigs() {
    this._customFileSystemConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigsInput() {
    return this._customFileSystemConfigs.internalValue;
  }

  // custom_posix_user_config - computed: false, optional: true, required: false
  private _customPosixUserConfig = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsCustomPosixUserConfig) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // default_landing_uri - computed: false, optional: true, required: false
  private _defaultLandingUri?: string; 
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }
  public set defaultLandingUri(value: string) {
    this._defaultLandingUri = value;
  }
  public resetDefaultLandingUri() {
    this._defaultLandingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLandingUriInput() {
    return this._defaultLandingUri;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterLabAppSettings) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // r_studio_server_pro_app_settings - computed: false, optional: true, required: false
  private _rStudioServerProAppSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }
  public putRStudioServerProAppSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsRStudioServerProAppSettings) {
    this._rStudioServerProAppSettings.internalValue = value;
  }
  public resetRStudioServerProAppSettings() {
    this._rStudioServerProAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProAppSettingsInput() {
    return this._rStudioServerProAppSettings.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // sharing_settings - computed: false, optional: true, required: false
  private _sharingSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSharingSettings) {
    this._sharingSettings.internalValue = value;
  }
  public resetSharingSettings() {
    this._sharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingSettingsInput() {
    return this._sharingSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }

  // studio_web_portal - computed: false, optional: true, required: false
  private _studioWebPortal?: string; 
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }
  public set studioWebPortal(value: string) {
    this._studioWebPortal = value;
  }
  public resetStudioWebPortal() {
    this._studioWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalInput() {
    return this._studioWebPortal;
  }

  // tensor_board_app_settings - computed: false, optional: true, required: false
  private _tensorBoardAppSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings");
  public get tensorBoardAppSettings() {
    return this._tensorBoardAppSettings;
  }
  public putTensorBoardAppSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsTensorBoardAppSettings) {
    this._tensorBoardAppSettings.internalValue = value;
  }
  public resetTensorBoardAppSettings() {
    this._tensorBoardAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardAppSettingsInput() {
    return this._tensorBoardAppSettings.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec {
  /**
  * The ID of the associated Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#domain_id DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#domain_id}
  */
  readonly domainId: string;
  /**
  * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is 'UserName'. If the Domain's AuthMode is IAM Identity Center, this field is required. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#single_sign_on_user_identifier DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#single_sign_on_user_identifier}
  */
  readonly singleSignOnUserIdentifier?: string;
  /**
  * The username of the associated Amazon Web Services Single Sign-On User for this UserProfile. If the Domain's AuthMode is IAM Identity Center, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#single_sign_on_user_value DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#single_sign_on_user_value}
  */
  readonly singleSignOnUserValue?: string;
  /**
  * Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags that you specify for the User Profile are also added to all Apps that the User Profile launches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * A name for the UserProfile. This value is not case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#user_profile_name DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#user_profile_name}
  */
  readonly userProfileName: string;
  /**
  * A collection of settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#user_settings DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest#user_settings}
  */
  readonly userSettings?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings;
}

export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    single_sign_on_user_identifier: cdktf.stringToTerraform(struct!.singleSignOnUserIdentifier),
    single_sign_on_user_value: cdktf.stringToTerraform(struct!.singleSignOnUserValue),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    user_profile_name: cdktf.stringToTerraform(struct!.userProfileName),
    user_settings: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsToTerraform(struct!.userSettings),
  }
}


export function dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_sign_on_user_identifier: {
      value: cdktf.stringToHclTerraform(struct!.singleSignOnUserIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_sign_on_user_value: {
      value: cdktf.stringToHclTerraform(struct!.singleSignOnUserValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsList",
    },
    user_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.userProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings: {
      value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsToHclTerraform(struct!.userSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._singleSignOnUserIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSignOnUserIdentifier = this._singleSignOnUserIdentifier;
    }
    if (this._singleSignOnUserValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSignOnUserValue = this._singleSignOnUserValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._userProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProfileName = this._userProfileName;
    }
    if (this._userSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettings = this._userSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainId = undefined;
      this._singleSignOnUserIdentifier = undefined;
      this._singleSignOnUserValue = undefined;
      this._tags.internalValue = undefined;
      this._userProfileName = undefined;
      this._userSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainId = value.domainId;
      this._singleSignOnUserIdentifier = value.singleSignOnUserIdentifier;
      this._singleSignOnUserValue = value.singleSignOnUserValue;
      this._tags.internalValue = value.tags;
      this._userProfileName = value.userProfileName;
      this._userSettings.internalValue = value.userSettings;
    }
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // single_sign_on_user_identifier - computed: false, optional: true, required: false
  private _singleSignOnUserIdentifier?: string; 
  public get singleSignOnUserIdentifier() {
    return this.getStringAttribute('single_sign_on_user_identifier');
  }
  public set singleSignOnUserIdentifier(value: string) {
    this._singleSignOnUserIdentifier = value;
  }
  public resetSingleSignOnUserIdentifier() {
    this._singleSignOnUserIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserIdentifierInput() {
    return this._singleSignOnUserIdentifier;
  }

  // single_sign_on_user_value - computed: false, optional: true, required: false
  private _singleSignOnUserValue?: string; 
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }
  public set singleSignOnUserValue(value: string) {
    this._singleSignOnUserValue = value;
  }
  public resetSingleSignOnUserValue() {
    this._singleSignOnUserValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserValueInput() {
    return this._singleSignOnUserValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName?: string; 
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName;
  }

  // user_settings - computed: false, optional: true, required: false
  private _userSettings = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }
  public putUserSettings(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecUserSettings) {
    this._userSettings.internalValue = value;
  }
  public resetUserSettings() {
    this._userSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_user_profile_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsUserProfileV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
