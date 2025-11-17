// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#metadata DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata;
  /**
  * Defines the desired state of the BackupPolicyTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#spec DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#annotations DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#labels DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#optional DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#api_version DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#field_path DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#container_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#divisor DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#resource DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#optional DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#config_map_key_ref DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#field_ref DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#resource_field_ref DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#secret_key_ref DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromSecretKeyRef) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#value DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#value_from DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv | cdktf.IResolvable): any {
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
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvValueFrom) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef {
  /**
  * Specifies the appropriate version of the backup tool image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#mapping_value DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#mapping_value}
  */
  readonly mappingValue: string;
  /**
  * Represents an array of names of ComponentDefinition that can be mapped to the appropriate version of the backup tool image. This mapping allows different versions of component images to correspond to specific versions of backup tool images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#names DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#names}
  */
  readonly names: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_value: cdktf.stringToTerraform(struct!.mappingValue),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping_value: {
      value: cdktf.stringToHclTerraform(struct!.mappingValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingValue = this._mappingValue;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappingValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappingValue = value.mappingValue;
      this._names = value.names;
    }
  }

  // mapping_value - computed: false, optional: false, required: true
  private _mappingValue?: string; 
  public get mappingValue() {
    return this.getStringAttribute('mapping_value');
  }
  public set mappingValue(value: string) {
    this._mappingValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingValueInput() {
    return this._mappingValue;
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef {
  /**
  * Specifies the appropriate version of the backup tool image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#mapping_value DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#mapping_value}
  */
  readonly mappingValue: string;
  /**
  * Represents an array of names of ComponentDefinition that can be mapped to the appropriate version of the backup tool image. This mapping allows different versions of component images to correspond to specific versions of backup tool images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#names DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#names}
  */
  readonly names: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_value: cdktf.stringToTerraform(struct!.mappingValue),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping_value: {
      value: cdktf.stringToHclTerraform(struct!.mappingValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingValue = this._mappingValue;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappingValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappingValue = value.mappingValue;
      this._names = value.names;
    }
  }

  // mapping_value - computed: false, optional: false, required: true
  private _mappingValue?: string; 
  public get mappingValue() {
    return this.getStringAttribute('mapping_value');
  }
  public set mappingValue(value: string) {
    this._mappingValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingValueInput() {
    return this._mappingValue;
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom {
  /**
  * Determine the appropriate version of the backup tool image from ClusterVersion. Deprecated since v0.9, since ClusterVersion is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#cluster_version_ref DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#cluster_version_ref}
  */
  readonly clusterVersionRef?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef[] | cdktf.IResolvable;
  /**
  * Determine the appropriate version of the backup tool image from ComponentDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#component_def DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#component_def}
  */
  readonly componentDef?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_version_ref: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefToTerraform, false)(struct!.clusterVersionRef),
    component_def: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefToTerraform, false)(struct!.componentDef),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_version_ref: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefToHclTerraform, false)(struct!.clusterVersionRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefList",
    },
    component_def: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefToHclTerraform, false)(struct!.componentDef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVersionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVersionRef = this._clusterVersionRef?.internalValue;
    }
    if (this._componentDef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDef = this._componentDef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterVersionRef.internalValue = undefined;
      this._componentDef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterVersionRef.internalValue = value.clusterVersionRef;
      this._componentDef.internalValue = value.componentDef;
    }
  }

  // cluster_version_ref - computed: false, optional: true, required: false
  private _clusterVersionRef = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRefList(this, "cluster_version_ref", false);
  public get clusterVersionRef() {
    return this._clusterVersionRef;
  }
  public putClusterVersionRef(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromClusterVersionRef[] | cdktf.IResolvable) {
    this._clusterVersionRef.internalValue = value;
  }
  public resetClusterVersionRef() {
    this._clusterVersionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionRefInput() {
    return this._clusterVersionRef.internalValue;
  }

  // component_def - computed: false, optional: true, required: false
  private _componentDef = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDefList(this, "component_def", false);
  public get componentDef() {
    return this._componentDef;
  }
  public putComponentDef(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromComponentDef[] | cdktf.IResolvable) {
    this._componentDef.internalValue = value;
  }
  public resetComponentDef() {
    this._componentDef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefInput() {
    return this._componentDef.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping {
  /**
  * Specifies the environment variable key in the mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Specifies the source used to derive the value of the environment variable, which typically represents the tool image required for backup operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#value_from DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#value_from}
  */
  readonly valueFrom: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value_from: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: false, required: true
  private _valueFrom = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#claims DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#limits DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#requests DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings {
  /**
  * Specifies the resource required by container. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#resources DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsResources) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential {
  /**
  * Specifies the map key of the host in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#host_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Specifies the map key of the password in the connection credential secret. This password will be saved in the backup annotation for full backup. You can use the environment variable DP_ENCRYPTION_KEY to specify encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#password_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Specifies the map key of the port in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#port_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * Refers to the Secret object that contains the connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#secret_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Specifies the map key of the user in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#username_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredentialToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredentialToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort {
  /**
  * Specifies the name of container with the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#container_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#port_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPortToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPortToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#operator DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#values DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_expressions DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_labels DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#operator DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#values DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector {
  /**
  * fallbackLabelSelector is used to filter available pods when the labelSelector fails. This only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#fallback_label_selector DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#fallback_label_selector}
  */
  readonly fallbackLabelSelector?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_expressions DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_labels DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Specifies the strategy to select the target pod when multiple pods are selected. Valid values are: - 'Any': select any one pod that match the labelsSelector. - 'All': select all pods that match the labelsSelector. The backup data for the current pod will be stored in a subdirectory named after the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#strategy DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_label_selector: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorToTerraform(struct!.fallbackLabelSelector),
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_label_selector: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct!.fallbackLabelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector | cdktf.IResolvable | undefined) {
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
  private _fallbackLabelSelector = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelectorOutputReference(this, "fallback_label_selector");
  public get fallbackLabelSelector() {
    return this._fallbackLabelSelector;
  }
  public putFallbackLabelSelector(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorFallbackLabelSelector) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#operator DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#values DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_expressions DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_labels DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources {
  /**
  * excluded is a slice of namespaced-scoped resource type names to exclude in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#excluded DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#excluded}
  */
  readonly excluded?: string[];
  /**
  * included is a slice of namespaced-scoped resource type names to include in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#included DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#included}
  */
  readonly included?: string[];
  /**
  * A metav1.LabelSelector to filter the target kubernetes resources that need to be backed up. If not set, will do not back up any kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#selector DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excluded),
    included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.included),
    selector: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources | cdktf.IResolvable): any {
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
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources | cdktf.IResolvable | undefined) {
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
  private _selector = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesSelector) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget {
  /**
  * If 'backupPolicy.componentDefs' is set, this field is required to specify the system account name. This account must match one listed in 'componentDefinition.spec.systemAccounts[*].name'. The corresponding secret created by this account is used to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#account DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#account}
  */
  readonly account?: string;
  /**
  * Specifies the connection credential to connect to the target database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#connection_credential DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential;
  /**
  * Specifies the container port in the target pod. If not specified, the first container and its first port will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#container_port DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#container_port}
  */
  readonly containerPort?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort;
  /**
  * Specifies the fallback role to select one replica for backup, this only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#fallback_role DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#fallback_role}
  */
  readonly fallbackRole?: string;
  /**
  * Specifies a mandatory and unique identifier for each target when using the 'targets' field. The backup data for the current target is stored in a uniquely named subdirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Used to find the target pod. The volumes of the target pod will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#pod_selector DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector;
  /**
  * Specifies the kubernetes resources to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#resources DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources;
  /**
  * Specifies the role to select one or more replicas for backup. - If no replica with the specified role exists, the backup task will fail. Special case: If there is only one replica in the cluster, it will be used for backup, even if its role differs from the specified one. For example, if you specify backing up on a secondary replica, but the cluster is single-node with only one primary replica, the primary will be used for backup. Future versions will address this special case using role priorities. - If multiple replicas satisfy the specified role, the choice ('Any' or 'All') will be made according to the 'strategy' field below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#role DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#role}
  */
  readonly role: string;
  /**
  * Specifies the service account to run the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#service_account_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Specifies the PodSelectionStrategy to use when multiple pods are selected for the backup target. Valid values are: - Any: Selects any one pod that matches the labelsSelector. - All: Selects all pods that match the labelsSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#strategy DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    connection_credential: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredentialToTerraform(struct!.connectionCredential),
    container_port: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPortToTerraform(struct!.containerPort),
    fallback_role: cdktf.stringToTerraform(struct!.fallbackRole),
    name: cdktf.stringToTerraform(struct!.name),
    pod_selector: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorToTerraform(struct!.podSelector),
    resources: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesToTerraform(struct!.resources),
    role: cdktf.stringToTerraform(struct!.role),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_credential: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredentialToHclTerraform(struct!.connectionCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential",
    },
    container_port: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPortToHclTerraform(struct!.containerPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort",
    },
    fallback_role: {
      value: cdktf.stringToHclTerraform(struct!.fallbackRole),
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
    pod_selector: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector",
    },
    resources: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._connectionCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredential = this._connectionCredential?.internalValue;
    }
    if (this._containerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort?.internalValue;
    }
    if (this._fallbackRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackRole = this._fallbackRole;
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
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._connectionCredential.internalValue = undefined;
      this._containerPort.internalValue = undefined;
      this._fallbackRole = undefined;
      this._name = undefined;
      this._podSelector.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._role = undefined;
      this._serviceAccountName = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._connectionCredential.internalValue = value.connectionCredential;
      this._containerPort.internalValue = value.containerPort;
      this._fallbackRole = value.fallbackRole;
      this._name = value.name;
      this._podSelector.internalValue = value.podSelector;
      this._resources.internalValue = value.resources;
      this._role = value.role;
      this._serviceAccountName = value.serviceAccountName;
      this._strategy = value.strategy;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // connection_credential - computed: false, optional: true, required: false
  private _connectionCredential = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredentialOutputReference(this, "connection_credential");
  public get connectionCredential() {
    return this._connectionCredential;
  }
  public putConnectionCredential(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetConnectionCredential) {
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
  private _containerPort = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPortOutputReference(this, "container_port");
  public get containerPort() {
    return this._containerPort;
  }
  public putContainerPort(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetContainerPort) {
    this._containerPort.internalValue = value;
  }
  public resetContainerPort() {
    this._containerPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort.internalValue;
  }

  // fallback_role - computed: false, optional: true, required: false
  private _fallbackRole?: string; 
  public get fallbackRole() {
    return this.getStringAttribute('fallback_role');
  }
  public set fallbackRole(value: string) {
    this._fallbackRole = value;
  }
  public resetFallbackRole() {
    this._fallbackRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRoleInput() {
    return this._fallbackRole;
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
  private _podSelector = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetPodSelector) {
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
  private _resources = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#mount_path DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#mount_propagation DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#read_only DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#sub_path DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#sub_path_expr DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes {
  /**
  * Specifies the mount for the volumes specified in 'volumes' section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#volume_mounts DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts[] | cdktf.IResolvable;
  /**
  * Specifies the list of volumes of targeted application that should be mounted on the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#volumes DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#volumes}
  */
  readonly volumes?: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_mounts: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes | cdktf.IResolvable | undefined) {
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
  private _volumeMounts = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesVolumeMounts[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential {
  /**
  * Specifies the map key of the host in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#host_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Specifies the map key of the password in the connection credential secret. This password will be saved in the backup annotation for full backup. You can use the environment variable DP_ENCRYPTION_KEY to specify encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#password_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Specifies the map key of the port in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#port_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * Refers to the Secret object that contains the connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#secret_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Specifies the map key of the user in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#username_key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredentialToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredentialToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort {
  /**
  * Specifies the name of container with the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#container_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#port_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPortToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPortToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#operator DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#values DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_expressions DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_labels DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#operator DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#values DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector {
  /**
  * fallbackLabelSelector is used to filter available pods when the labelSelector fails. This only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#fallback_label_selector DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#fallback_label_selector}
  */
  readonly fallbackLabelSelector?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_expressions DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_labels DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Specifies the strategy to select the target pod when multiple pods are selected. Valid values are: - 'Any': select any one pod that match the labelsSelector. - 'All': select all pods that match the labelsSelector. The backup data for the current pod will be stored in a subdirectory named after the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#strategy DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_label_selector: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorToTerraform(struct!.fallbackLabelSelector),
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_label_selector: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorToHclTerraform(struct!.fallbackLabelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector | cdktf.IResolvable | undefined) {
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
  private _fallbackLabelSelector = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelectorOutputReference(this, "fallback_label_selector");
  public get fallbackLabelSelector() {
    return this._fallbackLabelSelector;
  }
  public putFallbackLabelSelector(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorFallbackLabelSelector) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#key DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#operator DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#values DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_expressions DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#match_labels DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources {
  /**
  * excluded is a slice of namespaced-scoped resource type names to exclude in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#excluded DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#excluded}
  */
  readonly excluded?: string[];
  /**
  * included is a slice of namespaced-scoped resource type names to include in the kubernetes resources. The default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#included DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#included}
  */
  readonly included?: string[];
  /**
  * A metav1.LabelSelector to filter the target kubernetes resources that need to be backed up. If not set, will do not back up any kubernetes resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#selector DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excluded),
    included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.included),
    selector: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources | cdktf.IResolvable): any {
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
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources | cdktf.IResolvable | undefined) {
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
  private _selector = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesSelector) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets {
  /**
  * Specifies the connection credential to connect to the target database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#connection_credential DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential;
  /**
  * Specifies the container port in the target pod. If not specified, the first container and its first port will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#container_port DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#container_port}
  */
  readonly containerPort?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort;
  /**
  * Specifies a mandatory and unique identifier for each target when using the 'targets' field. The backup data for the current target is stored in a uniquely named subdirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Used to find the target pod. The volumes of the target pod will be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#pod_selector DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector;
  /**
  * Specifies the kubernetes resources to back up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#resources DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources;
  /**
  * Specifies the service account to run the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#service_account_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credential: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredentialToTerraform(struct!.connectionCredential),
    container_port: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPortToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    pod_selector: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorToTerraform(struct!.podSelector),
    resources: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesToTerraform(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credential: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredentialToHclTerraform(struct!.connectionCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential",
    },
    container_port: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPortToHclTerraform(struct!.containerPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector",
    },
    resources: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets | cdktf.IResolvable | undefined) {
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
  private _connectionCredential = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredentialOutputReference(this, "connection_credential");
  public get connectionCredential() {
    return this._connectionCredential;
  }
  public putConnectionCredential(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsConnectionCredential) {
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
  private _containerPort = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPortOutputReference(this, "container_port");
  public get containerPort() {
    return this._containerPort;
  }
  public putContainerPort(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsContainerPort) {
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
  private _podSelector = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsPodSelector) {
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
  private _resources = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsResources) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods {
  /**
  * Refers to the ActionSet object that defines the backup actions. For volume snapshot backup, the actionSet is not required, the controller will use the CSI volume snapshotter to create the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#action_set_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#action_set_name}
  */
  readonly actionSetName?: string;
  /**
  * Specifies the environment variables for the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#env DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv[] | cdktf.IResolvable;
  /**
  * Specifies a mapping of an environment variable key to the appropriate version of the tool image required for backups, as determined by ClusterVersion and ComponentDefinition. The environment variable is then injected into the container executing the backup task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#env_mapping DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#env_mapping}
  */
  readonly envMapping?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping[] | cdktf.IResolvable;
  /**
  * The name of backup method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies runtime settings for the backup workload container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#runtime_settings DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#runtime_settings}
  */
  readonly runtimeSettings?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings;
  /**
  * Specifies whether to take snapshots of persistent volumes. If true, the ActionSetName is not required, the controller will use the CSI volume snapshotter to create the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#snapshot_volumes DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#snapshot_volumes}
  */
  readonly snapshotVolumes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the target information to back up, it will override the target in backup policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#target DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget;
  /**
  * Specifies which volumes from the target should be mounted in the backup workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#target_volumes DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#target_volumes}
  */
  readonly targetVolumes?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes;
  /**
  * Specifies multiple target information for backup operations. This includes details such as the target pod and cluster connection credentials. All specified targets will be backed up collectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#targets DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#targets}
  */
  readonly targets?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_set_name: cdktf.stringToTerraform(struct!.actionSetName),
    env: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvToTerraform, false)(struct!.env),
    env_mapping: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingToTerraform, false)(struct!.envMapping),
    name: cdktf.stringToTerraform(struct!.name),
    runtime_settings: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsToTerraform(struct!.runtimeSettings),
    snapshot_volumes: cdktf.booleanToTerraform(struct!.snapshotVolumes),
    target: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetToTerraform(struct!.target),
    target_volumes: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesToTerraform(struct!.targetVolumes),
    targets: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsToTerraform, false)(struct!.targets),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvList",
    },
    env_mapping: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingToHclTerraform, false)(struct!.envMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_settings: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsToHclTerraform(struct!.runtimeSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings",
    },
    snapshot_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget",
    },
    target_volumes: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesToHclTerraform(struct!.targetVolumes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes",
    },
    targets: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods | cdktf.IResolvable | undefined {
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
    if (this._envMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envMapping = this._envMapping?.internalValue;
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionSetName = undefined;
      this._env.internalValue = undefined;
      this._envMapping.internalValue = undefined;
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
      this._envMapping.internalValue = value.envMapping;
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
  private _env = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_mapping - computed: false, optional: true, required: false
  private _envMapping = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMappingList(this, "env_mapping", false);
  public get envMapping() {
    return this._envMapping;
  }
  public putEnvMapping(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsEnvMapping[] | cdktf.IResolvable) {
    this._envMapping.internalValue = value;
  }
  public resetEnvMapping() {
    this._envMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envMappingInput() {
    return this._envMapping.internalValue;
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
  private _runtimeSettings = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettingsOutputReference(this, "runtime_settings");
  public get runtimeSettings() {
    return this._runtimeSettings;
  }
  public putRuntimeSettings(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsRuntimeSettings) {
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
  private _target = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTarget) {
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
  private _targetVolumes = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumesOutputReference(this, "target_volumes");
  public get targetVolumes() {
    return this._targetVolumes;
  }
  public putTargetVolumes(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetVolumes) {
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
  private _targets = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsTargets[] | cdktf.IResolvable) {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules {
  /**
  * Defines the backup method name that is defined in backupPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#backup_method DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#backup_method}
  */
  readonly backupMethod: string;
  /**
  * Represents the cron expression for schedule, with the timezone set in UTC. Refer to https://en.wikipedia.org/wiki/Cron for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#cron_expression DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Specifies whether the backup schedule is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#enabled DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines the duration for which the backup should be retained. The controller will remove all backups that are older than the RetentionPeriod. For instance, a RetentionPeriod of '30d' will retain only the backups from the last 30 days. Sample duration format: - years: 2y - months: 6mo - days: 30d - hours: 12h - minutes: 30m These durations can also be combined, for example: 30d12h30m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#retention_period DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#retention_period}
  */
  readonly retentionPeriod?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_method: cdktf.stringToTerraform(struct!.backupMethod),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_method: {
      value: cdktf.stringToHclTerraform(struct!.backupMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMethod = this._backupMethod;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupMethod = undefined;
      this._cronExpression = undefined;
      this._enabled = undefined;
      this._retentionPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupMethod = value.backupMethod;
      this._cronExpression = value.cronExpression;
      this._enabled = value.enabled;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // backup_method - computed: false, optional: false, required: true
  private _backupMethod?: string; 
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }
  public set backupMethod(value: string) {
    this._backupMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort {
  /**
  * Specifies the name of container with the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#container_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#port_name DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#port_name}
  */
  readonly portName?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPortToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPortToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget {
  /**
  * If 'backupPolicy.componentDefs' is set, this field is required to specify the system account name. This account must match one listed in 'componentDefinition.spec.systemAccounts[*].name'. The corresponding secret created by this account is used to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#account DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#account}
  */
  readonly account?: string;
  /**
  * Specifies the container port in the target pod. If not specified, the first container and its first port will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#container_port DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#container_port}
  */
  readonly containerPort?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort;
  /**
  * Specifies the fallback role to select one replica for backup, this only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#fallback_role DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#fallback_role}
  */
  readonly fallbackRole?: string;
  /**
  * Specifies the role to select one or more replicas for backup. - If no replica with the specified role exists, the backup task will fail. Special case: If there is only one replica in the cluster, it will be used for backup, even if its role differs from the specified one. For example, if you specify backing up on a secondary replica, but the cluster is single-node with only one primary replica, the primary will be used for backup. Future versions will address this special case using role priorities. - If multiple replicas satisfy the specified role, the choice ('Any' or 'All') will be made according to the 'strategy' field below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#role DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#role}
  */
  readonly role: string;
  /**
  * Specifies the PodSelectionStrategy to use when multiple pods are selected for the backup target. Valid values are: - Any: Selects any one pod that matches the labelsSelector. - All: Selects all pods that match the labelsSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#strategy DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    container_port: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPortToTerraform(struct!.containerPort),
    fallback_role: cdktf.stringToTerraform(struct!.fallbackRole),
    role: cdktf.stringToTerraform(struct!.role),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPortToHclTerraform(struct!.containerPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort",
    },
    fallback_role: {
      value: cdktf.stringToHclTerraform(struct!.fallbackRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._containerPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort?.internalValue;
    }
    if (this._fallbackRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackRole = this._fallbackRole;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._containerPort.internalValue = undefined;
      this._fallbackRole = undefined;
      this._role = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._containerPort.internalValue = value.containerPort;
      this._fallbackRole = value.fallbackRole;
      this._role = value.role;
      this._strategy = value.strategy;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPortOutputReference(this, "container_port");
  public get containerPort() {
    return this._containerPort;
  }
  public putContainerPort(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetContainerPort) {
    this._containerPort.internalValue = value;
  }
  public resetContainerPort() {
    this._containerPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort.internalValue;
  }

  // fallback_role - computed: false, optional: true, required: false
  private _fallbackRole?: string; 
  public get fallbackRole() {
    return this.getStringAttribute('fallback_role');
  }
  public set fallbackRole(value: string) {
    this._fallbackRole = value;
  }
  public resetFallbackRole() {
    this._fallbackRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRoleInput() {
    return this._fallbackRole;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies {
  /**
  * Specifies the maximum number of retry attempts for a backup before it is considered a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#backoff_limit DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#backoff_limit}
  */
  readonly backoffLimit?: number;
  /**
  * Defines an array of BackupMethods to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#backup_methods DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#backup_methods}
  */
  readonly backupMethods: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods[] | cdktf.IResolvable;
  /**
  * Specifies a list of names of ComponentDefinitions that the specified ClusterDefinition references. They should be different versions of definitions of the same component, thus allowing them to share a single BackupPolicy. Each name must adhere to the IANA Service Naming rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#component_defs DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#component_defs}
  */
  readonly componentDefs?: string[];
  /**
  * Defines the execution plans for backup tasks, specifying when and how backups should occur, and the retention period of backup files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#schedules DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#schedules}
  */
  readonly schedules?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules[] | cdktf.IResolvable;
  /**
  * Defines the selection criteria of instance to be backed up, and the connection credential to be used during the backup process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#target DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    backup_methods: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsToTerraform, false)(struct!.backupMethods),
    component_defs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.componentDefs),
    schedules: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesToTerraform, false)(struct!.schedules),
    target: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetToTerraform(struct!.target),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsToHclTerraform, false)(struct!.backupMethods),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsList",
    },
    component_defs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.componentDefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedules: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesToHclTerraform, false)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesList",
    },
    target: {
      value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies | cdktf.IResolvable | undefined {
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
    if (this._componentDefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDefs = this._componentDefs;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoffLimit = undefined;
      this._backupMethods.internalValue = undefined;
      this._componentDefs = undefined;
      this._schedules.internalValue = undefined;
      this._target.internalValue = undefined;
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
      this._componentDefs = value.componentDefs;
      this._schedules.internalValue = value.schedules;
      this._target.internalValue = value.target;
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
  private _backupMethods = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethodsList(this, "backup_methods", false);
  public get backupMethods() {
    return this._backupMethods;
  }
  public putBackupMethods(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesBackupMethods[] | cdktf.IResolvable) {
    this._backupMethods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodsInput() {
    return this._backupMethods.internalValue;
  }

  // component_defs - computed: false, optional: true, required: false
  private _componentDefs?: string[]; 
  public get componentDefs() {
    return this.getListAttribute('component_defs');
  }
  public set componentDefs(value: string[]) {
    this._componentDefs = value;
  }
  public resetComponentDefs() {
    this._componentDefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefsInput() {
    return this._componentDefs;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesOutputReference {
    return new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec {
  /**
  * Represents an array of BackupPolicy templates, with each template corresponding to a specified ComponentDefinition or to a group of ComponentDefinitions that are different versions of definitions of the same component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#backup_policies DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#backup_policies}
  */
  readonly backupPolicies: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies[] | cdktf.IResolvable;
  /**
  * Specifies a unique identifier for the BackupPolicyTemplate. This identifier will be used as the suffix of the name of automatically generated BackupPolicy. This prevents unintended overwriting of BackupPolicies due to name conflicts when multiple BackupPolicyTemplates are present. For instance, using 'backup-policy' for regular backups and 'backup-policy-hscale' for horizontal-scale ops can differentiate the policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#identifier DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest#identifier}
  */
  readonly identifier?: string;
}

export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_policies: cdktf.listMapper(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesToTerraform, false)(struct!.backupPolicies),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_policies: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesToHclTerraform, false)(struct!.backupPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesList",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicies = this._backupPolicies?.internalValue;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPolicies.internalValue = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPolicies.internalValue = value.backupPolicies;
      this._identifier = value.identifier;
    }
  }

  // backup_policies - computed: false, optional: false, required: true
  private _backupPolicies = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPoliciesList(this, "backup_policies", false);
  public get backupPolicies() {
    return this._backupPolicies;
  }
  public putBackupPolicies(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecBackupPolicies[] | cdktf.IResolvable) {
    this._backupPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPoliciesInput() {
    return this._backupPolicies.internalValue;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest k8s_apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest}
*/
export class DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest k8s_apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_backup_policy_template_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoBackupPolicyTemplateV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
