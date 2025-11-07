// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata;
  /**
  * BackupPolicySpec defines the desired state of BackupPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#spec DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#optional DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#api_version DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#field_path DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#divisor DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#resource DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#optional DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#config_map_key_ref DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#field_ref DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#resource_field_ref DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#secret_key_ref DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromSecretKeyRef) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#value DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#value_from DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv | cdktf.IResolvable): any {
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
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvValueFrom) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#claims DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#limits DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#requests DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings {
  /**
  * Specifies the resource required by container. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential {
  /**
  * Specifies the map key of the host in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#host_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Specifies the map key of the password in the connection credential secret. This password will be saved in the backup annotation for full backup. You can use the environment variable DP_ENCRYPTION_KEY to specify encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#password_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Specifies the map key of the port in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * Refers to the Secret object that contains the connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#secret_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Specifies the map key of the user in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#username_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredentialToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port_key: cdktf.stringToTerraform(struct!.portKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredentialToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_key: {
      value: cdktf.stringToHclTerraform(struct!.portKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._portKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKey = this._portKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostKey = undefined;
      this._passwordKey = undefined;
      this._portKey = undefined;
      this._secretName = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostKey = value.hostKey;
      this._passwordKey = value.passwordKey;
      this._portKey = value.portKey;
      this._secretName = value.secretName;
      this._usernameKey = value.usernameKey;
    }
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port_key - computed: false, optional: true, required: false
  private _portKey?: string; 
  public get portKey() {
    return this.getStringAttribute('port_key');
  }
  public set portKey(value: string) {
    this._portKey = value;
  }
  public resetPortKey() {
    this._portKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKeyInput() {
    return this._portKey;
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

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort {
  /**
  * Specifies the name of container with the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPortToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPortToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort | cdktf.IResolvable): any {
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._portName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._portName = value.portName;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector {
  /**
  * fallbackLabelSelector is used to filter available pods when the labelSelector fails. This only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#fallback_label_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#fallback_label_selector}
  */
  readonly fallbackLabelSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Specifies the strategy to select the target pod when multiple pods are selected. Valid values are: - 'Any': select any one pod that match the labelsSelector. - 'All': select all pods that match the labelsSelector. The backup data for the current pod will be stored in a subdirectory named after the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#strategy DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_label_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorToTerraform(struct!.fallbackLabelSelector),
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_label_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct!.fallbackLabelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackLabelSelector = this._fallbackLabelSelector?.internalValue;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = value.fallbackLabelSelector;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
      this._strategy = value.strategy;
    }
  }

  // fallback_label_selector - computed: false, optional: true, required: false
  private _fallbackLabelSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelectorOutputReference(this, "fallback_label_selector");
  public get fallbackLabelSelector() {
    return this._fallbackLabelSelector;
  }
  public putFallbackLabelSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorFallbackLabelSelector) {
    this._fallbackLabelSelector.internalValue = value;
  }
  public resetFallbackLabelSelector() {
    this._fallbackLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackLabelSelectorInput() {
    return this._fallbackLabelSelector.internalValue;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources {
  /**
  * excluded is a slice of namespaced-scoped resource type names to exclude in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#excluded DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#excluded}
  */
  readonly excluded?: string[];
  /**
  * included is a slice of namespaced-scoped resource type names to include in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#included DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#included}
  */
  readonly included?: string[];
  /**
  * A metav1.LabelSelector to filter the target kubernetes resources that need to be backed up. If not set, will do not back up any kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excluded),
    included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.included),
    selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excluded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.included),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._included !== undefined) {
      hasAnyValues = true;
      internalValueResult.included = this._included;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._included = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._included = value.included;
      this._selector.internalValue = value.selector;
    }
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string[]; 
  public get excluded() {
    return this.getListAttribute('excluded');
  }
  public set excluded(value: string[]) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // included - computed: false, optional: true, required: false
  private _included?: string[]; 
  public get included() {
    return this.getListAttribute('included');
  }
  public set included(value: string[]) {
    this._included = value;
  }
  public resetIncluded() {
    this._included = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInput() {
    return this._included;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget {
  /**
  * Specifies the connection credential to connect to the target database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#connection_credential DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential;
  /**
  * Specifies the container port in the target pod. If not specified, the first container and its first port will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_port DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_port}
  */
  readonly containerPort?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort;
  /**
  * Specifies a mandatory and unique identifier for each target when using the 'targets' field. The backup data for the current target is stored in a uniquely named subdirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Used to find the target pod. The volumes of the target pod will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#pod_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector;
  /**
  * Specifies the kubernetes resources to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources;
  /**
  * Specifies the service account to run the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#service_account_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credential: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredentialToTerraform(struct!.connectionCredential),
    container_port: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPortToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    pod_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorToTerraform(struct!.podSelector),
    resources: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesToTerraform(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credential: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredentialToHclTerraform(struct!.connectionCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential",
    },
    container_port: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPortToHclTerraform(struct!.containerPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector",
    },
    resources: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredential = this._connectionCredential?.internalValue;
    }
    if (this._containerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = undefined;
      this._containerPort.internalValue = undefined;
      this._name = undefined;
      this._podSelector.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = value.connectionCredential;
      this._containerPort.internalValue = value.containerPort;
      this._name = value.name;
      this._podSelector.internalValue = value.podSelector;
      this._resources.internalValue = value.resources;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // connection_credential - computed: false, optional: true, required: false
  private _connectionCredential = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredentialOutputReference(this, "connection_credential");
  public get connectionCredential() {
    return this._connectionCredential;
  }
  public putConnectionCredential(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetConnectionCredential) {
    this._connectionCredential.internalValue = value;
  }
  public resetConnectionCredential() {
    this._connectionCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialInput() {
    return this._connectionCredential.internalValue;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPortOutputReference(this, "container_port");
  public get containerPort() {
    return this._containerPort;
  }
  public putContainerPort(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetContainerPort) {
    this._containerPort.internalValue = value;
  }
  public resetContainerPort() {
    this._containerPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort.internalValue;
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

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#mount_path DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#mount_propagation DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#read_only DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#sub_path DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#sub_path_expr DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes {
  /**
  * Specifies the mount for the volumes specified in 'volumes' section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#volume_mounts DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts[] | cdktf.IResolvable;
  /**
  * Specifies the list of volumes of targeted application that should be mounted on the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#volumes DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#volumes}
  */
  readonly volumes?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_mounts: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes = value.volumes;
    }
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential {
  /**
  * Specifies the map key of the host in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#host_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Specifies the map key of the password in the connection credential secret. This password will be saved in the backup annotation for full backup. You can use the environment variable DP_ENCRYPTION_KEY to specify encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#password_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Specifies the map key of the port in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * Refers to the Secret object that contains the connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#secret_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Specifies the map key of the user in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#username_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredentialToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port_key: cdktf.stringToTerraform(struct!.portKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredentialToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_key: {
      value: cdktf.stringToHclTerraform(struct!.portKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._portKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKey = this._portKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostKey = undefined;
      this._passwordKey = undefined;
      this._portKey = undefined;
      this._secretName = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostKey = value.hostKey;
      this._passwordKey = value.passwordKey;
      this._portKey = value.portKey;
      this._secretName = value.secretName;
      this._usernameKey = value.usernameKey;
    }
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port_key - computed: false, optional: true, required: false
  private _portKey?: string; 
  public get portKey() {
    return this.getStringAttribute('port_key');
  }
  public set portKey(value: string) {
    this._portKey = value;
  }
  public resetPortKey() {
    this._portKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKeyInput() {
    return this._portKey;
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

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort {
  /**
  * Specifies the name of container with the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPortToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPortToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort | cdktf.IResolvable): any {
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._portName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._portName = value.portName;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector {
  /**
  * fallbackLabelSelector is used to filter available pods when the labelSelector fails. This only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#fallback_label_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#fallback_label_selector}
  */
  readonly fallbackLabelSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Specifies the strategy to select the target pod when multiple pods are selected. Valid values are: - 'Any': select any one pod that match the labelsSelector. - 'All': select all pods that match the labelsSelector. The backup data for the current pod will be stored in a subdirectory named after the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#strategy DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_label_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorToTerraform(struct!.fallbackLabelSelector),
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_label_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorToHclTerraform(struct!.fallbackLabelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackLabelSelector = this._fallbackLabelSelector?.internalValue;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = value.fallbackLabelSelector;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
      this._strategy = value.strategy;
    }
  }

  // fallback_label_selector - computed: false, optional: true, required: false
  private _fallbackLabelSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelectorOutputReference(this, "fallback_label_selector");
  public get fallbackLabelSelector() {
    return this._fallbackLabelSelector;
  }
  public putFallbackLabelSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorFallbackLabelSelector) {
    this._fallbackLabelSelector.internalValue = value;
  }
  public resetFallbackLabelSelector() {
    this._fallbackLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackLabelSelectorInput() {
    return this._fallbackLabelSelector.internalValue;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources {
  /**
  * excluded is a slice of namespaced-scoped resource type names to exclude in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#excluded DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#excluded}
  */
  readonly excluded?: string[];
  /**
  * included is a slice of namespaced-scoped resource type names to include in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#included DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#included}
  */
  readonly included?: string[];
  /**
  * A metav1.LabelSelector to filter the target kubernetes resources that need to be backed up. If not set, will do not back up any kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excluded),
    included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.included),
    selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excluded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.included),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._included !== undefined) {
      hasAnyValues = true;
      internalValueResult.included = this._included;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._included = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._included = value.included;
      this._selector.internalValue = value.selector;
    }
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string[]; 
  public get excluded() {
    return this.getListAttribute('excluded');
  }
  public set excluded(value: string[]) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // included - computed: false, optional: true, required: false
  private _included?: string[]; 
  public get included() {
    return this.getListAttribute('included');
  }
  public set included(value: string[]) {
    this._included = value;
  }
  public resetIncluded() {
    this._included = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInput() {
    return this._included;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets {
  /**
  * Specifies the connection credential to connect to the target database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#connection_credential DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential;
  /**
  * Specifies the container port in the target pod. If not specified, the first container and its first port will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_port DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_port}
  */
  readonly containerPort?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort;
  /**
  * Specifies a mandatory and unique identifier for each target when using the 'targets' field. The backup data for the current target is stored in a uniquely named subdirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Used to find the target pod. The volumes of the target pod will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#pod_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector;
  /**
  * Specifies the kubernetes resources to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources;
  /**
  * Specifies the service account to run the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#service_account_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credential: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredentialToTerraform(struct!.connectionCredential),
    container_port: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPortToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    pod_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorToTerraform(struct!.podSelector),
    resources: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesToTerraform(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credential: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredentialToHclTerraform(struct!.connectionCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential",
    },
    container_port: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPortToHclTerraform(struct!.containerPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector",
    },
    resources: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredential = this._connectionCredential?.internalValue;
    }
    if (this._containerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = undefined;
      this._containerPort.internalValue = undefined;
      this._name = undefined;
      this._podSelector.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = value.connectionCredential;
      this._containerPort.internalValue = value.containerPort;
      this._name = value.name;
      this._podSelector.internalValue = value.podSelector;
      this._resources.internalValue = value.resources;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // connection_credential - computed: false, optional: true, required: false
  private _connectionCredential = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredentialOutputReference(this, "connection_credential");
  public get connectionCredential() {
    return this._connectionCredential;
  }
  public putConnectionCredential(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsConnectionCredential) {
    this._connectionCredential.internalValue = value;
  }
  public resetConnectionCredential() {
    this._connectionCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialInput() {
    return this._connectionCredential.internalValue;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPortOutputReference(this, "container_port");
  public get containerPort() {
    return this._containerPort;
  }
  public putContainerPort(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsContainerPort) {
    this._containerPort.internalValue = value;
  }
  public resetContainerPort() {
    this._containerPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort.internalValue;
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

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods {
  /**
  * Refers to the ActionSet object that defines the backup actions. For volume snapshot backup, the actionSet is not required, the controller will use the CSI volume snapshotter to create the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#action_set_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#action_set_name}
  */
  readonly actionSetName?: string;
  /**
  * Specifies the environment variables for the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#env DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv[] | cdktf.IResolvable;
  /**
  * The name of backup method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies runtime settings for the backup workload container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#runtime_settings DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#runtime_settings}
  */
  readonly runtimeSettings?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings;
  /**
  * Specifies whether to take snapshots of persistent volumes. If true, the ActionSetName is not required, the controller will use the CSI volume snapshotter to create the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#snapshot_volumes DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#snapshot_volumes}
  */
  readonly snapshotVolumes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the target information to back up, it will override the target in backup policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#target DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget;
  /**
  * Specifies which volumes from the target should be mounted in the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#target_volumes DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#target_volumes}
  */
  readonly targetVolumes?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes;
  /**
  * Specifies multiple target information for backup operations. This includes details such as the target pod and cluster connection credentials. All specified targets will be backed up collectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#targets DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#targets}
  */
  readonly targets?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_set_name: cdktf.stringToTerraform(struct!.actionSetName),
    env: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    runtime_settings: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsToTerraform(struct!.runtimeSettings),
    snapshot_volumes: cdktf.booleanToTerraform(struct!.snapshotVolumes),
    target: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetToTerraform(struct!.target),
    target_volumes: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesToTerraform(struct!.targetVolumes),
    targets: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsToTerraform, false)(struct!.targets),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_set_name: {
      value: cdktf.stringToHclTerraform(struct!.actionSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_settings: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsToHclTerraform(struct!.runtimeSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings",
    },
    snapshot_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget",
    },
    target_volumes: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesToHclTerraform(struct!.targetVolumes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes",
    },
    targets: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSetName = this._actionSetName;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtimeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeSettings = this._runtimeSettings?.internalValue;
    }
    if (this._snapshotVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotVolumes = this._snapshotVolumes;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._targetVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVolumes = this._targetVolumes?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionSetName = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._runtimeSettings.internalValue = undefined;
      this._snapshotVolumes = undefined;
      this._target.internalValue = undefined;
      this._targetVolumes.internalValue = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionSetName = value.actionSetName;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._runtimeSettings.internalValue = value.runtimeSettings;
      this._snapshotVolumes = value.snapshotVolumes;
      this._target.internalValue = value.target;
      this._targetVolumes.internalValue = value.targetVolumes;
      this._targets.internalValue = value.targets;
    }
  }

  // action_set_name - computed: false, optional: true, required: false
  private _actionSetName?: string; 
  public get actionSetName() {
    return this.getStringAttribute('action_set_name');
  }
  public set actionSetName(value: string) {
    this._actionSetName = value;
  }
  public resetActionSetName() {
    this._actionSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSetNameInput() {
    return this._actionSetName;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // runtime_settings - computed: false, optional: true, required: false
  private _runtimeSettings = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettingsOutputReference(this, "runtime_settings");
  public get runtimeSettings() {
    return this._runtimeSettings;
  }
  public putRuntimeSettings(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsRuntimeSettings) {
    this._runtimeSettings.internalValue = value;
  }
  public resetRuntimeSettings() {
    this._runtimeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeSettingsInput() {
    return this._runtimeSettings.internalValue;
  }

  // snapshot_volumes - computed: false, optional: true, required: false
  private _snapshotVolumes?: boolean | cdktf.IResolvable; 
  public get snapshotVolumes() {
    return this.getBooleanAttribute('snapshot_volumes');
  }
  public set snapshotVolumes(value: boolean | cdktf.IResolvable) {
    this._snapshotVolumes = value;
  }
  public resetSnapshotVolumes() {
    this._snapshotVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotVolumesInput() {
    return this._snapshotVolumes;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // target_volumes - computed: false, optional: true, required: false
  private _targetVolumes = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumesOutputReference(this, "target_volumes");
  public get targetVolumes() {
    return this._targetVolumes;
  }
  public putTargetVolumes(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetVolumes) {
    this._targetVolumes.internalValue = value;
  }
  public resetTargetVolumes() {
    this._targetVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVolumesInput() {
    return this._targetVolumes.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#optional DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig {
  /**
  * Specifies the encryption algorithm. Currently supported algorithms are: - AES-128-CFB - AES-192-CFB - AES-256-CFB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#algorithm DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#algorithm}
  */
  readonly algorithm: string;
  /**
  * Selects the key of a secret in the current namespace, the value of the secret is used as the encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#pass_phrase_secret_key_ref DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#pass_phrase_secret_key_ref}
  */
  readonly passPhraseSecretKeyRef: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    pass_phrase_secret_key_ref: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRefToTerraform(struct!.passPhraseSecretKeyRef),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_phrase_secret_key_ref: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRefToHclTerraform(struct!.passPhraseSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._passPhraseSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passPhraseSecretKeyRef = this._passPhraseSecretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._passPhraseSecretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._passPhraseSecretKeyRef.internalValue = value.passPhraseSecretKeyRef;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // pass_phrase_secret_key_ref - computed: false, optional: false, required: true
  private _passPhraseSecretKeyRef = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRefOutputReference(this, "pass_phrase_secret_key_ref");
  public get passPhraseSecretKeyRef() {
    return this._passPhraseSecretKeyRef;
  }
  public putPassPhraseSecretKeyRef(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigPassPhraseSecretKeyRef) {
    this._passPhraseSecretKeyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passPhraseSecretKeyRefInput() {
    return this._passPhraseSecretKeyRef.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential {
  /**
  * Specifies the map key of the host in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#host_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Specifies the map key of the password in the connection credential secret. This password will be saved in the backup annotation for full backup. You can use the environment variable DP_ENCRYPTION_KEY to specify encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#password_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Specifies the map key of the port in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * Refers to the Secret object that contains the connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#secret_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Specifies the map key of the user in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#username_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredentialToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port_key: cdktf.stringToTerraform(struct!.portKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredentialToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_key: {
      value: cdktf.stringToHclTerraform(struct!.portKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._portKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKey = this._portKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostKey = undefined;
      this._passwordKey = undefined;
      this._portKey = undefined;
      this._secretName = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostKey = value.hostKey;
      this._passwordKey = value.passwordKey;
      this._portKey = value.portKey;
      this._secretName = value.secretName;
      this._usernameKey = value.usernameKey;
    }
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port_key - computed: false, optional: true, required: false
  private _portKey?: string; 
  public get portKey() {
    return this.getStringAttribute('port_key');
  }
  public set portKey(value: string) {
    this._portKey = value;
  }
  public resetPortKey() {
    this._portKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKeyInput() {
    return this._portKey;
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

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort {
  /**
  * Specifies the name of container with the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPortToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPortToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort | cdktf.IResolvable): any {
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._portName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._portName = value.portName;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector {
  /**
  * fallbackLabelSelector is used to filter available pods when the labelSelector fails. This only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#fallback_label_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#fallback_label_selector}
  */
  readonly fallbackLabelSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Specifies the strategy to select the target pod when multiple pods are selected. Valid values are: - 'Any': select any one pod that match the labelsSelector. - 'All': select all pods that match the labelsSelector. The backup data for the current pod will be stored in a subdirectory named after the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#strategy DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_label_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorToTerraform(struct!.fallbackLabelSelector),
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_label_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct!.fallbackLabelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackLabelSelector = this._fallbackLabelSelector?.internalValue;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = value.fallbackLabelSelector;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
      this._strategy = value.strategy;
    }
  }

  // fallback_label_selector - computed: false, optional: true, required: false
  private _fallbackLabelSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelectorOutputReference(this, "fallback_label_selector");
  public get fallbackLabelSelector() {
    return this._fallbackLabelSelector;
  }
  public putFallbackLabelSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorFallbackLabelSelector) {
    this._fallbackLabelSelector.internalValue = value;
  }
  public resetFallbackLabelSelector() {
    this._fallbackLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackLabelSelectorInput() {
    return this._fallbackLabelSelector.internalValue;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources {
  /**
  * excluded is a slice of namespaced-scoped resource type names to exclude in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#excluded DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#excluded}
  */
  readonly excluded?: string[];
  /**
  * included is a slice of namespaced-scoped resource type names to include in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#included DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#included}
  */
  readonly included?: string[];
  /**
  * A metav1.LabelSelector to filter the target kubernetes resources that need to be backed up. If not set, will do not back up any kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excluded),
    included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.included),
    selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excluded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.included),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._included !== undefined) {
      hasAnyValues = true;
      internalValueResult.included = this._included;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._included = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._included = value.included;
      this._selector.internalValue = value.selector;
    }
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string[]; 
  public get excluded() {
    return this.getListAttribute('excluded');
  }
  public set excluded(value: string[]) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // included - computed: false, optional: true, required: false
  private _included?: string[]; 
  public get included() {
    return this.getListAttribute('included');
  }
  public set included(value: string[]) {
    this._included = value;
  }
  public resetIncluded() {
    this._included = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInput() {
    return this._included;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget {
  /**
  * Specifies the connection credential to connect to the target database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#connection_credential DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential;
  /**
  * Specifies the container port in the target pod. If not specified, the first container and its first port will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_port DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_port}
  */
  readonly containerPort?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort;
  /**
  * Specifies a mandatory and unique identifier for each target when using the 'targets' field. The backup data for the current target is stored in a uniquely named subdirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Used to find the target pod. The volumes of the target pod will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#pod_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector;
  /**
  * Specifies the kubernetes resources to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources;
  /**
  * Specifies the service account to run the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#service_account_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credential: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredentialToTerraform(struct!.connectionCredential),
    container_port: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPortToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    pod_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorToTerraform(struct!.podSelector),
    resources: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesToTerraform(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credential: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredentialToHclTerraform(struct!.connectionCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential",
    },
    container_port: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPortToHclTerraform(struct!.containerPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector",
    },
    resources: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredential = this._connectionCredential?.internalValue;
    }
    if (this._containerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = undefined;
      this._containerPort.internalValue = undefined;
      this._name = undefined;
      this._podSelector.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = value.connectionCredential;
      this._containerPort.internalValue = value.containerPort;
      this._name = value.name;
      this._podSelector.internalValue = value.podSelector;
      this._resources.internalValue = value.resources;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // connection_credential - computed: false, optional: true, required: false
  private _connectionCredential = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredentialOutputReference(this, "connection_credential");
  public get connectionCredential() {
    return this._connectionCredential;
  }
  public putConnectionCredential(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetConnectionCredential) {
    this._connectionCredential.internalValue = value;
  }
  public resetConnectionCredential() {
    this._connectionCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialInput() {
    return this._connectionCredential.internalValue;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPortOutputReference(this, "container_port");
  public get containerPort() {
    return this._containerPort;
  }
  public putContainerPort(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetContainerPort) {
    this._containerPort.internalValue = value;
  }
  public resetContainerPort() {
    this._containerPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort.internalValue;
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

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential {
  /**
  * Specifies the map key of the host in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#host_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Specifies the map key of the password in the connection credential secret. This password will be saved in the backup annotation for full backup. You can use the environment variable DP_ENCRYPTION_KEY to specify encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#password_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Specifies the map key of the port in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * Refers to the Secret object that contains the connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#secret_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Specifies the map key of the user in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#username_key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredentialToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port_key: cdktf.stringToTerraform(struct!.portKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredentialToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_key: {
      value: cdktf.stringToHclTerraform(struct!.portKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._portKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKey = this._portKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostKey = undefined;
      this._passwordKey = undefined;
      this._portKey = undefined;
      this._secretName = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostKey = value.hostKey;
      this._passwordKey = value.passwordKey;
      this._portKey = value.portKey;
      this._secretName = value.secretName;
      this._usernameKey = value.usernameKey;
    }
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port_key - computed: false, optional: true, required: false
  private _portKey?: string; 
  public get portKey() {
    return this.getStringAttribute('port_key');
  }
  public set portKey(value: string) {
    this._portKey = value;
  }
  public resetPortKey() {
    this._portKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKeyInput() {
    return this._portKey;
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

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort {
  /**
  * Specifies the name of container with the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#port_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPortToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPortToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort | cdktf.IResolvable): any {
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._portName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._portName = value.portName;
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

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector {
  /**
  * fallbackLabelSelector is used to filter available pods when the labelSelector fails. This only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#fallback_label_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#fallback_label_selector}
  */
  readonly fallbackLabelSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Specifies the strategy to select the target pod when multiple pods are selected. Valid values are: - 'Any': select any one pod that match the labelsSelector. - 'All': select all pods that match the labelsSelector. The backup data for the current pod will be stored in a subdirectory named after the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#strategy DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_label_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorToTerraform(struct!.fallbackLabelSelector),
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_label_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorToHclTerraform(struct!.fallbackLabelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackLabelSelector = this._fallbackLabelSelector?.internalValue;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = value.fallbackLabelSelector;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
      this._strategy = value.strategy;
    }
  }

  // fallback_label_selector - computed: false, optional: true, required: false
  private _fallbackLabelSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelectorOutputReference(this, "fallback_label_selector");
  public get fallbackLabelSelector() {
    return this._fallbackLabelSelector;
  }
  public putFallbackLabelSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorFallbackLabelSelector) {
    this._fallbackLabelSelector.internalValue = value;
  }
  public resetFallbackLabelSelector() {
    this._fallbackLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackLabelSelectorInput() {
    return this._fallbackLabelSelector.internalValue;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsList",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources {
  /**
  * excluded is a slice of namespaced-scoped resource type names to exclude in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#excluded DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#excluded}
  */
  readonly excluded?: string[];
  /**
  * included is a slice of namespaced-scoped resource type names to include in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#included DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#included}
  */
  readonly included?: string[];
  /**
  * A metav1.LabelSelector to filter the target kubernetes resources that need to be backed up. If not set, will do not back up any kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excluded),
    included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.included),
    selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excluded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.included),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._included !== undefined) {
      hasAnyValues = true;
      internalValueResult.included = this._included;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._included = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._included = value.included;
      this._selector.internalValue = value.selector;
    }
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string[]; 
  public get excluded() {
    return this.getListAttribute('excluded');
  }
  public set excluded(value: string[]) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // included - computed: false, optional: true, required: false
  private _included?: string[]; 
  public get included() {
    return this.getListAttribute('included');
  }
  public set included(value: string[]) {
    this._included = value;
  }
  public resetIncluded() {
    this._included = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInput() {
    return this._included;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets {
  /**
  * Specifies the connection credential to connect to the target database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#connection_credential DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential;
  /**
  * Specifies the container port in the target pod. If not specified, the first container and its first port will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#container_port DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#container_port}
  */
  readonly containerPort?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort;
  /**
  * Specifies a mandatory and unique identifier for each target when using the 'targets' field. The backup data for the current target is stored in a uniquely named subdirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Used to find the target pod. The volumes of the target pod will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#pod_selector DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector;
  /**
  * Specifies the kubernetes resources to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources;
  /**
  * Specifies the service account to run the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#service_account_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credential: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredentialToTerraform(struct!.connectionCredential),
    container_port: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPortToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    pod_selector: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorToTerraform(struct!.podSelector),
    resources: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesToTerraform(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credential: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredentialToHclTerraform(struct!.connectionCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential",
    },
    container_port: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPortToHclTerraform(struct!.containerPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector",
    },
    resources: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources",
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredential = this._connectionCredential?.internalValue;
    }
    if (this._containerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = undefined;
      this._containerPort.internalValue = undefined;
      this._name = undefined;
      this._podSelector.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = value.connectionCredential;
      this._containerPort.internalValue = value.containerPort;
      this._name = value.name;
      this._podSelector.internalValue = value.podSelector;
      this._resources.internalValue = value.resources;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // connection_credential - computed: false, optional: true, required: false
  private _connectionCredential = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredentialOutputReference(this, "connection_credential");
  public get connectionCredential() {
    return this._connectionCredential;
  }
  public putConnectionCredential(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsConnectionCredential) {
    this._connectionCredential.internalValue = value;
  }
  public resetConnectionCredential() {
    this._connectionCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialInput() {
    return this._connectionCredential.internalValue;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPortOutputReference(this, "container_port");
  public get containerPort() {
    return this._containerPort;
  }
  public putContainerPort(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsContainerPort) {
    this._containerPort.internalValue = value;
  }
  public resetContainerPort() {
    this._containerPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort.internalValue;
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

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec {
  /**
  * Specifies the number of retries before marking the backup as failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#backoff_limit DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#backoff_limit}
  */
  readonly backoffLimit?: number;
  /**
  * Defines the backup methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#backup_methods DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#backup_methods}
  */
  readonly backupMethods: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods[] | cdktf.IResolvable;
  /**
  * Specifies the name of BackupRepo where the backup data will be stored. If not set, data will be stored in the default backup repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#backup_repo_name DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#backup_repo_name}
  */
  readonly backupRepoName?: string;
  /**
  * Specifies the parameters for encrypting backup data. Encryption will be disabled if the field is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#encryption_config DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#encryption_config}
  */
  readonly encryptionConfig?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig;
  /**
  * Specifies the directory inside the backup repository to store the backup. This path is relative to the path of the backup repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#path_prefix DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Specifies the target information to back up, such as the target pod, the cluster connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#target DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget;
  /**
  * Specifies multiple target information for backup operations. This includes details such as the target pod and cluster connection credentials. All specified targets will be backed up collectively. optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#targets DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#targets}
  */
  readonly targets?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets[] | cdktf.IResolvable;
  /**
  * Specifies whether backup data should be stored in a Kopia repository. Data within the Kopia repository is both compressed and encrypted. Furthermore, data deduplication is implemented across various backups of the same cluster. This approach significantly reduces the actual storage usage, particularly for clusters with a low update frequency. NOTE: This feature should NOT be enabled when using KubeBlocks Community Edition, otherwise the backup will not be processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#use_kopia DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest#use_kopia}
  */
  readonly useKopia?: boolean | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    backup_methods: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsToTerraform, false)(struct!.backupMethods),
    backup_repo_name: cdktf.stringToTerraform(struct!.backupRepoName),
    encryption_config: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigToTerraform(struct!.encryptionConfig),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    target: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetToTerraform(struct!.target),
    targets: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsToTerraform, false)(struct!.targets),
    use_kopia: cdktf.booleanToTerraform(struct!.useKopia),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff_limit: {
      value: cdktf.numberToHclTerraform(struct!.backoffLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_methods: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsToHclTerraform, false)(struct!.backupMethods),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsList",
    },
    backup_repo_name: {
      value: cdktf.stringToHclTerraform(struct!.backupRepoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_config: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget",
    },
    targets: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsList",
    },
    use_kopia: {
      value: cdktf.booleanToHclTerraform(struct!.useKopia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoffLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffLimit = this._backoffLimit;
    }
    if (this._backupMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMethods = this._backupMethods?.internalValue;
    }
    if (this._backupRepoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRepoName = this._backupRepoName;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._useKopia !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKopia = this._useKopia;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoffLimit = undefined;
      this._backupMethods.internalValue = undefined;
      this._backupRepoName = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._pathPrefix = undefined;
      this._target.internalValue = undefined;
      this._targets.internalValue = undefined;
      this._useKopia = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoffLimit = value.backoffLimit;
      this._backupMethods.internalValue = value.backupMethods;
      this._backupRepoName = value.backupRepoName;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._pathPrefix = value.pathPrefix;
      this._target.internalValue = value.target;
      this._targets.internalValue = value.targets;
      this._useKopia = value.useKopia;
    }
  }

  // backoff_limit - computed: false, optional: true, required: false
  private _backoffLimit?: number; 
  public get backoffLimit() {
    return this.getNumberAttribute('backoff_limit');
  }
  public set backoffLimit(value: number) {
    this._backoffLimit = value;
  }
  public resetBackoffLimit() {
    this._backoffLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffLimitInput() {
    return this._backoffLimit;
  }

  // backup_methods - computed: false, optional: false, required: true
  private _backupMethods = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethodsList(this, "backup_methods", false);
  public get backupMethods() {
    return this._backupMethods;
  }
  public putBackupMethods(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecBackupMethods[] | cdktf.IResolvable) {
    this._backupMethods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodsInput() {
    return this._backupMethods.internalValue;
  }

  // backup_repo_name - computed: false, optional: true, required: false
  private _backupRepoName?: string; 
  public get backupRepoName() {
    return this.getStringAttribute('backup_repo_name');
  }
  public set backupRepoName(value: string) {
    this._backupRepoName = value;
  }
  public resetBackupRepoName() {
    this._backupRepoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRepoNameInput() {
    return this._backupRepoName;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // use_kopia - computed: false, optional: true, required: false
  private _useKopia?: boolean | cdktf.IResolvable; 
  public get useKopia() {
    return this.getBooleanAttribute('use_kopia');
  }
  public set useKopia(value: boolean | cdktf.IResolvable) {
    this._useKopia = value;
  }
  public resetUseKopia() {
    this._useKopia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKopiaInput() {
    return this._useKopia;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest}
*/
export class DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dataprotection_kubeblocks_io_backup_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
