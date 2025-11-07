// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#metadata DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata;
  /**
  * SecretSpec defines the desired state of Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#spec DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec;
}
export interface DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#annotations DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#labels DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#name DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#namespace DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#kms_key_id DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#region DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#region}
  */
  readonly region?: string;
}

export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsToTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsToHclTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._region = value.region;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsOutputReference {
    return new DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#key DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#name DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#namespace DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretStringToTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString | cdktf.IResolvable): any {
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


export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretStringToHclTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString | cdktf.IResolvable): any {
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

export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#key DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#value DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec {
  /**
  * The description of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#description DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#force_overwrite_replica_secret DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#force_overwrite_replica_secret}
  */
  readonly forceOverwriteReplicaSecret?: boolean | cdktf.IResolvable;
  /**
  * The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by alias/, for example alias/aws/secretsmanager. For more information, see About aliases (https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html). To use a KMS key in a different account, use the key ARN or the alias ARN. If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value. If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use aws/secretsmanager to encrypt the secret, and you must create and use a customer managed KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#kms_key_id DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The name of the new secret. The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@- Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#name DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * A list of Regions and KMS keys to replicate secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#replica_regions DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#replica_regions}
  */
  readonly replicaRegions?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions[] | cdktf.IResolvable;
  /**
  * The text data to encrypt and store in this new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value. Either SecretString or SecretBinary must have a value, but not both. If you create a secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the SecretString parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that a Lambda rotation function can parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#secret_string DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#secret_string}
  */
  readonly secretString?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString;
  /**
  * A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example: [{'Key':'CostCenter','Value':'12345'},{'Key':'environment','Value':'production'}] Secrets Manager tag key names are case sensitive. A tag with the key 'ABC' is a different tag from one with key 'abc'. If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an Access Denied error. For more information, see Control access to secrets using tags (https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and Limit access to identities with tags that match secrets' tags (https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2). For information about how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters (https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text. For tag quotas and naming restrictions, see Service quotas for Tagging (https://docs.aws.amazon.com/general/latest/gr/arg.html#taged-reference-quotas) in the Amazon Web Services General Reference guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#tags DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    force_overwrite_replica_secret: cdktf.booleanToTerraform(struct!.forceOverwriteReplicaSecret),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    replica_regions: cdktf.listMapper(dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsToTerraform, false)(struct!.replicaRegions),
    secret_string: dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretStringToTerraform(struct!.secretString),
    tags: cdktf.listMapper(dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_overwrite_replica_secret: {
      value: cdktf.booleanToHclTerraform(struct!.forceOverwriteReplicaSecret),
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
    replica_regions: {
      value: cdktf.listMapperHcl(dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsToHclTerraform, false)(struct!.replicaRegions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsList",
    },
    secret_string: {
      value: dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretStringToHclTerraform(struct!.secretString),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._forceOverwriteReplicaSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceOverwriteReplicaSecret = this._forceOverwriteReplicaSecret;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replicaRegions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaRegions = this._replicaRegions?.internalValue;
    }
    if (this._secretString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._forceOverwriteReplicaSecret = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._replicaRegions.internalValue = undefined;
      this._secretString.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._forceOverwriteReplicaSecret = value.forceOverwriteReplicaSecret;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._replicaRegions.internalValue = value.replicaRegions;
      this._secretString.internalValue = value.secretString;
      this._tags.internalValue = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // force_overwrite_replica_secret - computed: false, optional: true, required: false
  private _forceOverwriteReplicaSecret?: boolean | cdktf.IResolvable; 
  public get forceOverwriteReplicaSecret() {
    return this.getBooleanAttribute('force_overwrite_replica_secret');
  }
  public set forceOverwriteReplicaSecret(value: boolean | cdktf.IResolvable) {
    this._forceOverwriteReplicaSecret = value;
  }
  public resetForceOverwriteReplicaSecret() {
    this._forceOverwriteReplicaSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceOverwriteReplicaSecretInput() {
    return this._forceOverwriteReplicaSecret;
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

  // replica_regions - computed: false, optional: true, required: false
  private _replicaRegions = new DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegionsList(this, "replica_regions", false);
  public get replicaRegions() {
    return this._replicaRegions;
  }
  public putReplicaRegions(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecReplicaRegions[] | cdktf.IResolvable) {
    this._replicaRegions.internalValue = value;
  }
  public resetReplicaRegions() {
    this._replicaRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRegionsInput() {
    return this._replicaRegions.internalValue;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString = new DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretStringOutputReference(this, "secret_string");
  public get secretString() {
    return this._secretString;
  }
  public putSecretString(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecSecretString) {
    this._secretString.internalValue = value;
  }
  public resetSecretString() {
    this._secretString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest k8s_secretsmanager_services_k8s_aws_secret_v1alpha1_manifest}
*/
export class DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secretsmanager_services_k8s_aws_secret_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secretsmanager_services_k8s_aws_secret_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secretsmanager_services_k8s_aws_secret_v1alpha1_manifest k8s_secretsmanager_services_k8s_aws_secret_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secretsmanager_services_k8s_aws_secret_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsmanagerServicesK8SAwsSecretV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
