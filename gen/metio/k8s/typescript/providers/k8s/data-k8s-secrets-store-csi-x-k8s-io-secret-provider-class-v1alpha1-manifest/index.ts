// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#metadata DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata;
  /**
  * SecretProviderClassSpec defines the desired state of SecretProviderClass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#spec DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec;
}
export interface DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#annotations DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#labels DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#name DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#namespace DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData {
  /**
  * data field to populate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#key DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * name of the object to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#object_name DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#object_name}
  */
  readonly objectName?: string;
}

export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataToTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    object_name: cdktf.stringToTerraform(struct!.objectName),
  }
}


export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataToHclTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData | cdktf.IResolvable): any {
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
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._objectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._objectName = value.objectName;
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

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }
}

export class DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataOutputReference {
    return new DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects {
  /**
  * annotations of k8s secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#annotations DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#data DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData[] | cdktf.IResolvable;
  /**
  * labels of K8s secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#labels DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the K8s secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#secret_name DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * type of K8s secret object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#type DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsToTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    data: cdktf.listMapper(dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataToTerraform, false)(struct!.data),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsToHclTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects | cdktf.IResolvable): any {
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
    data: {
      value: cdktf.listMapperHcl(dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._data.internalValue = undefined;
      this._labels = undefined;
      this._secretName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._data.internalValue = value.data;
      this._labels = value.labels;
      this._secretName = value.secretName;
      this._type = value.type;
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

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
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
}

export class DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsOutputReference {
    return new DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec {
  /**
  * Configuration for specific provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#parameters DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Configuration for provider name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#provider DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#secret_objects DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest#secret_objects}
  */
  readonly secretObjects?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects[] | cdktf.IResolvable;
}

export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_objects: cdktf.listMapper(dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsToTerraform, false)(struct!.secretObjects),
  }
}


export function dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_objects: {
      value: cdktf.listMapperHcl(dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsToHclTerraform, false)(struct!.secretObjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretObjects = this._secretObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters = undefined;
      this._provider = undefined;
      this._secretObjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters = value.parameters;
      this._provider = value.provider;
      this._secretObjects.internalValue = value.secretObjects;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_objects - computed: false, optional: true, required: false
  private _secretObjects = new DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjectsList(this, "secret_objects", false);
  public get secretObjects() {
    return this._secretObjects;
  }
  public putSecretObjects(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecSecretObjects[] | cdktf.IResolvable) {
    this._secretObjects.internalValue = value;
  }
  public resetSecretObjects() {
    this._secretObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretObjectsInput() {
    return this._secretObjects.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest k8s_secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest}
*/
export class DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest k8s_secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_store_csi_x_k8s_io_secret_provider_class_v1alpha1_manifest',
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
  private _metadata = new DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsStoreCsiXK8SIoSecretProviderClassV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
