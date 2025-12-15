// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#metadata DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata;
  /**
  * DataStoreSpec defines the desired state of DataStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#spec DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec;
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#annotations DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#labels DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#name DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference {
  /**
  * Name of the key for the given Secret reference where the content is stored. This value is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#key_path DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#key_path}
  */
  readonly keyPath: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#name DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#namespace DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReferenceToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReferenceToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
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

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
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

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPath = undefined;
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
      this._keyPath = value.keyPath;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key_path - computed: false, optional: false, required: true
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
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
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword {
  /**
  * Bare content of the file, base64 encoded. It has precedence over the SecretReference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#content DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#secret_reference DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#secret_reference}
  */
  readonly secretReference?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    secret_reference: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReferenceToTerraform(struct!.secretReference),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_reference: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReferenceToHclTerraform(struct!.secretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._secretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretReference = this._secretReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._secretReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._secretReference.internalValue = value.secretReference;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // secret_reference - computed: false, optional: true, required: false
  private _secretReference = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReferenceOutputReference(this, "secret_reference");
  public get secretReference() {
    return this._secretReference;
  }
  public putSecretReference(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordSecretReference) {
    this._secretReference.internalValue = value;
  }
  public resetSecretReference() {
    this._secretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReferenceInput() {
    return this._secretReference.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference {
  /**
  * Name of the key for the given Secret reference where the content is stored. This value is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#key_path DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#key_path}
  */
  readonly keyPath: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#name DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#namespace DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReferenceToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReferenceToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
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

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
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

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPath = undefined;
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
      this._keyPath = value.keyPath;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key_path - computed: false, optional: false, required: true
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
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
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername {
  /**
  * Bare content of the file, base64 encoded. It has precedence over the SecretReference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#content DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#secret_reference DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#secret_reference}
  */
  readonly secretReference?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    secret_reference: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReferenceToTerraform(struct!.secretReference),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_reference: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReferenceToHclTerraform(struct!.secretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._secretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretReference = this._secretReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._secretReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._secretReference.internalValue = value.secretReference;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // secret_reference - computed: false, optional: true, required: false
  private _secretReference = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReferenceOutputReference(this, "secret_reference");
  public get secretReference() {
    return this._secretReference;
  }
  public putSecretReference(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameSecretReference) {
    this._secretReference.internalValue = value;
  }
  public resetSecretReference() {
    this._secretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReferenceInput() {
    return this._secretReference.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#password DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#password}
  */
  readonly password: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#username DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#username}
  */
  readonly username: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordToTerraform(struct!.password),
    username: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword",
    },
    username: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthUsername) {
    this._username.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference {
  /**
  * Name of the key for the given Secret reference where the content is stored. This value is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#key_path DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#key_path}
  */
  readonly keyPath: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#name DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#namespace DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReferenceToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReferenceToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
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

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
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

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPath = undefined;
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
      this._keyPath = value.keyPath;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key_path - computed: false, optional: false, required: true
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
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
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate {
  /**
  * Bare content of the file, base64 encoded. It has precedence over the SecretReference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#content DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#secret_reference DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#secret_reference}
  */
  readonly secretReference?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    secret_reference: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReferenceToTerraform(struct!.secretReference),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_reference: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReferenceToHclTerraform(struct!.secretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._secretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretReference = this._secretReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._secretReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._secretReference.internalValue = value.secretReference;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // secret_reference - computed: false, optional: true, required: false
  private _secretReference = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReferenceOutputReference(this, "secret_reference");
  public get secretReference() {
    return this._secretReference;
  }
  public putSecretReference(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateSecretReference) {
    this._secretReference.internalValue = value;
  }
  public resetSecretReference() {
    this._secretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReferenceInput() {
    return this._secretReference.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference {
  /**
  * Name of the key for the given Secret reference where the content is stored. This value is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#key_path DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#key_path}
  */
  readonly keyPath: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#name DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#namespace DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReferenceToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReferenceToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
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

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
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

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPath = undefined;
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
      this._keyPath = value.keyPath;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key_path - computed: false, optional: false, required: true
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
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
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey {
  /**
  * Bare content of the file, base64 encoded. It has precedence over the SecretReference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#content DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#secret_reference DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#secret_reference}
  */
  readonly secretReference?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeyToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    secret_reference: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReferenceToTerraform(struct!.secretReference),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeyToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_reference: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReferenceToHclTerraform(struct!.secretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._secretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretReference = this._secretReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._secretReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._secretReference.internalValue = value.secretReference;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // secret_reference - computed: false, optional: true, required: false
  private _secretReference = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReferenceOutputReference(this, "secret_reference");
  public get secretReference() {
    return this._secretReference;
  }
  public putSecretReference(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeySecretReference) {
    this._secretReference.internalValue = value;
  }
  public resetSecretReference() {
    this._secretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReferenceInput() {
    return this._secretReference.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#certificate DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#certificate}
  */
  readonly certificate: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#private_key DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#private_key}
  */
  readonly privateKey?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateToTerraform(struct!.certificate),
    private_key: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeyToTerraform(struct!.privateKey),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate",
    },
    private_key: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._privateKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._privateKey.internalValue = value.privateKey;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityPrivateKey) {
    this._privateKey.internalValue = value;
  }
  public resetPrivateKey() {
    this._privateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference {
  /**
  * Name of the key for the given Secret reference where the content is stored. This value is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#key_path DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#key_path}
  */
  readonly keyPath: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#name DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#namespace DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReferenceToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReferenceToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
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

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
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

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPath = undefined;
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
      this._keyPath = value.keyPath;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key_path - computed: false, optional: false, required: true
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
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
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate {
  /**
  * Bare content of the file, base64 encoded. It has precedence over the SecretReference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#content DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#secret_reference DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#secret_reference}
  */
  readonly secretReference?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    secret_reference: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReferenceToTerraform(struct!.secretReference),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_reference: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReferenceToHclTerraform(struct!.secretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._secretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretReference = this._secretReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._secretReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._secretReference.internalValue = value.secretReference;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // secret_reference - computed: false, optional: true, required: false
  private _secretReference = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReferenceOutputReference(this, "secret_reference");
  public get secretReference() {
    return this._secretReference;
  }
  public putSecretReference(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateSecretReference) {
    this._secretReference.internalValue = value;
  }
  public resetSecretReference() {
    this._secretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReferenceInput() {
    return this._secretReference.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference {
  /**
  * Name of the key for the given Secret reference where the content is stored. This value is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#key_path DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#key_path}
  */
  readonly keyPath: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#name DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#namespace DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReferenceToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReferenceToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
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

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
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

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPath = undefined;
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
      this._keyPath = value.keyPath;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key_path - computed: false, optional: false, required: true
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
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
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey {
  /**
  * Bare content of the file, base64 encoded. It has precedence over the SecretReference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#content DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#secret_reference DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#secret_reference}
  */
  readonly secretReference?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeyToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    secret_reference: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReferenceToTerraform(struct!.secretReference),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeyToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_reference: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReferenceToHclTerraform(struct!.secretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._secretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretReference = this._secretReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._secretReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._secretReference.internalValue = value.secretReference;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // secret_reference - computed: false, optional: true, required: false
  private _secretReference = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReferenceOutputReference(this, "secret_reference");
  public get secretReference() {
    return this._secretReference;
  }
  public putSecretReference(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeySecretReference) {
    this._secretReference.internalValue = value;
  }
  public resetSecretReference() {
    this._secretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReferenceInput() {
    return this._secretReference.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#certificate DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#certificate}
  */
  readonly certificate: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#private_key DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#private_key}
  */
  readonly privateKey: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateToTerraform(struct!.certificate),
    private_key: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeyToTerraform(struct!.privateKey),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate",
    },
    private_key: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._privateKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._privateKey.internalValue = value.privateKey;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificatePrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig {
  /**
  * Retrieve the Certificate Authority certificate and private key, such as bare content of the file, or a SecretReference. The key reference is required since etcd authentication is based on certificates, and Kamaji is responsible in creating this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#certificate_authority DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#certificate_authority}
  */
  readonly certificateAuthority: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority;
  /**
  * Specifies the SSL/TLS key and private key pair used to connect to the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#client_certificate DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#client_certificate}
  */
  readonly clientCertificate?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityToTerraform(struct!.certificateAuthority),
    client_certificate: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateToTerraform(struct!.clientCertificate),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityToHclTerraform(struct!.certificateAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority",
    },
    client_certificate: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthority = this._certificateAuthority?.internalValue;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthority.internalValue = undefined;
      this._clientCertificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthority.internalValue = value.certificateAuthority;
      this._clientCertificate.internalValue = value.clientCertificate;
    }
  }

  // certificate_authority - computed: false, optional: false, required: true
  private _certificateAuthority = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthorityOutputReference(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
  }
  public putCertificateAuthority(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigCertificateAuthority) {
    this._certificateAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority.internalValue;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }
}
export interface DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec {
  /**
  * In case of authentication enabled for the given data store, specifies the username and password pair. This value is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#basic_auth DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth;
  /**
  * The driver to use to connect to the shared datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#driver DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * List of the endpoints to connect to the shared datastore. No need for protocol, just bare IP/FQDN and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#endpoints DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string[];
  /**
  * Defines the TLS/SSL configuration required to connect to the data store in a secure way. This value is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#tls_config DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig;
}

export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthToTerraform(struct!.basicAuth),
    driver: cdktf.stringToTerraform(struct!.driver),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    tls_config: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_config: {
      value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._driver = undefined;
      this._endpoints = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._driver = value.driver;
      this._endpoints = value.endpoints;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest k8s_kamaji_clastix_io_data_store_v1alpha1_manifest}
*/
export class DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kamaji_clastix_io_data_store_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKamajiClastixIoDataStoreV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kamaji_clastix_io_data_store_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kamaji_clastix_io_data_store_v1alpha1_manifest k8s_kamaji_clastix_io_data_store_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kamaji_clastix_io_data_store_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKamajiClastixIoDataStoreV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
