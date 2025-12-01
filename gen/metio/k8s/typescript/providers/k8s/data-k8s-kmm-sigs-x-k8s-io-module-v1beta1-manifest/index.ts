// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#metadata DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata;
  /**
  * ModuleSpec describes how the KMM operator should deploy a Module on those nodes that need it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#spec DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec;
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#annotations DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#labels DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#namespace DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#optional DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#api_version DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#field_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#container_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#divisor DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resource DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#optional DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#config_map_key_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#field_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resource_field_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_key_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromSecretKeyRef) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#value DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#value_from DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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
      this._value = value.value;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvValueFrom) {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#request DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#claims DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#limits DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#requests DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mount_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mount_propagation DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * RecursiveReadOnly specifies whether read-only mounts should be handled recursively. If ReadOnly is false, this field has no meaning and must be unspecified. If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only. If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime. If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason. If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None). If this field is not specified, it is treated as an equivalent of Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#recursive_read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#sub_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#sub_path_expr DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer {
  /**
  * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#args DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#command DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#command}
  */
  readonly command?: string[];
  /**
  * List of environment variables to set in the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#env DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#env}
  */
  readonly env?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv[] | cdktf.IResolvable;
  /**
  * Image is the name of the container image that the device plugin container will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#image DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#image_pull_policy DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resources DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources;
  /**
  * VolumeMounts is a list of volume mounts that are appended to the default ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_mounts DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    resources: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._resources.internalValue = value.resources;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#partition DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_id DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStoreToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStoreToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk {
  /**
  * cachingMode is the Host Caching mode: None, Read Only, Read Write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#caching_mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#caching_mode}
  */
  readonly cachingMode?: string;
  /**
  * diskName is the Name of the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#disk_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#disk_name}
  */
  readonly diskName: string;
  /**
  * diskURI is the URI of data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#disk_uri DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#disk_uri}
  */
  readonly diskUri: string;
  /**
  * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * kind expected values are Shared: multiple blob disks per storage account Dedicated: single blob disk per storage account Managed: azure managed data disk (only in managed availability set). defaults to shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#kind DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDiskToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_uri: cdktf.stringToTerraform(struct!.diskUri),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDiskToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_mode: {
      value: cdktf.stringToHclTerraform(struct!.cachingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_uri: {
      value: cdktf.stringToHclTerraform(struct!.diskUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMode = this._cachingMode;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUri = this._diskUri;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachingMode = undefined;
      this._diskName = undefined;
      this._diskUri = undefined;
      this._fsType = undefined;
      this._kind = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachingMode = value.cachingMode;
      this._diskName = value.diskName;
      this._diskUri = value.diskUri;
      this._fsType = value.fsType;
      this._kind = value.kind;
      this._readOnly = value.readOnly;
    }
  }

  // caching_mode - computed: false, optional: true, required: false
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  public resetCachingMode() {
    this._cachingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode;
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_uri - computed: false, optional: false, required: true
  private _diskUri?: string; 
  public get diskUri() {
    return this.getStringAttribute('disk_uri');
  }
  public set diskUri(value: string) {
    this._diskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUriInput() {
    return this._diskUri;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile {
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of secret that contains Azure Storage Account Name and Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * shareName is the azure share Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#share_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#share_name}
  */
  readonly shareName: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFileToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFileToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnly = undefined;
      this._secretName = undefined;
      this._shareName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
      this._shareName = value.shareName;
    }
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs {
  /**
  * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#monitors DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_file DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_file}
  */
  readonly secretFile?: string;
  /**
  * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef;
  /**
  * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#user DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    secret_file: {
      value: cdktf.stringToHclTerraform(struct!.secretFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFile = this._secretFile;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitors = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretFile = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitors = value.monitors;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretFile = value.secretFile;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef;
  /**
  * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_id DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRefToTerraform(struct!.secretRef),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#default_mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#items DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#items}
  */
  readonly items?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#optional DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsList",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi {
  /**
  * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#driver DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType to mount. Ex. 'ext4', 'xfs', 'ntfs'. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#node_publish_secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef;
  /**
  * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_attributes DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    node_publish_secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_publish_secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRefToHclTerraform(struct!.nodePublishSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.volumeAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._nodePublishSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublishSecretRef = this._nodePublishSecretRef?.internalValue;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributes = this._volumeAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._nodePublishSecretRef.internalValue = undefined;
      this._readOnly = undefined;
      this._volumeAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._nodePublishSecretRef.internalValue = value.nodePublishSecretRef;
      this._readOnly = value.readOnly;
      this._volumeAttributes = value.volumeAttributes;
    }
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiNodePublishSecretRef) {
    this._nodePublishSecretRef.internalValue = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef.internalValue;
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

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string }; 
  public get volumeAttributes() {
    return this.getStringMapAttribute('volume_attributes');
  }
  public set volumeAttributes(value: { [key: string]: string }) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#api_version DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#field_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#container_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#divisor DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resource DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#field_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resource_field_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#default_mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Items is a list of downward API volume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#items DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#items}
  */
  readonly items?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#medium DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#size_limit DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDirToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDirToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#api_group DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#kind DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#api_group DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#kind DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#namespace DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#limits DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#requests DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#operator DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#values DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#match_expressions DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#match_labels DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#access_modes DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#data_source DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#data_source_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resources DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#selector DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#storage_class_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_attributes_class_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
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
    data_source: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
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

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#metadata DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#spec DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_claim_template DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#lun DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#target_ww_ns DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#wwids DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFcToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetWwNs),
    wwids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wwids),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFcToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ww_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetWwNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wwids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wwids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    if (this._wwids !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwids = this._wwids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
      this._wwids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
      this._wwids = value.wwids;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
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

  // target_ww_ns - computed: false, optional: true, required: false
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  public resetTargetWwNs() {
    this._targetWwNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }

  // wwids - computed: false, optional: true, required: false
  private _wwids?: string[]; 
  public get wwids() {
    return this.getListAttribute('wwids');
  }
  public set wwids(value: string[]) {
    this._wwids = value;
  }
  public resetWwids() {
    this._wwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwidsInput() {
    return this._wwids;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#driver DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#options DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#dataset_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#dataset_uuid DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlockerToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlockerToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_uuid: {
      value: cdktf.stringToHclTerraform(struct!.datasetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#partition DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#pd_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDiskToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pd_name: {
      value: cdktf.stringToHclTerraform(struct!.pdName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
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
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#directory DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#repository DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#revision DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepoToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepoToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#endpoints DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
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
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPathToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPathToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage {
  /**
  * Policy for pulling OCI objects. Possible values are: Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#pull_policy DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Required: Image or artifact reference to be used. Behaves in the same way as pod.spec.containers[*].image. Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#reference DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImageToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImageToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._reference = value.reference;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#chap_auth_discovery DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#chap_auth_session DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#initiator_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#iqn DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#iscsi_interface DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#lun DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#portals DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#target_portal DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_auth_discovery: cdktf.booleanToTerraform(struct!.chapAuthDiscovery),
    chap_auth_session: cdktf.booleanToTerraform(struct!.chapAuthSession),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    portals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portals),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chap_auth_session: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_interface: {
      value: cdktf.stringToHclTerraform(struct!.iscsiInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef",
    },
    target_portal: {
      value: cdktf.stringToHclTerraform(struct!.targetPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthDiscovery = this._chapAuthDiscovery;
    }
    if (this._chapAuthSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthSession = this._chapAuthSession;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = undefined;
      this._chapAuthSession = undefined;
      this._fsType = undefined;
      this._initiatorName = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._portals = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._targetPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = value.chapAuthDiscovery;
      this._chapAuthSession = value.chapAuthSession;
      this._fsType = value.fsType;
      this._initiatorName = value.initiatorName;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._portals = value.portals;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._targetPortal = value.targetPortal;
    }
  }

  // chap_auth_discovery - computed: false, optional: true, required: false
  private _chapAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get chapAuthDiscovery() {
    return this.getBooleanAttribute('chap_auth_discovery');
  }
  public set chapAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._chapAuthDiscovery = value;
  }
  public resetChapAuthDiscovery() {
    this._chapAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthDiscoveryInput() {
    return this._chapAuthDiscovery;
  }

  // chap_auth_session - computed: false, optional: true, required: false
  private _chapAuthSession?: boolean | cdktf.IResolvable; 
  public get chapAuthSession() {
    return this.getBooleanAttribute('chap_auth_session');
  }
  public set chapAuthSession(value: boolean | cdktf.IResolvable) {
    this._chapAuthSession = value;
  }
  public resetChapAuthSession() {
    this._chapAuthSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthSessionInput() {
    return this._chapAuthSession;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // initiator_name - computed: false, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string[]; 
  public get portals() {
    return this.getListAttribute('portals');
  }
  public set portals(value: string[]) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#server DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#claim_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
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
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#pd_id DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_id: {
      value: cdktf.stringToHclTerraform(struct!.pdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_id DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolumeToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolumeToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#operator DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#values DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#match_expressions DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#match_labels DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle {
  /**
  * Select all ClusterTrustBundles that match this label selector. Only has effect if signerName is set. Mutually-exclusive with name. If unset, interpreted as 'match nothing'. If set but empty, interpreted as 'match everything'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#label_selector DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Select a single ClusterTrustBundle by object name. Mutually-exclusive with signerName and labelSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available. If using name, then the named ClusterTrustBundle is allowed not to exist. If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#optional DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Relative path from the volume root to write the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name. The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#signer_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector",
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._path = undefined;
      this._signerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._optional = value.optional;
      this._path = value.path;
      this._signerName = value.signerName;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#items DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#items}
  */
  readonly items?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#optional DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#api_version DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#field_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#container_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#divisor DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resource DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#field_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#resource_field_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#items DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#items}
  */
  readonly items?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#items DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#items}
  */
  readonly items?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#optional DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#audience DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#expiration_seconds DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#cluster_trust_bundle DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#config_map DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#downward_api DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#service_account_token DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTrustBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTrustBundle = this._clusterTrustBundle?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = value.clusterTrustBundle;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // cluster_trust_bundle - computed: false, optional: true, required: false
  private _clusterTrustBundle = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesClusterTrustBundle) {
    this._clusterTrustBundle.internalValue = value;
  }
  public resetClusterTrustBundle() {
    this._clusterTrustBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrustBundleInput() {
    return this._clusterTrustBundle.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#default_mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections. Each entry in this list handles one source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#sources DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#sources}
  */
  readonly sources?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#group DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#registry DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#tenant DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#user DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyteToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyteToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._tenant = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._tenant = value.tenant;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#image DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#keyring DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#monitors DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#pool DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#user DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    image: cdktf.stringToTerraform(struct!.image),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    pool: cdktf.stringToTerraform(struct!.pool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyring: {
      value: cdktf.stringToHclTerraform(struct!.keyring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
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
    secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._image = undefined;
      this._keyring = undefined;
      this._monitors = undefined;
      this._pool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._image = value.image;
      this._keyring = value.keyring;
      this._monitors = value.monitors;
      this._pool = value.pool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#gateway DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#protection_domain DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#ssl_enabled DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#storage_mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#storage_pool DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#system DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
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
    secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._gateway = undefined;
      this._protectionDomain = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._sslEnabled = undefined;
      this._storageMode = undefined;
      this._storagePool = undefined;
      this._system = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._gateway = value.gateway;
      this._protectionDomain = value.protectionDomain;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._sslEnabled = value.sslEnabled;
      this._storageMode = value.storageMode;
      this._storagePool = value.storagePool;
      this._system = value.systemAttribute;
      this._volumeName = value.volumeName;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
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

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#default_mode DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#items DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#items}
  */
  readonly items?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#optional DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRefToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#read_only DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret_ref DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_namespace DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    secret_ref: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeName = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeName = value.volumeName;
      this._volumeNamespace = value.volumeNamespace;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_namespace - computed: false, optional: true, required: false
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  public resetVolumeNamespace() {
    this._volumeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fs_type DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#storage_policy_id DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#storage_policy_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volume_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolumeToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolumeToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._storagePolicyId = undefined;
      this._storagePolicyName = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._storagePolicyId = value.storagePolicyId;
      this._storagePolicyName = value.storagePolicyName;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#aws_elastic_block_store DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#azure_disk DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#azure_file DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#cephfs DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#cinder DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#cinder}
  */
  readonly cinder?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#config_map DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#csi DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#csi}
  */
  readonly csi?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#downward_api DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#empty_dir DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#ephemeral DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#fc DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#fc}
  */
  readonly fc?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#flex_volume DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#flocker DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#flocker}
  */
  readonly flocker?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#gce_persistent_disk DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#git_repo DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#glusterfs DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#host_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#host_path}
  */
  readonly hostPath?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath;
  /**
  * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided: - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails. The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath). The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#image DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#image}
  */
  readonly image?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#iscsi DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#nfs DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#nfs}
  */
  readonly nfs?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#persistent_volume_claim DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#photon_persistent_disk DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#portworx_volume DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#projected DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#projected}
  */
  readonly projected?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#quobyte DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#rbd DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#rbd}
  */
  readonly rbd?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#scale_io DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secret DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#storageos DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#storageos}
  */
  readonly storageos?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#vsphere_volume DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPathToTerraform(struct!.hostPath),
    image: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImageToTerraform(struct!.image),
    iscsi: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs",
    },
    cinder: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder",
    },
    config_map: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap",
    },
    csi: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi",
    },
    downward_api: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral",
    },
    fc: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc",
    },
    flex_volume: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath",
    },
    image: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage",
    },
    iscsi: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected",
    },
    quobyte: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte",
    },
    rbd: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd",
    },
    scale_io: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo",
    },
    secret: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret",
    },
    storageos: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephfs = this._cephfs?.internalValue;
    }
    if (this._cinder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._ephemeral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral?.internalValue;
    }
    if (this._fc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    if (this._glusterfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._iscsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._photonPersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._portworxVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portworxVolume = this._portworxVolume?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._quobyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._scaleIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIo = this._scaleIo?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._storageos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageos = this._storageos?.internalValue;
    }
    if (this._vsphereVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephfs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._ephemeral.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._gitRepo.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._image.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._name = undefined;
      this._nfs.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._portworxVolume.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._scaleIo.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._storageos.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephfs.internalValue = value.cephfs;
      this._cinder.internalValue = value.cinder;
      this._configMap.internalValue = value.configMap;
      this._csi.internalValue = value.csi;
      this._downwardApi.internalValue = value.downwardApi;
      this._emptyDir.internalValue = value.emptyDir;
      this._ephemeral.internalValue = value.ephemeral;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._gitRepo.internalValue = value.gitRepo;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._image.internalValue = value.image;
      this._iscsi.internalValue = value.iscsi;
      this._name = value.name;
      this._nfs.internalValue = value.nfs;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._portworxVolume.internalValue = value.portworxVolume;
      this._projected.internalValue = value.projected;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._scaleIo.internalValue = value.scaleIo;
      this._secret.internalValue = value.secret;
      this._storageos.internalValue = value.storageos;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // cephfs - computed: false, optional: true, required: false
  private _cephfs = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCephfs) {
    this._cephfs.internalValue = value;
  }
  public resetCephfs() {
    this._cephfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephfsInput() {
    return this._cephfs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesEphemeral) {
    this._ephemeral.internalValue = value;
  }
  public resetEphemeral() {
    this._ephemeral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
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

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // portworx_volume - computed: false, optional: true, required: false
  private _portworxVolume = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesPortworxVolume) {
    this._portworxVolume.internalValue = value;
  }
  public resetPortworxVolume() {
    this._portworxVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portworxVolumeInput() {
    return this._portworxVolume.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // scale_io - computed: false, optional: true, required: false
  private _scaleIo = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesScaleIo) {
    this._scaleIo.internalValue = value;
  }
  public resetScaleIo() {
    this._scaleIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleIoInput() {
    return this._scaleIo.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // storageos - computed: false, optional: true, required: false
  private _storageos = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesStorageos) {
    this._storageos.internalValue = value;
  }
  public resetStorageos() {
    this._storageos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageosInput() {
    return this._storageos.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#container DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#container}
  */
  readonly container: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#service_account_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#volumes DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#volumes}
  */
  readonly volumes?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes[] | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerToTerraform(struct!.container),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    volumes: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
      this._serviceAccountName = value.serviceAccountName;
      this._volumes.internalValue = value.volumes;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginContainer) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecretToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls {
  /**
  * If Insecure is true, the operator will be able to access a registry in an insecure (plain HTTP) protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * If InsecureSkipTLSVerify, the operator will accept any certificate provided by the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure_skip_tls_verify DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTlsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTlsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure = undefined;
      this._insecureSkipTlsVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure = value.insecure;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#value DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMapToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMapToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams {
  /**
  * Kaniko image tag to use when creating the build Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#tag DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParamsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParamsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild {
  /**
  * BaseImageRegistryTLS contains settings determining how to access registries of the base images in the build-process' Dockerfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#base_image_registry_tls DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#base_image_registry_tls}
  */
  readonly baseImageRegistryTls?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls;
  /**
  * BuildArgs is an array of build variables that are provided to the image building backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#build_args DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#build_args}
  */
  readonly buildArgs?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs[] | cdktf.IResolvable;
  /**
  * ConfigMap that holds Dockerfile contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#dockerfile_config_map DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#dockerfile_config_map}
  */
  readonly dockerfileConfigMap: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap;
  /**
  * KanikoParams is used to customize the building process of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#kaniko_params DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#kaniko_params}
  */
  readonly kanikoParams?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams;
  /**
  * Secrets is an optional list of secrets to be made available to the build system. Those secrets should be used for private resources such as a private Github repo. For container registries auth use module.spec.imagePullSecret instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secrets DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secrets}
  */
  readonly secrets?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets[] | cdktf.IResolvable;
  /**
  * Selector describes on which nodes will run the building process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#selector DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image_registry_tls: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTlsToTerraform(struct!.baseImageRegistryTls),
    build_args: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsToTerraform, false)(struct!.buildArgs),
    dockerfile_config_map: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMapToTerraform(struct!.dockerfileConfigMap),
    kaniko_params: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParamsToTerraform(struct!.kanikoParams),
    secrets: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsToTerraform, false)(struct!.secrets),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image_registry_tls: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTlsToHclTerraform(struct!.baseImageRegistryTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls",
    },
    build_args: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsToHclTerraform, false)(struct!.buildArgs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsList",
    },
    dockerfile_config_map: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMapToHclTerraform(struct!.dockerfileConfigMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap",
    },
    kaniko_params: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParamsToHclTerraform(struct!.kanikoParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsList",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImageRegistryTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImageRegistryTls = this._baseImageRegistryTls?.internalValue;
    }
    if (this._buildArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildArgs = this._buildArgs?.internalValue;
    }
    if (this._dockerfileConfigMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfileConfigMap = this._dockerfileConfigMap?.internalValue;
    }
    if (this._kanikoParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kanikoParams = this._kanikoParams?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImageRegistryTls.internalValue = undefined;
      this._buildArgs.internalValue = undefined;
      this._dockerfileConfigMap.internalValue = undefined;
      this._kanikoParams.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImageRegistryTls.internalValue = value.baseImageRegistryTls;
      this._buildArgs.internalValue = value.buildArgs;
      this._dockerfileConfigMap.internalValue = value.dockerfileConfigMap;
      this._kanikoParams.internalValue = value.kanikoParams;
      this._secrets.internalValue = value.secrets;
      this._selector = value.selector;
    }
  }

  // base_image_registry_tls - computed: false, optional: true, required: false
  private _baseImageRegistryTls = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTlsOutputReference(this, "base_image_registry_tls");
  public get baseImageRegistryTls() {
    return this._baseImageRegistryTls;
  }
  public putBaseImageRegistryTls(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBaseImageRegistryTls) {
    this._baseImageRegistryTls.internalValue = value;
  }
  public resetBaseImageRegistryTls() {
    this._baseImageRegistryTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageRegistryTlsInput() {
    return this._baseImageRegistryTls.internalValue;
  }

  // build_args - computed: false, optional: true, required: false
  private _buildArgs = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgsList(this, "build_args", false);
  public get buildArgs() {
    return this._buildArgs;
  }
  public putBuildArgs(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildBuildArgs[] | cdktf.IResolvable) {
    this._buildArgs.internalValue = value;
  }
  public resetBuildArgs() {
    this._buildArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArgsInput() {
    return this._buildArgs.internalValue;
  }

  // dockerfile_config_map - computed: false, optional: false, required: true
  private _dockerfileConfigMap = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMapOutputReference(this, "dockerfile_config_map");
  public get dockerfileConfigMap() {
    return this._dockerfileConfigMap;
  }
  public putDockerfileConfigMap(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildDockerfileConfigMap) {
    this._dockerfileConfigMap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileConfigMapInput() {
    return this._dockerfileConfigMap.internalValue;
  }

  // kaniko_params - computed: false, optional: true, required: false
  private _kanikoParams = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParamsOutputReference(this, "kaniko_params");
  public get kanikoParams() {
    return this._kanikoParams;
  }
  public putKanikoParams(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildKanikoParams) {
    this._kanikoParams.internalValue = value;
  }
  public resetKanikoParams() {
    this._kanikoParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kanikoParamsInput() {
    return this._kanikoParams.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls {
  /**
  * If Insecure is true, the operator will be able to access a registry in an insecure (plain HTTP) protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * If InsecureSkipTLSVerify, the operator will accept any certificate provided by the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure_skip_tls_verify DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTlsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTlsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure = undefined;
      this._insecureSkipTlsVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure = value.insecure;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#value DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMapToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMapToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams {
  /**
  * Kaniko image tag to use when creating the build Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#tag DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParamsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParamsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild {
  /**
  * BaseImageRegistryTLS contains settings determining how to access registries of the base images in the build-process' Dockerfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#base_image_registry_tls DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#base_image_registry_tls}
  */
  readonly baseImageRegistryTls?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls;
  /**
  * BuildArgs is an array of build variables that are provided to the image building backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#build_args DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#build_args}
  */
  readonly buildArgs?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs[] | cdktf.IResolvable;
  /**
  * ConfigMap that holds Dockerfile contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#dockerfile_config_map DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#dockerfile_config_map}
  */
  readonly dockerfileConfigMap: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap;
  /**
  * KanikoParams is used to customize the building process of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#kaniko_params DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#kaniko_params}
  */
  readonly kanikoParams?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams;
  /**
  * Secrets is an optional list of secrets to be made available to the build system. Those secrets should be used for private resources such as a private Github repo. For container registries auth use module.spec.imagePullSecret instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#secrets DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#secrets}
  */
  readonly secrets?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets[] | cdktf.IResolvable;
  /**
  * Selector describes on which nodes will run the building process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#selector DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image_registry_tls: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTlsToTerraform(struct!.baseImageRegistryTls),
    build_args: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsToTerraform, false)(struct!.buildArgs),
    dockerfile_config_map: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMapToTerraform(struct!.dockerfileConfigMap),
    kaniko_params: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParamsToTerraform(struct!.kanikoParams),
    secrets: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsToTerraform, false)(struct!.secrets),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image_registry_tls: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTlsToHclTerraform(struct!.baseImageRegistryTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls",
    },
    build_args: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsToHclTerraform, false)(struct!.buildArgs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsList",
    },
    dockerfile_config_map: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMapToHclTerraform(struct!.dockerfileConfigMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap",
    },
    kaniko_params: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParamsToHclTerraform(struct!.kanikoParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsList",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImageRegistryTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImageRegistryTls = this._baseImageRegistryTls?.internalValue;
    }
    if (this._buildArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildArgs = this._buildArgs?.internalValue;
    }
    if (this._dockerfileConfigMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfileConfigMap = this._dockerfileConfigMap?.internalValue;
    }
    if (this._kanikoParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kanikoParams = this._kanikoParams?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImageRegistryTls.internalValue = undefined;
      this._buildArgs.internalValue = undefined;
      this._dockerfileConfigMap.internalValue = undefined;
      this._kanikoParams.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImageRegistryTls.internalValue = value.baseImageRegistryTls;
      this._buildArgs.internalValue = value.buildArgs;
      this._dockerfileConfigMap.internalValue = value.dockerfileConfigMap;
      this._kanikoParams.internalValue = value.kanikoParams;
      this._secrets.internalValue = value.secrets;
      this._selector = value.selector;
    }
  }

  // base_image_registry_tls - computed: false, optional: true, required: false
  private _baseImageRegistryTls = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTlsOutputReference(this, "base_image_registry_tls");
  public get baseImageRegistryTls() {
    return this._baseImageRegistryTls;
  }
  public putBaseImageRegistryTls(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBaseImageRegistryTls) {
    this._baseImageRegistryTls.internalValue = value;
  }
  public resetBaseImageRegistryTls() {
    this._baseImageRegistryTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageRegistryTlsInput() {
    return this._baseImageRegistryTls.internalValue;
  }

  // build_args - computed: false, optional: true, required: false
  private _buildArgs = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgsList(this, "build_args", false);
  public get buildArgs() {
    return this._buildArgs;
  }
  public putBuildArgs(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildBuildArgs[] | cdktf.IResolvable) {
    this._buildArgs.internalValue = value;
  }
  public resetBuildArgs() {
    this._buildArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArgsInput() {
    return this._buildArgs.internalValue;
  }

  // dockerfile_config_map - computed: false, optional: false, required: true
  private _dockerfileConfigMap = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMapOutputReference(this, "dockerfile_config_map");
  public get dockerfileConfigMap() {
    return this._dockerfileConfigMap;
  }
  public putDockerfileConfigMap(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildDockerfileConfigMap) {
    this._dockerfileConfigMap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileConfigMapInput() {
    return this._dockerfileConfigMap.internalValue;
  }

  // kaniko_params - computed: false, optional: true, required: false
  private _kanikoParams = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParamsOutputReference(this, "kaniko_params");
  public get kanikoParams() {
    return this._kanikoParams;
  }
  public putKanikoParams(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildKanikoParams) {
    this._kanikoParams.internalValue = value;
  }
  public resetKanikoParams() {
    this._kanikoParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kanikoParamsInput() {
    return this._kanikoParams.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls {
  /**
  * If Insecure is true, the operator will be able to access a registry in an insecure (plain HTTP) protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * If InsecureSkipTLSVerify, the operator will accept any certificate provided by the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure_skip_tls_verify DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTlsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTlsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure = undefined;
      this._insecureSkipTlsVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure = value.insecure;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecretToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecretToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls {
  /**
  * If Insecure is true, the operator will be able to access a registry in an insecure (plain HTTP) protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * If InsecureSkipTLSVerify, the operator will accept any certificate provided by the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure_skip_tls_verify DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTlsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTlsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure = undefined;
      this._insecureSkipTlsVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure = value.insecure;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign {
  /**
  * a secret containing the public key used to sign kernel modules for secureboot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#cert_secret DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#cert_secret}
  */
  readonly certSecret: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret;
  /**
  * paths inside the image for the kernel modules to sign (if ommited all kmods are signed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#files_to_sign DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#files_to_sign}
  */
  readonly filesToSign?: string[];
  /**
  * a secret containing the private key used to sign kernel modules for secureboot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key_secret DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key_secret}
  */
  readonly keySecret: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret;
  /**
  * Image to sign, ignored if a Build is present, required otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#unsigned_image DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#unsigned_image}
  */
  readonly unsignedImage?: string;
  /**
  * UnsignedImageRegistryTLS contains settings determining how to access registries of the unsigned image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#unsigned_image_registry_tls DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#unsigned_image_registry_tls}
  */
  readonly unsignedImageRegistryTls?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecretToTerraform(struct!.certSecret),
    files_to_sign: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filesToSign),
    key_secret: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecretToTerraform(struct!.keySecret),
    unsigned_image: cdktf.stringToTerraform(struct!.unsignedImage),
    unsigned_image_registry_tls: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTlsToTerraform(struct!.unsignedImageRegistryTls),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecretToHclTerraform(struct!.certSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret",
    },
    files_to_sign: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filesToSign),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_secret: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret",
    },
    unsigned_image: {
      value: cdktf.stringToHclTerraform(struct!.unsignedImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsigned_image_registry_tls: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTlsToHclTerraform(struct!.unsignedImageRegistryTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecret = this._certSecret?.internalValue;
    }
    if (this._filesToSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesToSign = this._filesToSign;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._unsignedImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsignedImage = this._unsignedImage;
    }
    if (this._unsignedImageRegistryTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsignedImageRegistryTls = this._unsignedImageRegistryTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecret.internalValue = undefined;
      this._filesToSign = undefined;
      this._keySecret.internalValue = undefined;
      this._unsignedImage = undefined;
      this._unsignedImageRegistryTls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecret.internalValue = value.certSecret;
      this._filesToSign = value.filesToSign;
      this._keySecret.internalValue = value.keySecret;
      this._unsignedImage = value.unsignedImage;
      this._unsignedImageRegistryTls.internalValue = value.unsignedImageRegistryTls;
    }
  }

  // cert_secret - computed: false, optional: false, required: true
  private _certSecret = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecretOutputReference(this, "cert_secret");
  public get certSecret() {
    return this._certSecret;
  }
  public putCertSecret(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignCertSecret) {
    this._certSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretInput() {
    return this._certSecret.internalValue;
  }

  // files_to_sign - computed: false, optional: true, required: false
  private _filesToSign?: string[]; 
  public get filesToSign() {
    return this.getListAttribute('files_to_sign');
  }
  public set filesToSign(value: string[]) {
    this._filesToSign = value;
  }
  public resetFilesToSign() {
    this._filesToSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesToSignInput() {
    return this._filesToSign;
  }

  // key_secret - computed: false, optional: false, required: true
  private _keySecret = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignKeySecret) {
    this._keySecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // unsigned_image - computed: false, optional: true, required: false
  private _unsignedImage?: string; 
  public get unsignedImage() {
    return this.getStringAttribute('unsigned_image');
  }
  public set unsignedImage(value: string) {
    this._unsignedImage = value;
  }
  public resetUnsignedImage() {
    this._unsignedImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsignedImageInput() {
    return this._unsignedImage;
  }

  // unsigned_image_registry_tls - computed: false, optional: true, required: false
  private _unsignedImageRegistryTls = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTlsOutputReference(this, "unsigned_image_registry_tls");
  public get unsignedImageRegistryTls() {
    return this._unsignedImageRegistryTls;
  }
  public putUnsignedImageRegistryTls(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignUnsignedImageRegistryTls) {
    this._unsignedImageRegistryTls.internalValue = value;
  }
  public resetUnsignedImageRegistryTls() {
    this._unsignedImageRegistryTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsignedImageRegistryTlsInput() {
    return this._unsignedImageRegistryTls.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings {
  /**
  * Build enables in-cluster builds for this mapping and allows overriding the Module's build settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#build DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#build}
  */
  readonly buildAttribute?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild;
  /**
  * ContainerImage is the name of the DriverContainer image that should be used to deploy the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#container_image DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#container_image}
  */
  readonly containerImage: string;
  /**
  * Deprecated: please use InTreeModulesToRemove. InTreeModuleToRemove specifies one in-tree kernel module that should be removed (if present) before loading the kernel module from the ContainerImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#in_tree_module_to_remove DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#in_tree_module_to_remove}
  */
  readonly inTreeModuleToRemove?: string;
  /**
  * InTreeModulesToRemove specifies any number of in-tree kernel modules that should be removed (if present) before loading the kernel module from the ContainerImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#in_tree_modules_to_remove DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#in_tree_modules_to_remove}
  */
  readonly inTreeModulesToRemove?: string[];
  /**
  * Literal defines a literal target kernel version to be matched exactly against node kernels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#literal DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#literal}
  */
  readonly literal?: string;
  /**
  * Regexp is a regular expression to be match against node kernels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#regexp DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#regexp}
  */
  readonly regexp?: string;
  /**
  * RegistryTLS set the TLS configs for accessing the registry of the module-loader's image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#registry_tls DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#registry_tls}
  */
  readonly registryTls?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls;
  /**
  * Sign enables in-cluster signing for this mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#sign DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#sign}
  */
  readonly sign?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildToTerraform(struct!.buildAttribute),
    container_image: cdktf.stringToTerraform(struct!.containerImage),
    in_tree_module_to_remove: cdktf.stringToTerraform(struct!.inTreeModuleToRemove),
    in_tree_modules_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inTreeModulesToRemove),
    literal: cdktf.stringToTerraform(struct!.literal),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    registry_tls: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTlsToTerraform(struct!.registryTls),
    sign: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignToTerraform(struct!.sign),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildToHclTerraform(struct!.buildAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild",
    },
    container_image: {
      value: cdktf.stringToHclTerraform(struct!.containerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_tree_module_to_remove: {
      value: cdktf.stringToHclTerraform(struct!.inTreeModuleToRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_tree_modules_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inTreeModulesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_tls: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTlsToHclTerraform(struct!.registryTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls",
    },
    sign: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignToHclTerraform(struct!.sign),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._build?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build?.internalValue;
    }
    if (this._containerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage;
    }
    if (this._inTreeModuleToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTreeModuleToRemove = this._inTreeModuleToRemove;
    }
    if (this._inTreeModulesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTreeModulesToRemove = this._inTreeModulesToRemove;
    }
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._registryTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryTls = this._registryTls?.internalValue;
    }
    if (this._sign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sign = this._sign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._build.internalValue = undefined;
      this._containerImage = undefined;
      this._inTreeModuleToRemove = undefined;
      this._inTreeModulesToRemove = undefined;
      this._literal = undefined;
      this._regexp = undefined;
      this._registryTls.internalValue = undefined;
      this._sign.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._build.internalValue = value.buildAttribute;
      this._containerImage = value.containerImage;
      this._inTreeModuleToRemove = value.inTreeModuleToRemove;
      this._inTreeModulesToRemove = value.inTreeModulesToRemove;
      this._literal = value.literal;
      this._regexp = value.regexp;
      this._registryTls.internalValue = value.registryTls;
      this._sign.internalValue = value.sign;
    }
  }

  // build - computed: false, optional: true, required: false
  private _build = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuildOutputReference(this, "build");
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsBuild) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // container_image - computed: false, optional: false, required: true
  private _containerImage?: string; 
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }
  public set containerImage(value: string) {
    this._containerImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage;
  }

  // in_tree_module_to_remove - computed: false, optional: true, required: false
  private _inTreeModuleToRemove?: string; 
  public get inTreeModuleToRemove() {
    return this.getStringAttribute('in_tree_module_to_remove');
  }
  public set inTreeModuleToRemove(value: string) {
    this._inTreeModuleToRemove = value;
  }
  public resetInTreeModuleToRemove() {
    this._inTreeModuleToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTreeModuleToRemoveInput() {
    return this._inTreeModuleToRemove;
  }

  // in_tree_modules_to_remove - computed: false, optional: true, required: false
  private _inTreeModulesToRemove?: string[]; 
  public get inTreeModulesToRemove() {
    return this.getListAttribute('in_tree_modules_to_remove');
  }
  public set inTreeModulesToRemove(value: string[]) {
    this._inTreeModulesToRemove = value;
  }
  public resetInTreeModulesToRemove() {
    this._inTreeModulesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTreeModulesToRemoveInput() {
    return this._inTreeModulesToRemove;
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // registry_tls - computed: false, optional: true, required: false
  private _registryTls = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTlsOutputReference(this, "registry_tls");
  public get registryTls() {
    return this._registryTls;
  }
  public putRegistryTls(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsRegistryTls) {
    this._registryTls.internalValue = value;
  }
  public resetRegistryTls() {
    this._registryTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTlsInput() {
    return this._registryTls.internalValue;
  }

  // sign - computed: false, optional: true, required: false
  private _sign = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSignOutputReference(this, "sign");
  public get sign() {
    return this._sign;
  }
  public putSign(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsSign) {
    this._sign.internalValue = value;
  }
  public resetSign() {
    this._sign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign.internalValue;
  }
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsOutputReference {
    return new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs {
  /**
  * Load is an optional list of arguments to be used when loading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#load DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#load}
  */
  readonly load?: string[];
  /**
  * Unload is an optional list of arguments to be used when unloading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#unload DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#unload}
  */
  readonly unload?: string[];
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.load),
    unload: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unload),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.load),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unload: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unload),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._unload !== undefined) {
      hasAnyValues = true;
      internalValueResult.unload = this._unload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._load = undefined;
      this._unload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._load = value.load;
      this._unload = value.unload;
    }
  }

  // load - computed: false, optional: true, required: false
  private _load?: string[]; 
  public get load() {
    return this.getListAttribute('load');
  }
  public set load(value: string[]) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // unload - computed: false, optional: true, required: false
  private _unload?: string[]; 
  public get unload() {
    return this.getListAttribute('unload');
  }
  public set unload(value: string[]) {
    this._unload = value;
  }
  public resetUnload() {
    this._unload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unloadInput() {
    return this._unload;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs {
  /**
  * Load is an optional list of arguments to be used when loading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#load DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#load}
  */
  readonly load?: string[];
  /**
  * Unload is an optional list of arguments to be used when unloading the kernel module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#unload DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#unload}
  */
  readonly unload?: string[];
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.load),
    unload: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unload),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.load),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unload: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unload),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._unload !== undefined) {
      hasAnyValues = true;
      internalValueResult.unload = this._unload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._load = undefined;
      this._unload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._load = value.load;
      this._unload = value.unload;
    }
  }

  // load - computed: false, optional: true, required: false
  private _load?: string[]; 
  public get load() {
    return this.getListAttribute('load');
  }
  public set load(value: string[]) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // unload - computed: false, optional: true, required: false
  private _unload?: string[]; 
  public get unload() {
    return this.getListAttribute('unload');
  }
  public set unload(value: string[]) {
    this._unload = value;
  }
  public resetUnload() {
    this._unload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unloadInput() {
    return this._unload;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe {
  /**
  * Args is an optional list of arguments to be passed to modprobe before the name of the kernel module. The resulting commands will be: 'modprobe ${Args} module_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#args DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#args}
  */
  readonly args?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs;
  /**
  * DirName is the root directory for modules. It adds '-d ${DirName}' to the modprobe command-line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#dir_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#dir_name}
  */
  readonly dirName?: string;
  /**
  * FirmwarePath is the path of the firmware(s). The firmware(s) will be copied to the host for the kernel to find them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#firmware_path DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#firmware_path}
  */
  readonly firmwarePath?: string;
  /**
  * ModuleName is the name of the Module to be loaded. This field can only be unset if rawArgs is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#module_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#module_name}
  */
  readonly moduleName?: string;
  /**
  * ModulesLoadingOrder defines the dependency between kernel modules loading, in case it was not created by depmod (independent kernel modules). The list order should be: upmost module, then the module it depends on and so on. Example: if moduleA depends on first loading moduleB, and moduleB depends on first loading moduleC the entry should look: ModulesLoadingOrder: - moduleA - moduleB - moduleC In order to load all 3 modules, moduleA shoud be defined in the ModuleName parameter of this struct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#modules_loading_order DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#modules_loading_order}
  */
  readonly modulesLoadingOrder?: string[];
  /**
  * Parameters is an optional list of kernel module parameters to be provided to modprobe. They should be in the form of key=value and will be separated by spaces in the modprobe command. The resulting loading command will be: 'modprobe module_name ${Parameters}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#parameters DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#parameters}
  */
  readonly parameters?: string[];
  /**
  * If RawArgs are specified, they are passed straight to the modprobe binary; all other properties in this object are ignored. The resulting commands will be: 'modprobe ${RawArgs}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#raw_args DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#raw_args}
  */
  readonly rawArgs?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgsToTerraform(struct!.args),
    dir_name: cdktf.stringToTerraform(struct!.dirName),
    firmware_path: cdktf.stringToTerraform(struct!.firmwarePath),
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    modules_loading_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modulesLoadingOrder),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    raw_args: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgsToTerraform(struct!.rawArgs),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgsToHclTerraform(struct!.args),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs",
    },
    dir_name: {
      value: cdktf.stringToHclTerraform(struct!.dirName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware_path: {
      value: cdktf.stringToHclTerraform(struct!.firmwarePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modules_loading_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modulesLoadingOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    raw_args: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgsToHclTerraform(struct!.rawArgs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._dirName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirName = this._dirName;
    }
    if (this._firmwarePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwarePath = this._firmwarePath;
    }
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._modulesLoadingOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulesLoadingOrder = this._modulesLoadingOrder;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._rawArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawArgs = this._rawArgs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args.internalValue = undefined;
      this._dirName = undefined;
      this._firmwarePath = undefined;
      this._moduleName = undefined;
      this._modulesLoadingOrder = undefined;
      this._parameters = undefined;
      this._rawArgs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args.internalValue = value.args;
      this._dirName = value.dirName;
      this._firmwarePath = value.firmwarePath;
      this._moduleName = value.moduleName;
      this._modulesLoadingOrder = value.modulesLoadingOrder;
      this._parameters = value.parameters;
      this._rawArgs.internalValue = value.rawArgs;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgsOutputReference(this, "args");
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeArgs) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // dir_name - computed: false, optional: true, required: false
  private _dirName?: string; 
  public get dirName() {
    return this.getStringAttribute('dir_name');
  }
  public set dirName(value: string) {
    this._dirName = value;
  }
  public resetDirName() {
    this._dirName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirNameInput() {
    return this._dirName;
  }

  // firmware_path - computed: false, optional: true, required: false
  private _firmwarePath?: string; 
  public get firmwarePath() {
    return this.getStringAttribute('firmware_path');
  }
  public set firmwarePath(value: string) {
    this._firmwarePath = value;
  }
  public resetFirmwarePath() {
    this._firmwarePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwarePathInput() {
    return this._firmwarePath;
  }

  // module_name - computed: false, optional: true, required: false
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // modules_loading_order - computed: false, optional: true, required: false
  private _modulesLoadingOrder?: string[]; 
  public get modulesLoadingOrder() {
    return this.getListAttribute('modules_loading_order');
  }
  public set modulesLoadingOrder(value: string[]) {
    this._modulesLoadingOrder = value;
  }
  public resetModulesLoadingOrder() {
    this._modulesLoadingOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesLoadingOrderInput() {
    return this._modulesLoadingOrder;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // raw_args - computed: false, optional: true, required: false
  private _rawArgs = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgsOutputReference(this, "raw_args");
  public get rawArgs() {
    return this._rawArgs;
  }
  public putRawArgs(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeRawArgs) {
    this._rawArgs.internalValue = value;
  }
  public resetRawArgs() {
    this._rawArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawArgsInput() {
    return this._rawArgs.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls {
  /**
  * If Insecure is true, the operator will be able to access a registry in an insecure (plain HTTP) protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * If InsecureSkipTLSVerify, the operator will accept any certificate provided by the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure_skip_tls_verify DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTlsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTlsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure = undefined;
      this._insecureSkipTlsVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure = value.insecure;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecretToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecretToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecretToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret | cdktf.IResolvable): any {
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls {
  /**
  * If Insecure is true, the operator will be able to access a registry in an insecure (plain HTTP) protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * If InsecureSkipTLSVerify, the operator will accept any certificate provided by the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#insecure_skip_tls_verify DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTlsToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTlsToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure = undefined;
      this._insecureSkipTlsVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure = value.insecure;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign {
  /**
  * a secret containing the public key used to sign kernel modules for secureboot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#cert_secret DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#cert_secret}
  */
  readonly certSecret: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret;
  /**
  * paths inside the image for the kernel modules to sign (if ommited all kmods are signed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#files_to_sign DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#files_to_sign}
  */
  readonly filesToSign?: string[];
  /**
  * a secret containing the private key used to sign kernel modules for secureboot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#key_secret DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#key_secret}
  */
  readonly keySecret: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret;
  /**
  * Image to sign, ignored if a Build is present, required otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#unsigned_image DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#unsigned_image}
  */
  readonly unsignedImage?: string;
  /**
  * UnsignedImageRegistryTLS contains settings determining how to access registries of the unsigned image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#unsigned_image_registry_tls DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#unsigned_image_registry_tls}
  */
  readonly unsignedImageRegistryTls?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecretToTerraform(struct!.certSecret),
    files_to_sign: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filesToSign),
    key_secret: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecretToTerraform(struct!.keySecret),
    unsigned_image: cdktf.stringToTerraform(struct!.unsignedImage),
    unsigned_image_registry_tls: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTlsToTerraform(struct!.unsignedImageRegistryTls),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecretToHclTerraform(struct!.certSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret",
    },
    files_to_sign: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filesToSign),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_secret: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret",
    },
    unsigned_image: {
      value: cdktf.stringToHclTerraform(struct!.unsignedImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsigned_image_registry_tls: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTlsToHclTerraform(struct!.unsignedImageRegistryTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecret = this._certSecret?.internalValue;
    }
    if (this._filesToSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesToSign = this._filesToSign;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._unsignedImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsignedImage = this._unsignedImage;
    }
    if (this._unsignedImageRegistryTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsignedImageRegistryTls = this._unsignedImageRegistryTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecret.internalValue = undefined;
      this._filesToSign = undefined;
      this._keySecret.internalValue = undefined;
      this._unsignedImage = undefined;
      this._unsignedImageRegistryTls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecret.internalValue = value.certSecret;
      this._filesToSign = value.filesToSign;
      this._keySecret.internalValue = value.keySecret;
      this._unsignedImage = value.unsignedImage;
      this._unsignedImageRegistryTls.internalValue = value.unsignedImageRegistryTls;
    }
  }

  // cert_secret - computed: false, optional: false, required: true
  private _certSecret = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecretOutputReference(this, "cert_secret");
  public get certSecret() {
    return this._certSecret;
  }
  public putCertSecret(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignCertSecret) {
    this._certSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretInput() {
    return this._certSecret.internalValue;
  }

  // files_to_sign - computed: false, optional: true, required: false
  private _filesToSign?: string[]; 
  public get filesToSign() {
    return this.getListAttribute('files_to_sign');
  }
  public set filesToSign(value: string[]) {
    this._filesToSign = value;
  }
  public resetFilesToSign() {
    this._filesToSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesToSignInput() {
    return this._filesToSign;
  }

  // key_secret - computed: false, optional: false, required: true
  private _keySecret = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignKeySecret) {
    this._keySecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // unsigned_image - computed: false, optional: true, required: false
  private _unsignedImage?: string; 
  public get unsignedImage() {
    return this.getStringAttribute('unsigned_image');
  }
  public set unsignedImage(value: string) {
    this._unsignedImage = value;
  }
  public resetUnsignedImage() {
    this._unsignedImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsignedImageInput() {
    return this._unsignedImage;
  }

  // unsigned_image_registry_tls - computed: false, optional: true, required: false
  private _unsignedImageRegistryTls = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTlsOutputReference(this, "unsigned_image_registry_tls");
  public get unsignedImageRegistryTls() {
    return this._unsignedImageRegistryTls;
  }
  public putUnsignedImageRegistryTls(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignUnsignedImageRegistryTls) {
    this._unsignedImageRegistryTls.internalValue = value;
  }
  public resetUnsignedImageRegistryTls() {
    this._unsignedImageRegistryTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsignedImageRegistryTlsInput() {
    return this._unsignedImageRegistryTls.internalValue;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer {
  /**
  * Build contains build instructions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#build DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#build}
  */
  readonly buildAttribute?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild;
  /**
  * ContainerImage is a top-level field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#container_image DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#container_image}
  */
  readonly containerImage?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#image_pull_policy DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Deprecated: please use InTreeModulesToRemove. InTreeModuleToRemove specifies one in-tree kernel module that should be removed (if present) before loading the kernel module from the ContainerImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#in_tree_module_to_remove DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#in_tree_module_to_remove}
  */
  readonly inTreeModuleToRemove?: string;
  /**
  * InTreeModulesToRemove specifies any number of in-tree kernel modules that should be removed (if present) before loading the kernel module from the ContainerImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#in_tree_modules_to_remove DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#in_tree_modules_to_remove}
  */
  readonly inTreeModulesToRemove?: string[];
  /**
  * KernelMappings is a list of kernel mappings. When a node's labels match Selector, then the KMM Operator will look for the first mapping that matches its kernel version, and use the corresponding container image to run the DriverContainer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#kernel_mappings DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#kernel_mappings}
  */
  readonly kernelMappings: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings[] | cdktf.IResolvable;
  /**
  * Modprobe is a set of properties to customize which module modprobe loads and with which properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#modprobe DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#modprobe}
  */
  readonly modprobe: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe;
  /**
  * RegistryTLS set the TLS configs for accessing the registry of the module-loader's image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#registry_tls DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#registry_tls}
  */
  readonly registryTls?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls;
  /**
  * Sign provides default kmod signing settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#sign DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#sign}
  */
  readonly sign?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign;
  /**
  * Version defines the current version of the kernel module being used Used for upgrading the currently loaded kernel module to a new version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#version DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildToTerraform(struct!.buildAttribute),
    container_image: cdktf.stringToTerraform(struct!.containerImage),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    in_tree_module_to_remove: cdktf.stringToTerraform(struct!.inTreeModuleToRemove),
    in_tree_modules_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inTreeModulesToRemove),
    kernel_mappings: cdktf.listMapper(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsToTerraform, false)(struct!.kernelMappings),
    modprobe: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeToTerraform(struct!.modprobe),
    registry_tls: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTlsToTerraform(struct!.registryTls),
    sign: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignToTerraform(struct!.sign),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildToHclTerraform(struct!.buildAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild",
    },
    container_image: {
      value: cdktf.stringToHclTerraform(struct!.containerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_tree_module_to_remove: {
      value: cdktf.stringToHclTerraform(struct!.inTreeModuleToRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_tree_modules_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inTreeModulesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kernel_mappings: {
      value: cdktf.listMapperHcl(dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsToHclTerraform, false)(struct!.kernelMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsList",
    },
    modprobe: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeToHclTerraform(struct!.modprobe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe",
    },
    registry_tls: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTlsToHclTerraform(struct!.registryTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls",
    },
    sign: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignToHclTerraform(struct!.sign),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign",
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

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._build?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build?.internalValue;
    }
    if (this._containerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._inTreeModuleToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTreeModuleToRemove = this._inTreeModuleToRemove;
    }
    if (this._inTreeModulesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTreeModulesToRemove = this._inTreeModulesToRemove;
    }
    if (this._kernelMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelMappings = this._kernelMappings?.internalValue;
    }
    if (this._modprobe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modprobe = this._modprobe?.internalValue;
    }
    if (this._registryTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryTls = this._registryTls?.internalValue;
    }
    if (this._sign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sign = this._sign?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._build.internalValue = undefined;
      this._containerImage = undefined;
      this._imagePullPolicy = undefined;
      this._inTreeModuleToRemove = undefined;
      this._inTreeModulesToRemove = undefined;
      this._kernelMappings.internalValue = undefined;
      this._modprobe.internalValue = undefined;
      this._registryTls.internalValue = undefined;
      this._sign.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._build.internalValue = value.buildAttribute;
      this._containerImage = value.containerImage;
      this._imagePullPolicy = value.imagePullPolicy;
      this._inTreeModuleToRemove = value.inTreeModuleToRemove;
      this._inTreeModulesToRemove = value.inTreeModulesToRemove;
      this._kernelMappings.internalValue = value.kernelMappings;
      this._modprobe.internalValue = value.modprobe;
      this._registryTls.internalValue = value.registryTls;
      this._sign.internalValue = value.sign;
      this._version = value.version;
    }
  }

  // build - computed: false, optional: true, required: false
  private _build = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuildOutputReference(this, "build");
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerBuild) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: string; 
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }
  public set containerImage(value: string) {
    this._containerImage = value;
  }
  public resetContainerImage() {
    this._containerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // in_tree_module_to_remove - computed: false, optional: true, required: false
  private _inTreeModuleToRemove?: string; 
  public get inTreeModuleToRemove() {
    return this.getStringAttribute('in_tree_module_to_remove');
  }
  public set inTreeModuleToRemove(value: string) {
    this._inTreeModuleToRemove = value;
  }
  public resetInTreeModuleToRemove() {
    this._inTreeModuleToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTreeModuleToRemoveInput() {
    return this._inTreeModuleToRemove;
  }

  // in_tree_modules_to_remove - computed: false, optional: true, required: false
  private _inTreeModulesToRemove?: string[]; 
  public get inTreeModulesToRemove() {
    return this.getListAttribute('in_tree_modules_to_remove');
  }
  public set inTreeModulesToRemove(value: string[]) {
    this._inTreeModulesToRemove = value;
  }
  public resetInTreeModulesToRemove() {
    this._inTreeModulesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTreeModulesToRemoveInput() {
    return this._inTreeModulesToRemove;
  }

  // kernel_mappings - computed: false, optional: false, required: true
  private _kernelMappings = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappingsList(this, "kernel_mappings", false);
  public get kernelMappings() {
    return this._kernelMappings;
  }
  public putKernelMappings(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerKernelMappings[] | cdktf.IResolvable) {
    this._kernelMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelMappingsInput() {
    return this._kernelMappings.internalValue;
  }

  // modprobe - computed: false, optional: false, required: true
  private _modprobe = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobeOutputReference(this, "modprobe");
  public get modprobe() {
    return this._modprobe;
  }
  public putModprobe(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerModprobe) {
    this._modprobe.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modprobeInput() {
    return this._modprobe.internalValue;
  }

  // registry_tls - computed: false, optional: true, required: false
  private _registryTls = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTlsOutputReference(this, "registry_tls");
  public get registryTls() {
    return this._registryTls;
  }
  public putRegistryTls(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerRegistryTls) {
    this._registryTls.internalValue = value;
  }
  public resetRegistryTls() {
    this._registryTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTlsInput() {
    return this._registryTls.internalValue;
  }

  // sign - computed: false, optional: true, required: false
  private _sign = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSignOutputReference(this, "sign");
  public get sign() {
    return this._sign;
  }
  public putSign(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerSign) {
    this._sign.internalValue = value;
  }
  public resetSign() {
    this._sign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign.internalValue;
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
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader {
  /**
  * Container holds the properties for the module loader container that runs modprobe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#container DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#container}
  */
  readonly container: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#service_account_name DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerToTerraform(struct!.container),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderContainer) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}
export interface DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec {
  /**
  * DevicePlugin allows overriding some properties of the container that deploys the device plugin on the node. Name is ignored and is set automatically by the KMM Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#device_plugin DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#device_plugin}
  */
  readonly devicePlugin?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin;
  /**
  * ImageRepoSecret is an optional secret that is used to pull both the module loader and the device plugin, and to push the resulting image from the module loader build, if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#image_repo_secret DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#image_repo_secret}
  */
  readonly imageRepoSecret?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret;
  /**
  * ModuleLoader allows overriding some properties of the container that loads the kernel module on the node. Name and image are ignored and are set automatically by the KMM Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#module_loader DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#module_loader}
  */
  readonly moduleLoader: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader;
  /**
  * Selector describes on which nodes the Module should be loaded and optionally built.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#selector DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest#selector}
  */
  readonly selector: { [key: string]: string };
}

export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecToTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_plugin: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginToTerraform(struct!.devicePlugin),
    image_repo_secret: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecretToTerraform(struct!.imageRepoSecret),
    module_loader: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderToTerraform(struct!.moduleLoader),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
  }
}


export function dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_plugin: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginToHclTerraform(struct!.devicePlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin",
    },
    image_repo_secret: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecretToHclTerraform(struct!.imageRepoSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret",
    },
    module_loader: {
      value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderToHclTerraform(struct!.moduleLoader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devicePlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePlugin = this._devicePlugin?.internalValue;
    }
    if (this._imageRepoSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepoSecret = this._imageRepoSecret?.internalValue;
    }
    if (this._moduleLoader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleLoader = this._moduleLoader?.internalValue;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devicePlugin.internalValue = undefined;
      this._imageRepoSecret.internalValue = undefined;
      this._moduleLoader.internalValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devicePlugin.internalValue = value.devicePlugin;
      this._imageRepoSecret.internalValue = value.imageRepoSecret;
      this._moduleLoader.internalValue = value.moduleLoader;
      this._selector = value.selector;
    }
  }

  // device_plugin - computed: false, optional: true, required: false
  private _devicePlugin = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePluginOutputReference(this, "device_plugin");
  public get devicePlugin() {
    return this._devicePlugin;
  }
  public putDevicePlugin(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecDevicePlugin) {
    this._devicePlugin.internalValue = value;
  }
  public resetDevicePlugin() {
    this._devicePlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePluginInput() {
    return this._devicePlugin.internalValue;
  }

  // image_repo_secret - computed: false, optional: true, required: false
  private _imageRepoSecret = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecretOutputReference(this, "image_repo_secret");
  public get imageRepoSecret() {
    return this._imageRepoSecret;
  }
  public putImageRepoSecret(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecImageRepoSecret) {
    this._imageRepoSecret.internalValue = value;
  }
  public resetImageRepoSecret() {
    this._imageRepoSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepoSecretInput() {
    return this._imageRepoSecret.internalValue;
  }

  // module_loader - computed: false, optional: false, required: true
  private _moduleLoader = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoaderOutputReference(this, "module_loader");
  public get moduleLoader() {
    return this._moduleLoader;
  }
  public putModuleLoader(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecModuleLoader) {
    this._moduleLoader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleLoaderInput() {
    return this._moduleLoader.internalValue;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest k8s_kmm_sigs_x_k8s_io_module_v1beta1_manifest}
*/
export class DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kmm_sigs_x_k8s_io_module_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKmmSigsXK8SIoModuleV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kmm_sigs_x_k8s_io_module_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kmm_sigs_x_k8s_io_module_v1beta1_manifest k8s_kmm_sigs_x_k8s_io_module_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kmm_sigs_x_k8s_io_module_v1beta1_manifest',
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
  private _metadata = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec) {
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
      metadata: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmmSigsXK8SIoModuleV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
