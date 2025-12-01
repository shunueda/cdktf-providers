// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#metadata DataK8SDataFluidIoDatasetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata;
  /**
  * DatasetSpec defines the desired state of Dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#spec DataK8SDataFluidIoDatasetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec;
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#annotations DataK8SDataFluidIoDatasetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#labels DataK8SDataFluidIoDatasetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#name DataK8SDataFluidIoDatasetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#namespace DataK8SDataFluidIoDatasetV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation {
  /**
  * NodeName describes the nodeName of restore if Path is in the form of local://subpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#node_name DataK8SDataFluidIoDatasetV1Alpha1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Path describes the path of restore, in the form of local://subpath or pvc://<pvcName>/subpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#path DataK8SDataFluidIoDatasetV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocationToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocationToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
      this._path = value.path;
    }
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef {
  /**
  * The required key in the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#key DataK8SDataFluidIoDatasetV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of required secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#name DataK8SDataFluidIoDatasetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRefToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom {
  /**
  * The encryptInfo obtained from secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#secret_key_ref DataK8SDataFluidIoDatasetV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions {
  /**
  * The name of encryptOption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#name DataK8SDataFluidIoDatasetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The valueFrom of encryptOption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#value_from DataK8SDataFluidIoDatasetV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts {
  /**
  * The secret information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#encrypt_options DataK8SDataFluidIoDatasetV1Alpha1Manifest#encrypt_options}
  */
  readonly encryptOptions?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions[] | cdktf.IResolvable;
  /**
  * MountPoint is the mount point of source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#mount_point DataK8SDataFluidIoDatasetV1Alpha1Manifest#mount_point}
  */
  readonly mountPoint: string;
  /**
  * The name of mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#name DataK8SDataFluidIoDatasetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The Mount Options. <br> Refer to <a href='https://docs.alluxio.io/os/user/stable/en/reference/Properties-List.html'>Mount Options</a>. <br> The option has Prefix 'fs.' And you can Learn more from <a href='https://docs.alluxio.io/os/user/stable/en/ufs/S3.html'>The Storage Integrations</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#options DataK8SDataFluidIoDatasetV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * The path of mount, if not set will be /{Name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#path DataK8SDataFluidIoDatasetV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Optional: Defaults to false (read-write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#read_only DataK8SDataFluidIoDatasetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional: Defaults to false (shared).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#shared DataK8SDataFluidIoDatasetV1Alpha1Manifest#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypt_options: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsToTerraform, false)(struct!.encryptOptions),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    shared: cdktf.booleanToTerraform(struct!.shared),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypt_options: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsToHclTerraform, false)(struct!.encryptOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsList",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
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
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptOptions = this._encryptOptions?.internalValue;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptOptions.internalValue = undefined;
      this._mountPoint = undefined;
      this._name = undefined;
      this._options = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._shared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptOptions.internalValue = value.encryptOptions;
      this._mountPoint = value.mountPoint;
      this._name = value.name;
      this._options = value.options;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._shared = value.shared;
    }
  }

  // encrypt_options - computed: false, optional: true, required: false
  private _encryptOptions = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptionsList(this, "encrypt_options", false);
  public get encryptOptions() {
    return this._encryptOptions;
  }
  public putEncryptOptions(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsEncryptOptions[] | cdktf.IResolvable) {
    this._encryptOptions.internalValue = value;
  }
  public resetEncryptOptions() {
    this._encryptOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptOptionsInput() {
    return this._encryptOptions.internalValue;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#key DataK8SDataFluidIoDatasetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#operator DataK8SDataFluidIoDatasetV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#values DataK8SDataFluidIoDatasetV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#key DataK8SDataFluidIoDatasetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#operator DataK8SDataFluidIoDatasetV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#values DataK8SDataFluidIoDatasetV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#match_expressions DataK8SDataFluidIoDatasetV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#match_fields DataK8SDataFluidIoDatasetV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#node_selector_terms DataK8SDataFluidIoDatasetV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity {
  /**
  * Required specifies hard node constraints that must be met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#required DataK8SDataFluidIoDatasetV1Alpha1Manifest#required}
  */
  readonly required?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredToTerraform(struct!.required),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredToHclTerraform(struct!.required),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._required.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._required.internalValue = value.required;
    }
  }

  // required - computed: false, optional: true, required: false
  private _required = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityRequired) {
    this._required.internalValue = value;
  }
  public resetRequired() {
    this._required.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner {
  /**
  * The gid to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#gid DataK8SDataFluidIoDatasetV1Alpha1Manifest#gid}
  */
  readonly gid: number;
  /**
  * The group name to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#group DataK8SDataFluidIoDatasetV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * The uid to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#uid DataK8SDataFluidIoDatasetV1Alpha1Manifest#uid}
  */
  readonly uid: number;
  /**
  * The user name to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#user DataK8SDataFluidIoDatasetV1Alpha1Manifest#user}
  */
  readonly user: string;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwnerToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    group: cdktf.stringToTerraform(struct!.group),
    uid: cdktf.numberToTerraform(struct!.uid),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwnerToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner | cdktf.IResolvable): any {
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
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._group = undefined;
      this._uid = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._group = value.group;
      this._uid = value.uid;
      this._user = value.user;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes {
  /**
  * Category the runtime object belongs to (e.g. Accelerate)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#category DataK8SDataFluidIoDatasetV1Alpha1Manifest#category}
  */
  readonly category?: string;
  /**
  * Runtime master replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#master_replicas DataK8SDataFluidIoDatasetV1Alpha1Manifest#master_replicas}
  */
  readonly masterReplicas?: number;
  /**
  * Name of the runtime object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#name DataK8SDataFluidIoDatasetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the runtime object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#namespace DataK8SDataFluidIoDatasetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Runtime object's type (e.g. Alluxio)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#type DataK8SDataFluidIoDatasetV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    master_replicas: cdktf.numberToTerraform(struct!.masterReplicas),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_replicas: {
      value: cdktf.numberToHclTerraform(struct!.masterReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._masterReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterReplicas = this._masterReplicas;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._masterReplicas = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._masterReplicas = value.masterReplicas;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // master_replicas - computed: false, optional: true, required: false
  private _masterReplicas?: number; 
  public get masterReplicas() {
    return this.getNumberAttribute('master_replicas');
  }
  public set masterReplicas(value: number) {
    this._masterReplicas = value;
  }
  public resetMasterReplicas() {
    this._masterReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterReplicasInput() {
    return this._masterReplicas;
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

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef {
  /**
  * The required key in the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#key DataK8SDataFluidIoDatasetV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of required secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#name DataK8SDataFluidIoDatasetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRefToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom {
  /**
  * The encryptInfo obtained from secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#secret_key_ref DataK8SDataFluidIoDatasetV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions {
  /**
  * The name of encryptOption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#name DataK8SDataFluidIoDatasetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The valueFrom of encryptOption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#value_from DataK8SDataFluidIoDatasetV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#effect DataK8SDataFluidIoDatasetV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#key DataK8SDataFluidIoDatasetV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#operator DataK8SDataFluidIoDatasetV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#toleration_seconds DataK8SDataFluidIoDatasetV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#value DataK8SDataFluidIoDatasetV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsOutputReference {
    return new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec {
  /**
  * AccessModes contains all ways the volume backing the PVC can be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#access_modes DataK8SDataFluidIoDatasetV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * DataRestoreLocation is the location to load data of dataset been backuped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#data_restore_location DataK8SDataFluidIoDatasetV1Alpha1Manifest#data_restore_location}
  */
  readonly dataRestoreLocation?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation;
  /**
  * Mount Points to be mounted on cache runtime. <br> This field can be empty because some runtimes don't need to mount external storage (e.g. <a href='https://v6d.io/'>Vineyard</a>).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#mounts DataK8SDataFluidIoDatasetV1Alpha1Manifest#mounts}
  */
  readonly mounts?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts[] | cdktf.IResolvable;
  /**
  * NodeAffinity defines constraints that limit what nodes this dataset can be cached to. This field influences the scheduling of pods that use the cached dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#node_affinity DataK8SDataFluidIoDatasetV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity;
  /**
  * The owner of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#owner DataK8SDataFluidIoDatasetV1Alpha1Manifest#owner}
  */
  readonly owner?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner;
  /**
  * Manage switch for opening Multiple datasets single node deployment or not TODO(xieydd) In future, evaluate node resources and runtime resources to decide whether to turn them on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#placement DataK8SDataFluidIoDatasetV1Alpha1Manifest#placement}
  */
  readonly placement?: string;
  /**
  * Runtimes for supporting dataset (e.g. AlluxioRuntime)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#runtimes DataK8SDataFluidIoDatasetV1Alpha1Manifest#runtimes}
  */
  readonly runtimes?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes[] | cdktf.IResolvable;
  /**
  * SharedEncryptOptions is the encryptOption to all mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#shared_encrypt_options DataK8SDataFluidIoDatasetV1Alpha1Manifest#shared_encrypt_options}
  */
  readonly sharedEncryptOptions?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions[] | cdktf.IResolvable;
  /**
  * SharedOptions is the options to all mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#shared_options DataK8SDataFluidIoDatasetV1Alpha1Manifest#shared_options}
  */
  readonly sharedOptions?: { [key: string]: string };
  /**
  * If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#tolerations DataK8SDataFluidIoDatasetV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_restore_location: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocationToTerraform(struct!.dataRestoreLocation),
    mounts: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsToTerraform, false)(struct!.mounts),
    node_affinity: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityToTerraform(struct!.nodeAffinity),
    owner: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwnerToTerraform(struct!.owner),
    placement: cdktf.stringToTerraform(struct!.placement),
    runtimes: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesToTerraform, false)(struct!.runtimes),
    shared_encrypt_options: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsToTerraform, false)(struct!.sharedEncryptOptions),
    shared_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sharedOptions),
    tolerations: cdktf.listMapper(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_restore_location: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocationToHclTerraform(struct!.dataRestoreLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation",
    },
    mounts: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsToHclTerraform, false)(struct!.mounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsList",
    },
    node_affinity: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity",
    },
    owner: {
      value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner",
    },
    placement: {
      value: cdktf.stringToHclTerraform(struct!.placement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtimes: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesToHclTerraform, false)(struct!.runtimes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesList",
    },
    shared_encrypt_options: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsToHclTerraform, false)(struct!.sharedEncryptOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsList",
    },
    shared_options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sharedOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataRestoreLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRestoreLocation = this._dataRestoreLocation?.internalValue;
    }
    if (this._mounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mounts = this._mounts?.internalValue;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._runtimes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimes = this._runtimes?.internalValue;
    }
    if (this._sharedEncryptOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedEncryptOptions = this._sharedEncryptOptions?.internalValue;
    }
    if (this._sharedOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedOptions = this._sharedOptions;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataRestoreLocation.internalValue = undefined;
      this._mounts.internalValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._placement = undefined;
      this._runtimes.internalValue = undefined;
      this._sharedEncryptOptions.internalValue = undefined;
      this._sharedOptions = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataRestoreLocation.internalValue = value.dataRestoreLocation;
      this._mounts.internalValue = value.mounts;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._owner.internalValue = value.owner;
      this._placement = value.placement;
      this._runtimes.internalValue = value.runtimes;
      this._sharedEncryptOptions.internalValue = value.sharedEncryptOptions;
      this._sharedOptions = value.sharedOptions;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_restore_location - computed: false, optional: true, required: false
  private _dataRestoreLocation = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocationOutputReference(this, "data_restore_location");
  public get dataRestoreLocation() {
    return this._dataRestoreLocation;
  }
  public putDataRestoreLocation(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecDataRestoreLocation) {
    this._dataRestoreLocation.internalValue = value;
  }
  public resetDataRestoreLocation() {
    this._dataRestoreLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRestoreLocationInput() {
    return this._dataRestoreLocation.internalValue;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMountsList(this, "mounts", false);
  public get mounts() {
    return this._mounts;
  }
  public putMounts(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecMounts[] | cdktf.IResolvable) {
    this._mounts.internalValue = value;
  }
  public resetMounts() {
    this._mounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts.internalValue;
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOwner) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // runtimes - computed: false, optional: true, required: false
  private _runtimes = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimesList(this, "runtimes", false);
  public get runtimes() {
    return this._runtimes;
  }
  public putRuntimes(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecRuntimes[] | cdktf.IResolvable) {
    this._runtimes.internalValue = value;
  }
  public resetRuntimes() {
    this._runtimes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimesInput() {
    return this._runtimes.internalValue;
  }

  // shared_encrypt_options - computed: false, optional: true, required: false
  private _sharedEncryptOptions = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptionsList(this, "shared_encrypt_options", false);
  public get sharedEncryptOptions() {
    return this._sharedEncryptOptions;
  }
  public putSharedEncryptOptions(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecSharedEncryptOptions[] | cdktf.IResolvable) {
    this._sharedEncryptOptions.internalValue = value;
  }
  public resetSharedEncryptOptions() {
    this._sharedEncryptOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedEncryptOptionsInput() {
    return this._sharedEncryptOptions.internalValue;
  }

  // shared_options - computed: false, optional: true, required: false
  private _sharedOptions?: { [key: string]: string }; 
  public get sharedOptions() {
    return this.getStringMapAttribute('shared_options');
  }
  public set sharedOptions(value: { [key: string]: string }) {
    this._sharedOptions = value;
  }
  public resetSharedOptions() {
    this._sharedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedOptionsInput() {
    return this._sharedOptions;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest k8s_data_fluid_io_dataset_v1alpha1_manifest}
*/
export class DataK8SDataFluidIoDatasetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_data_fluid_io_dataset_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataFluidIoDatasetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataFluidIoDatasetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataFluidIoDatasetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataFluidIoDatasetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_data_fluid_io_dataset_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_dataset_v1alpha1_manifest k8s_data_fluid_io_dataset_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataFluidIoDatasetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataFluidIoDatasetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_data_fluid_io_dataset_v1alpha1_manifest',
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
  private _metadata = new DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataFluidIoDatasetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataFluidIoDatasetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataFluidIoDatasetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataFluidIoDatasetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataFluidIoDatasetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
