// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#metadata DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata;
  /**
  * RepositorySpec defines the desired state of Repository. An object representing a repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#spec DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec;
}
export interface DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#annotations DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#labels DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#name DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#namespace DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#encryption_type DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#kms_key DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#kms_key}
  */
  readonly kmsKey?: string;
}

export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionType = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionType = value.encryptionType;
      this._kmsKey = value.kmsKey;
    }
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#scan_on_push DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#scan_on_push}
  */
  readonly scanOnPush?: boolean | cdktf.IResolvable;
}

export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfigurationToTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scan_on_push: cdktf.booleanToTerraform(struct!.scanOnPush),
  }
}


export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfigurationToHclTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scan_on_push: {
      value: cdktf.booleanToHclTerraform(struct!.scanOnPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scanOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanOnPush = this._scanOnPush;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scanOnPush = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scanOnPush = value.scanOnPush;
    }
  }

  // scan_on_push - computed: false, optional: true, required: false
  private _scanOnPush?: boolean | cdktf.IResolvable; 
  public get scanOnPush() {
    return this.getBooleanAttribute('scan_on_push');
  }
  public set scanOnPush(value: boolean | cdktf.IResolvable) {
    this._scanOnPush = value;
  }
  public resetScanOnPush() {
    this._scanOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanOnPushInput() {
    return this._scanOnPush;
  }
}
export interface DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#key DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#value DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec {
  /**
  * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#encryption_configuration DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#encryption_configuration}
  */
  readonly encryptionConfiguration?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration;
  /**
  * The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#image_scanning_configuration DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration;
  /**
  * The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#image_tag_mutability DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#image_tag_mutability}
  */
  readonly imageTagMutability?: string;
  /**
  * The JSON repository policy text to apply to the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#lifecycle_policy DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#lifecycle_policy}
  */
  readonly lifecyclePolicy?: string;
  /**
  * The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#name DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The JSON repository policy text to apply to the repository. For more information, see Amazon ECR repository policies (https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the Amazon Elastic Container Registry User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#policy DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * The Amazon Web Services account ID associated with the registry to create the repository. If you do not specify a registry, the default registry is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#registry_id DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#registry_id}
  */
  readonly registryId?: string;
  /**
  * The metadata that you apply to the repository to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#tags DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_configuration: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    image_scanning_configuration: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfigurationToTerraform(struct!.imageScanningConfiguration),
    image_tag_mutability: cdktf.stringToTerraform(struct!.imageTagMutability),
    lifecycle_policy: cdktf.stringToTerraform(struct!.lifecyclePolicy),
    name: cdktf.stringToTerraform(struct!.name),
    policy: cdktf.stringToTerraform(struct!.policy),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
    tags: cdktf.listMapper(dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_configuration: {
      value: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration",
    },
    image_scanning_configuration: {
      value: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfigurationToHclTerraform(struct!.imageScanningConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration",
    },
    image_tag_mutability: {
      value: cdktf.stringToHclTerraform(struct!.imageTagMutability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_policy: {
      value: cdktf.stringToHclTerraform(struct!.lifecyclePolicy),
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
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_id: {
      value: cdktf.stringToHclTerraform(struct!.registryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._imageScanningConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageScanningConfiguration = this._imageScanningConfiguration?.internalValue;
    }
    if (this._imageTagMutability !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTagMutability = this._imageTagMutability;
    }
    if (this._lifecyclePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecyclePolicy = this._lifecyclePolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._registryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryId = this._registryId;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._imageScanningConfiguration.internalValue = undefined;
      this._imageTagMutability = undefined;
      this._lifecyclePolicy = undefined;
      this._name = undefined;
      this._policy = undefined;
      this._registryId = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._imageScanningConfiguration.internalValue = value.imageScanningConfiguration;
      this._imageTagMutability = value.imageTagMutability;
      this._lifecyclePolicy = value.lifecyclePolicy;
      this._name = value.name;
      this._policy = value.policy;
      this._registryId = value.registryId;
      this._tags.internalValue = value.tags;
    }
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration = new DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfigurationOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public putImageScanningConfiguration(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecImageScanningConfiguration) {
    this._imageScanningConfiguration.internalValue = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration.internalValue;
  }

  // image_tag_mutability - computed: false, optional: true, required: false
  private _imageTagMutability?: string; 
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }
  public set imageTagMutability(value: string) {
    this._imageTagMutability = value;
  }
  public resetImageTagMutability() {
    this._imageTagMutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityInput() {
    return this._imageTagMutability;
  }

  // lifecycle_policy - computed: false, optional: true, required: false
  private _lifecyclePolicy?: string; 
  public get lifecyclePolicy() {
    return this.getStringAttribute('lifecycle_policy');
  }
  public set lifecyclePolicy(value: string) {
    this._lifecyclePolicy = value;
  }
  public resetLifecyclePolicy() {
    this._lifecyclePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyInput() {
    return this._lifecyclePolicy;
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

  // registry_id - computed: false, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest k8s_ecr_services_k8s_aws_repository_v1alpha1_manifest}
*/
export class DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ecr_services_k8s_aws_repository_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEcrServicesK8SAwsRepositoryV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ecr_services_k8s_aws_repository_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ecr_services_k8s_aws_repository_v1alpha1_manifest k8s_ecr_services_k8s_aws_repository_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ecr_services_k8s_aws_repository_v1alpha1_manifest',
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
  private _metadata = new DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEcrServicesK8SAwsRepositoryV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
