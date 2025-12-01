// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#metadata DataK8SAppTerraformIoModuleV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata;
  /**
  * ModuleSpec defines the desired state of Module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#spec DataK8SAppTerraformIoModuleV1Alpha2Manifest#spec}
  */
  readonly spec: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec;
}
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#annotations DataK8SAppTerraformIoModuleV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#labels DataK8SAppTerraformIoModuleV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#name DataK8SAppTerraformIoModuleV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#namespace DataK8SAppTerraformIoModuleV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule {
  /**
  * Non local Terraform module source. More information: - https://developer.hashicorp.com/terraform/language/modules/sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#source DataK8SAppTerraformIoModuleV1Alpha2Manifest#source}
  */
  readonly source: string;
  /**
  * Terraform module version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#version DataK8SAppTerraformIoModuleV1Alpha2Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModuleToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModuleToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._version = value.version;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs {
  /**
  * Output name must match with the module output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#name DataK8SAppTerraformIoModuleV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Specify whether or not the output is sensitive. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#sensitive DataK8SAppTerraformIoModuleV1Alpha2Manifest#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
  }
}


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs | cdktf.IResolvable): any {
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sensitive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sensitive = value.sensitive;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsOutputReference {
    return new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#key DataK8SAppTerraformIoModuleV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#name DataK8SAppTerraformIoModuleV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#optional DataK8SAppTerraformIoModuleV1Alpha2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRefToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRefToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken {
  /**
  * Selects a key of a secret in the workspace's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#secret_key_ref DataK8SAppTerraformIoModuleV1Alpha2Manifest#secret_key_ref}
  */
  readonly secretKeyRef: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken | cdktf.IResolvable | undefined) {
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef = new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables {
  /**
  * Variable name must exist in the Workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#name DataK8SAppTerraformIoModuleV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesOutputReference {
    return new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace {
  /**
  * Module Workspace ID. Must match pattern: '^ws-[a-zA-Z0-9]+$'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#id DataK8SAppTerraformIoModuleV1Alpha2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Module Workspace Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#name DataK8SAppTerraformIoModuleV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspaceToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspaceToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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
}
export interface DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec {
  /**
  * Specify whether or not to execute a Destroy run when the object is deleted from the Kubernetes. Default: 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#destroy_on_deletion DataK8SAppTerraformIoModuleV1Alpha2Manifest#destroy_on_deletion}
  */
  readonly destroyOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Module source and version to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#module DataK8SAppTerraformIoModuleV1Alpha2Manifest#module}
  */
  readonly module: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule;
  /**
  * Name of the module that will be uploaded and executed. Default: 'this'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#name DataK8SAppTerraformIoModuleV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Organization name where the Workspace will be created. More information: - https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#organization DataK8SAppTerraformIoModuleV1Alpha2Manifest#organization}
  */
  readonly organization: string;
  /**
  * Module outputs to store in ConfigMap(non-sensitive) or Secret(sensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#outputs DataK8SAppTerraformIoModuleV1Alpha2Manifest#outputs}
  */
  readonly outputs?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs[] | cdktf.IResolvable;
  /**
  * Allows executing a new Run without changing any Workspace or Module attributes. Example: kubectl patch <KIND> <NAME> --type=merge --patch '{'spec': {'restartedAt': ```date -u -Iseconds```}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#restarted_at DataK8SAppTerraformIoModuleV1Alpha2Manifest#restarted_at}
  */
  readonly restartedAt?: string;
  /**
  * API Token to be used for API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#token DataK8SAppTerraformIoModuleV1Alpha2Manifest#token}
  */
  readonly token: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken;
  /**
  * Variables to pass to the module, they must exist in the Workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#variables DataK8SAppTerraformIoModuleV1Alpha2Manifest#variables}
  */
  readonly variables?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables[] | cdktf.IResolvable;
  /**
  * Workspace to execute the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#workspace DataK8SAppTerraformIoModuleV1Alpha2Manifest#workspace}
  */
  readonly workspace: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace;
}

export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destroy_on_deletion: cdktf.booleanToTerraform(struct!.destroyOnDeletion),
    module: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModuleToTerraform(struct!.module),
    name: cdktf.stringToTerraform(struct!.name),
    organization: cdktf.stringToTerraform(struct!.organization),
    outputs: cdktf.listMapper(dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsToTerraform, false)(struct!.outputs),
    restarted_at: cdktf.stringToTerraform(struct!.restartedAt),
    token: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenToTerraform(struct!.token),
    variables: cdktf.listMapper(dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesToTerraform, false)(struct!.variables),
    workspace: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspaceToTerraform(struct!.workspace),
  }
}


export function dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destroy_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.destroyOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    module: {
      value: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModuleToHclTerraform(struct!.module),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsList",
    },
    restarted_at: {
      value: cdktf.stringToHclTerraform(struct!.restartedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken",
    },
    variables: {
      value: cdktf.listMapperHcl(dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesList",
    },
    workspace: {
      value: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destroyOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destroyOnDeletion = this._destroyOnDeletion;
    }
    if (this._module?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._restartedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartedAt = this._restartedAt;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destroyOnDeletion = undefined;
      this._module.internalValue = undefined;
      this._name = undefined;
      this._organization = undefined;
      this._outputs.internalValue = undefined;
      this._restartedAt = undefined;
      this._token.internalValue = undefined;
      this._variables.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destroyOnDeletion = value.destroyOnDeletion;
      this._module.internalValue = value.module;
      this._name = value.name;
      this._organization = value.organization;
      this._outputs.internalValue = value.outputs;
      this._restartedAt = value.restartedAt;
      this._token.internalValue = value.token;
      this._variables.internalValue = value.variables;
      this._workspace.internalValue = value.workspace;
    }
  }

  // destroy_on_deletion - computed: false, optional: true, required: false
  private _destroyOnDeletion?: boolean | cdktf.IResolvable; 
  public get destroyOnDeletion() {
    return this.getBooleanAttribute('destroy_on_deletion');
  }
  public set destroyOnDeletion(value: boolean | cdktf.IResolvable) {
    this._destroyOnDeletion = value;
  }
  public resetDestroyOnDeletion() {
    this._destroyOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyOnDeletionInput() {
    return this._destroyOnDeletion;
  }

  // module - computed: false, optional: false, required: true
  private _module = new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModuleOutputReference(this, "module");
  public get module() {
    return this._module;
  }
  public putModule(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecModule) {
    this._module.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module.internalValue;
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // restarted_at - computed: false, optional: true, required: false
  private _restartedAt?: string; 
  public get restartedAt() {
    return this.getStringAttribute('restarted_at');
  }
  public set restartedAt(value: string) {
    this._restartedAt = value;
  }
  public resetRestartedAt() {
    this._restartedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartedAtInput() {
    return this._restartedAt;
  }

  // token - computed: false, optional: false, required: true
  private _token = new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToken) {
    this._token.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace = new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecWorkspace) {
    this._workspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest k8s_app_terraform_io_module_v1alpha2_manifest}
*/
export class DataK8SAppTerraformIoModuleV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_app_terraform_io_module_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppTerraformIoModuleV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppTerraformIoModuleV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SAppTerraformIoModuleV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppTerraformIoModuleV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_app_terraform_io_module_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/app_terraform_io_module_v1alpha2_manifest k8s_app_terraform_io_module_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppTerraformIoModuleV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppTerraformIoModuleV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_app_terraform_io_module_v1alpha2_manifest',
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
  private _metadata = new DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAppTerraformIoModuleV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SAppTerraformIoModuleV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppTerraformIoModuleV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppTerraformIoModuleV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppTerraformIoModuleV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
